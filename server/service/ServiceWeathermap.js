import axios from 'axios'
import dotenv from 'dotenv'
dotenv.config()
const API_KEY = process.env.OPENWEATHER_API_KEY

export const getWeather = async (city) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`,
    )
    return response.data // Devuelve los datos del clima
  } catch (error) {
    throw new Error(`Error al obtener el clima para ${city}: ${error.message}`) // Manejo de errores
  }
}
