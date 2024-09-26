import { iatasCity } from './IATAcity.js'
export const searchIATA = (iataString) =>
  iatasCity.find((iata) => iata.IATA === iataString)
