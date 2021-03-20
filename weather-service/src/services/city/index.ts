import createSearchCity, { FnSearchCity } from './search'

export interface ICityService {
  searchCity: FnSearchCity
}

const createCityService = (): ICityService => {
  const searchCity = createSearchCity()
  return Object.freeze({
    searchCity
  })
}

export default createCityService
