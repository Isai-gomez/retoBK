# API de Clima

Esta API permite obtener información del clima para ciudades de origen y destino utilizando OpenWeatherMap y un archivo JSON local que contiene las IATA de las ciudades.

## Tabla de Contenidos

- [Características](#características)
- [Requisitos](#requisitos)
- [Instalación](#instalación)
- [Uso](#uso)
- [Endpoints](#endpoints)
- [Ejemplo de Respuesta](#ejemplo-de-respuesta)
- [Contribuciones](#contribuciones)
- [Licencia](#licencia)

## Características

- Leer IATA de un archivo JSON local.
- Obtener datos del clima para ciudades de origen y destino.
- Respuestas en formato JSON del clima de ciudades.

## Requisitos

- Node.js
- Axios
- Express
- fs (filesystem)

## Instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/tu_usuario/tu_repositorio.git
   cd tu_repositorio

   ```

2. Instala las dependencias:
   yarn install
3. Crea un archivo .env en la raíz del proyecto y agrega tu API_KEY de OpenWeatherMap:
   OPENWEATHER_API_KEY=
4. Inicia el servidor:
   yarn start

## Endpoints

1. Filtrar iatas unicas
   Método: GET
   Ruta: http://localhost:3000/read-json

Parámetros de Consulta
No requiere parámetros.

Respuesta
Devuelve array con las iatas definidas en el archivo JSON.

Ejemplo de Solicitud
GET http://localhost:3000/read-json

Ejemplo de Respuesta
{
"IATAS": [
{
"IATA": "TLC",
"city": ""
},
{
"IATA": "MTY",
"city": ""
},
{
"IATA": "MEX",
"city": ""
},
{
"IATA": "TAM",
"city": ""
},
{
"IATA": "GDL",
"city": ""
},
{
"IATA": "CJS",
"city": ""
},
{
"IATA": "CUN",
"city": ""
},
{
"IATA": "TIJ",
"city": ""
},
{
"IATA": "HMO",
"city": ""
},
{
"IATA": "CME",
"city": ""
},
{
"IATA": "MID",
"city": ""
},
{
"IATA": "CTM",
"city": ""
},
{
"IATA": "VER",
"city": ""
},
{
"IATA": "OAX",
"city": ""
},
{
"IATA": "HUX",
"city": ""
},
{
"IATA": "ZIH",
"city": ""
},
{
"IATA": "PVR",
"city": ""
},
{
"IATA": "LIM",
"city": ""
},
{
"IATA": "HAV",
"city": ""
},
{
"IATA": "BOG",
"city": ""
},
{
"IATA": "MIA",
"city": ""
},
{
"IATA": "LAX",
"city": ""
},
{
"IATA": "JFK",
"city": ""
},
{
"IATA": "TRC",
"city": ""
},
{
"IATA": "PXM",
"city": ""
},
{
"IATA": "ACA",
"city": ""
},
{
"IATA": "MZT",
"city": ""
},
{
"IATA": "GUA",
"city": ""
},
{
"IATA": "AGU",
"city": ""
},
{
"IATA": "VSA",
"city": ""
},
{
"IATA": "BZE",
"city": ""
},
{
"IATA": "DFW",
"city": ""
},
{
"IATA": "CZM",
"city": ""
},
{
"IATA": "ORD",
"city": ""
},
{
"IATA": "PHX",
"city": ""
},
{
"IATA": "CUU",
"city": ""
},
{
"IATA": "QRO",
"city": ""
},
{
"IATA": "BJX",
"city": ""
},
{
"IATA": "PBC",
"city": ""
},
{
"IATA": "PHL",
"city": ""
},
{
"IATA": "SLP",
"city": ""
},
{
"IATA": "CLT",
"city": ""
},
{
"IATA": "YYZ",
"city": ""
},
{
"IATA": "IAH",
"city": ""
},
{
"IATA": "YVR",
"city": ""
},
{
"IATA": "CDG",
"city": ""
},
{
"IATA": "ZCL",
"city": ""
},
{
"IATA": "AMS",
"city": ""
},
{
"IATA": "ATL",
"city": ""
},
{
"IATA": "CEN",
"city": ""
},
{
"IATA": "MAD",
"city": ""
},
{
"IATA": "SCL",
"city": ""
}
]
} 2. Obtener clima de iata de ciudad origen y destino
Método: GET
Ruta: http://localhost:3000/weather?cityOrigin=lax&cityDestination=mex

Parámetros de Consulta
cityDestination
cityOrigin

Respuesta
Devuelve un json con el clima de la ciudad origen y destino.

Ejemplo de Solicitud
GET http://localhost:3000/weather?cityOrigin=lax&cityDestination=mex

Ejemplo de Respuesta
{
"origin": {
"city": "Los Ángeles",
"weather": {
"coord": {
"lon": -72.35,
"lat": -37.4667
},
"weather": [
{
"id": 800,
"main": "Clear",
"description": "clear sky",
"icon": "01n"
}
],
"base": "stations",
"main": {
"temp": 6.18,
"feels_like": 3.3,
"temp_min": 6.18,
"temp_max": 6.18,
"pressure": 1026,
"humidity": 69,
"sea_level": 1026,
"grnd_level": 1008
},
"visibility": 10000,
"wind": {
"speed": 4.02,
"deg": 187,
"gust": 12.77
},
"clouds": {
"all": 0
},
"dt": 1727313676,
"sys": {
"country": "CL",
"sunrise": 1727260400,
"sunset": 1727304506
},
"timezone": -10800,
"id": 3882428,
"name": "Los Ángeles",
"cod": 200
}
},
"destination": {
"city": "Ciudad de México",
"weather": {
"coord": {
"lon": -99.1277,
"lat": 19.4285
},
"weather": [
{
"id": 500,
"main": "Rain",
"description": "light rain",
"icon": "10n"
}
],
"base": "stations",
"main": {
"temp": 16.64,
"feels_like": 16.24,
"temp_min": 16.64,
"temp_max": 17.28,
"pressure": 1011,
"humidity": 72,
"sea_level": 1011,
"grnd_level": 760
},
"visibility": 10000,
"wind": {
"speed": 3.6,
"deg": 140
},
"rain": {
"1h": 0.25
},
"clouds": {
"all": 100
},
"dt": 1727313128,
"sys": {
"type": 2,
"id": 47729,
"country": "MX",
"sunrise": 1727267162,
"sunset": 1727310594
},
"timezone": -21600,
"id": 3530597,
"name": "Mexico City",
"cod": 200
}
}
}

1. Leer un json y consulta el clima de la ciudad origen y destino
   Método: GET
   Ruta: http://localhost:3000/get-weather-info

Parámetros de Consulta
No requiere parámetros.

Respuesta
Devuelve un json con el informe de la iata y el clima de la ciudad origen destino.

Ejemplo de Solicitud
GET http://localhost:3000/get-weather-info

Ejemplo de Respuesta
{
"message": "Resultados del clima recibidos",
"data": [
{
"informe": {
"origin": "TLC",
"destination": "MTY",
"airline": "4O",
"flight_num": 104,
"origin_iata_code": "TLC",
"origin_name": "Licenciado Adolfo Lopez Mateos International Airport",
"origin_latitude": 19.3371,
"origin_longitude": -99.566,
"destination_iata_code": "MTY",
"destination_name": "General Mariano Escobedo International Airport",
"destination_latitude": 25.7785,
"destination_longitude": -100.107
},
"weather": {
"origin": {
"city": "Toluca",
"weather": {
"coord": {
"lon": -99.6672,
"lat": 19.2883
},
"weather": [
{
"id": 803,
"main": "Clouds",
"description": "broken clouds",
"icon": "04n"
}
],
"base": "stations",
"main": {
"temp": 12.39,
"feels_like": 12.14,
"temp_min": 12.39,
"temp_max": 12.39,
"pressure": 1015,
"humidity": 94,
"sea_level": 1015,
"grnd_level": 723
},
"visibility": 9656,
"wind": {
"speed": 1.54,
"deg": 180
},
"clouds": {
"all": 75
},
"dt": 1727327699,
"sys": {
"type": 1,
"id": 7169,
"country": "MX",
"sunrise": 1727267291,
"sunset": 1727310724
},
"timezone": -21600,
"id": 3515302,
"name": "Toluca",
"cod": 200
}
},
"destination": {
"city": "Monterrey ",
"weather": {
"coord": {
"lon": -100.3167,
"lat": 25.6667
},
"weather": [
{
"id": 803,
"main": "Clouds",
"description": "broken clouds",
"icon": "04n"
}
],
"base": "stations",
"main": {
"temp": 26.98,
"feels_like": 29.07,
"temp_min": 26.37,
"temp_max": 26.98,
"pressure": 1012,
"humidity": 73,
"sea_level": 1012,
"grnd_level": 915
},
"visibility": 10000,
"wind": {
"speed": 1.91,
"deg": 194,
"gust": 1.84
},
"clouds": {
"all": 75
},
"dt": 1727327601,
"sys": {
"type": 2,
"id": 2004940,
"country": "MX",
"sunrise": 1727267472,
"sunset": 1727310854
},
"timezone": -21600,
"id": 3995465,
"name": "Monterrey",
"cod": 200
}
}
}
}
]
}
