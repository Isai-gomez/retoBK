export const validateCities = (
  searchcityOrigin,
  searchcityDestination,
  cityOrigin,
  cityDestination,
  res,
) => {
  if (!searchcityDestination && !searchcityOrigin) {
    return res.status(400).json({
      error: `Debes proporcionar una iata de ciudad origen ${cityOrigin} y destino ${cityDestination} que esten en mi diccionario`,
    })
  }
  if (!searchcityOrigin) {
    return res.status(400).json({
      error: `Debes proporcionar una iata de ciudad origen ${cityOrigin} que este en mi diccionario`,
    })
  }
  if (!searchcityDestination) {
    return res.status(400).json({
      error: `Debes proporcionar una iata de ciudad destino ${cityDestination} que este en mi diccionario`,
    })
  }
  if (!searchcityOrigin.city || !searchcityDestination.city) {
    return res.status(400).json({ error: 'Debes proporcionar una ciudad' })
  }
}
