import utils from 'utils'
import axios from 'axios'
import { IServiceRespone } from 'utils/handleResult'

export type FnGetByCity = (
  cityId: string
) => Promise<IServiceRespone<Array<Weather> | null>>

interface MetaWeather {
  min_temp: number
  max_temp: number
  applicable_date: string
}
interface Weather {
  minTemperature: number
  maxTemperature: number
  date: string
}

const createGetByCity = (): FnGetByCity => {
  return async (cityId) => {
    try {
      const { data } = await axios.get(
        `${process.env.WEATHER_API}/api/location/${cityId}`
      )

      const listWeather = data.consolidated_weather as Array<MetaWeather>

      if (!listWeather || !listWeather.length) {
        return utils.newServiceResponse([])
      }

      return utils.newServiceResponse(
        listWeather.map((weather) => ({
          minTemperature: weather.min_temp,
          maxTemperature: weather.max_temp,
          date: weather.applicable_date
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

export default createGetByCity
