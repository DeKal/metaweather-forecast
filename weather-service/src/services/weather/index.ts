import createGetByCity, { FnGetByCity } from './getByCity'

export interface IWeatherService {
  getByCity: FnGetByCity
}

const createWeatherService = (): IWeatherService => {
  const getByCity = createGetByCity()
  return Object.freeze({
    getByCity
  })
}

export default createWeatherService
