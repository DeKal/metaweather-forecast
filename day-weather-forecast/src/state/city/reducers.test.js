import { reducer } from 'state/city/reducers'

describe('city reducer test', () => {
  describe('searchCity', () => {
    test('city/searchCity/pending should show loading = true', () => {
      const state = {
        cities: [],
        loading: false
      }

      const action = {
        type: 'city/searchCity/pending'
      }
      const result = reducer(state, action)

      expect(result.loading).toEqual(true)
    })

    test('city/searchCity/fulfilled should show payload', () => {
      const state = {
        cities: [],
        loading: false
      }

      const payload = [
        {
          title: 'London',
          woeid: 44418
        },
        {
          title: 'Lond',
          woeid: 44418
        },
        {
          title: 'Lo',
          woeid: 44418
        }
      ]

      const action = {
        type: 'city/searchCity/fulfilled',
        payload
      }
      const result = reducer(state, action)

      expect(result.loading).toEqual(false)
      expect(result.cities).toEqual(payload)
    })

    test('city/searchCity/rejected should clear payload', () => {
      const state = {
        cities: [
          {
            title: 'London',
            woeid: 44418
          },
          {
            title: 'Lond',
            woeid: 44418
          },
          {
            title: 'Lo',
            woeid: 44418
          }
        ],
        loading: false
      }

      const action = {
        type: 'city/searchCity/rejected'
      }
      const result = reducer(state, action)

      expect(result.loading).toEqual(false)
      expect(result.cities).toEqual([])
    })
  })
})
