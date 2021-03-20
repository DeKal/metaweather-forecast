import { getWeathers, getWeatherLoading } from './selectors'

const state = {
  weather: {
    weathers: [
      {
        date: '2021-03-18',
        maxTemperature: 12.4,
        minTemperature: 4.7
      },
      {
        date: '2021-03-19',
        maxTemperature: 13.4,
        minTemperature: 3.7
      },
      {
        date: '2021-03-20',
        maxTemperature: 15.4,
        minTemperature: 4.7
      }
    ],
    loading: false
  }
}
describe('weather selectors test', () => {
  test('getWeathers should return list', () => {
    const cities = getWeathers(state)
    expect(cities).toEqual([
      {
        date: '2021-03-18',
        maxTemperature: 12.4,
        minTemperature: 4.7
      },
      {
        date: '2021-03-19',
        maxTemperature: 13.4,
        minTemperature: 3.7
      },
      {
        date: '2021-03-20',
        maxTemperature: 15.4,
        minTemperature: 4.7
      }
    ])
  })

  test('getWeatherLoading should return false', () => {
    const loading = getWeatherLoading(state)
    expect(loading).toEqual(false)
  })
})
