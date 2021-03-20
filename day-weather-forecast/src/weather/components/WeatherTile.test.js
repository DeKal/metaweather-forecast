import React from 'react'
import { render } from '@testing-library/react'
import WeatherTile from 'weather/components/WeatherTile'

describe('WeatherTile test', () => {
  test('render correctly with rounded temp', () => {
    const { container } = render(
      <WeatherTile minTemperature={0} maxTemperature={1} date="2021-03-18" />
    )
    expect(container).toMatchSnapshot()
  })
  test('render correctly with floating temp', () => {
    const { container } = render(
      <WeatherTile
        minTemperature={5.6}
        maxTemperature={12.3}
        date="2021-03-18"
      />
    )
    expect(container).toMatchSnapshot()
  })
})
