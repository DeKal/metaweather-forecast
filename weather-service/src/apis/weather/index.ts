/**
 * @swagger
 * tags:
 *   name: Weather
 *   description: Weather
 */
import { FnController } from 'app/routeHandler'
import { IWeatherService } from 'services/weather'
import createGetByCityApi from './getByCity'

interface Dependecies {
  weatherService: IWeatherService
}

interface IWeatherApi {
  getByCityApi: FnController
}

const createWeatherApi = ({ weatherService }: Dependecies): IWeatherApi => {
  const { getByCity } = weatherService

  const getByCityApi = createGetByCityApi({ getByCity })

  return Object.freeze({
    getByCityApi
  })
}

export default createWeatherApi
