/**
 * @swagger
 * tags:
 *   name: Weather
 *   description: Weather
 */
import { FnController } from 'app/routeHandler'
import { ICityService } from 'services/city'
import createSearchCityApi from './search'

interface Dependecies {
  cityService: ICityService
}

interface ICityApi {
  searchCityApi: FnController
}

const createCityApi = ({ cityService }: Dependecies): ICityApi => {
  const { searchCity } = cityService

  const searchCityApi = createSearchCityApi({
    searchCity
  })

  return Object.freeze({
    searchCityApi
  })
}

export default createCityApi
