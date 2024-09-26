import express from 'express'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { searchIATA } from './searchIATA.js'
import { validateCities } from './Error/errorIATA.js'
import { getWeather } from './service/ServiceWeathermap.js'
import axios from 'axios'

const app = express()
const port = 3000

// Endpoint para obtener el clima
app.get('/weather', async (req, res) => {
  const cityOrigin = req.query.cityOrigin.toLocaleUpperCase()
  const cityDestination = req.query.cityDestination.toLocaleUpperCase()

  // Buscar la ciudad de la AITA
  const searchcityOrigin = searchIATA(cityOrigin)
  const searchcityDestination = searchIATA(cityDestination)

  try {
    // Llamar a la función de validación importada manegador de errror
    const validationError = validateCities(
      searchcityOrigin,
      searchcityDestination,
      cityOrigin,
      cityDestination,
      res,
    )

    // Si la validación ha fallado, se habrá retornado una respuesta, así que salimos
    if (validationError) return

    // Obtener el clima para ambas ciudades usando la función getWeather
    const weatherOrigin = await getWeather(searchcityOrigin.city)
    const weatherDestination = await getWeather(searchcityDestination.city)

    // Responder con los datos del clima
    res.status(200).json({
      origin: {
        city: searchcityOrigin.city,
        weather: weatherOrigin,
      },
      destination: {
        city: searchcityDestination.city,
        weather: weatherDestination,
      },
    })
  } catch (error) {
    console.error('Error al consultar la API del clima:', error)
    res.status(500).json({ error: error.message }) // Devolver el mensaje de error
  }
})

// Endpoint para leer json y consultar el tiempo de citeOrigin y citeDestination
app.get('/get-weather-info', async (req, res) => {
  const __filename = fileURLToPath(import.meta.url)
  const __dirname = path.dirname(__filename)
  const filePath = path.join(__dirname, 'DB', 'dataLimit.json')
  try {
    // Leer el archivo JSON de manera asíncrona
    const data = await fs.promises.readFile(filePath, 'utf8')
    const items = JSON.parse(data) // Convertir el JSON a objeto

    const weatherResults = []

    // Iterar sobre los items y hacer la llamada al endpoint /weather
    for (let item of items) {
      try {
        // Hacer la llamada al endpoint /weather
        const weatherResponse = await axios.get(
          'http://localhost:3000/weather',
          {
            params: {
              cityOrigin: item.origin,
              cityDestination: item.destination,
            },
          },
        )

        // Aquí recibimos los datos de la respuesta del primer endpoint
        const weatherData = weatherResponse.data

        // Acumular los resultados en un array
        weatherResults.push({
          informe: item,
          weather: weatherData,
        })
      } catch (error) {
        console.error('Error al llamar al endpoint /weather:', error.message)
        weatherResults.push({
          origin: item.origin,
          destination: item.destination,
          error: `Error al obtener el clima para ${item.origin} y ${item.destination}`,
        })
      }
    }

    // Enviar una única respuesta con todos los resultados
    res.status(200).json({
      message: 'Resultados del clima recibidos',
      data: weatherResults,
    })
  } catch (error) {
    console.error('Error al leer el archivo JSON:', error.message)
    res.status(500).json({ error: 'Error al leer el archivo JSON' })
  }
})
//Enpoint para leer json y obtener AItas no repetidas
app.get('/read-json', (req, res) => {
  // Ruta absoluta al archivo JSON
  const __filename = fileURLToPath(import.meta.url)
  const __dirname = path.dirname(__filename)
  const filePath = path.join(__dirname, 'DB', 'data.json')

  // Leer el archivo JSON
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Error al leer el archivo JSON' })
    }

    // Convertir el JSON a un array de objetos
    const items = JSON.parse(data)

    // Crear una lista para los elementos no repetidos
    const IATAS = []
    const IATASNames = new Set() // Usamos un Set para verificar los nombres repetidos

    // Recorrer el array de objetos
    for (let item of items) {
      if (!IATASNames.has(item.origin)) {
        IATAS.push({ IATA: item.origin, city: '' }) // Añadir solo si no está repetido
        IATASNames.add(item.origin) // Marcar el nombre como visto
      }
      if (!IATASNames.has(item.destination)) {
        IATAS.push({ IATA: item.destination, city: '' }) // Añadir solo si no está repetido
        IATASNames.add(item.destination)
      }
    }

    // Devolver los elementos no repetidos
    res.json({ IATAS })
  })
})

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor ejecutándose en http://localhost:${port}`)
})
