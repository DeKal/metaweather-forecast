import React from 'react'
import { fireEvent, getByTestId, render } from '@testing-library/react'
import WeatherForecast from 'weather/pages/WeatherForecast'

jest.mock('weather/containers/WeatherPanel')
jest.mock('weather/containers/SearchBar')

describe('WeatherForecast test', () => {
  test('should render correctly', () => {
    const getWeatherByCityMock = jest.fn()
    const { container } = render(
      <WeatherForecast
        searchCity={() => {}}
        getWeatherByCity={getWeatherByCityMock}
      />
    )
    expect(container).toMatchSnapshot()

    const input = getByTestId(container, 'mock-search-bar')
    fireEvent.change(input, {
      target: { value: 111 }
    })

    expect(getWeatherByCityMock).toBeCalledWith('111')
  })
})
