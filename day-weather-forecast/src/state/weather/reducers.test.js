import { reducer } from 'state/weather/reducers'

describe('weather reducer test', () => {
  describe('getWeatherByCity', () => {
    test('weather/getWeatherByCity/pending should show loading = true', () => {
      const state = {
        weathers: [],
        loading: false
      }

      const action = {
        type: 'weather/getWeatherByCity/pending'
      }
      const result = reducer(state, action)

      expect(result.loading).toEqual(true)
    })

    test('weather/getWeatherByCity/fulfilled should show payload', () => {
      const state = {
        weathers: [],
        loading: false
      }

      const payload = [
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
      ]

      const action = {
        type: 'weather/getWeatherByCity/fulfilled',
        payload
      }
      const result = reducer(state, action)

      expect(result.loading).toEqual(false)
      expect(result.weathers).toEqual(payload)
    })

    test('weather/getWeatherByCity/rejected should clear payload', () => {
      const state = {
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

      const action = {
        type: 'weather/getWeatherByCity/rejected'
      }
      const result = reducer(state, action)

      expect(result.loading).toEqual(false)
      expect(result.weathers).toEqual([])
    })
  })
})
