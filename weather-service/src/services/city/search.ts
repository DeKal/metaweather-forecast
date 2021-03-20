import utils from 'utils'
import axios from 'axios'
import { IServiceRespone } from 'utils/handleResult'

export type FnSearchCity = (
  city: string
) => Promise<IServiceRespone<Array<WeatherCity> | null>>

interface WeatherCity {
  title: string
  woeid: number
}

const createSearchCity = (): FnSearchCity => {
  return async (city) => {
    try {
      const { data } = await axios.get(
        `${process.env.WEATHER_API}/api/location/search/?query=${city}`
      )
      const listCity: Array<WeatherCity> = data

      if (!listCity || !listCity.length) {
        return utils.newServiceResponse([])
      }

      return utils.newServiceResponse(
        listCity.map((city) => ({
          title: city.title,
          woeid: city.woeid
        }))
      )
    } catch (err) {
      return utils.newServiceResponse(
        null,
        'Internal server error, cannot connect to metaweather'
      )
    }
  }
}

export default createSearchCity
