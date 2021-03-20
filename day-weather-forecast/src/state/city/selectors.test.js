import { getCityList, getLoadingStateForCityApi } from './selectors'

const state = {
  city: {
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
}
describe('city selectors test', () => {
  test('getCityList should return list', () => {
    const cities = getCityList(state)
    expect(cities).toEqual([
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
    ])
  })

  test('getLoadingStateForCityApi should return false', () => {
    const loading = getLoadingStateForCityApi(state)
    expect(loading).toEqual(false)
  })
})
