import React from 'react'
import { render } from '@testing-library/react'
import WeatherPanel from 'weather/components/WeatherPanel'

const weathers = [
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
  },
  {
    date: '2021-03-21',
    maxTemperature: 19.4,
    minTemperature: 4.7
  },
  {
    date: '2021-03-22',
    maxTemperature: 12.4,
    minTemperature: 4.7
  },
  {
    date: '2021-03-23',
    maxTemperature: 12.4,
    minTemperature: 4.7
  }
]

describe('WeatherPanel test', () => {
  test('render correctly', () => {
    const { container } = render(<WeatherPanel weathers={weathers} />)
    expect(container).toMatchSnapshot()
  })
  test('render empty panel correctly', () => {
    const { container } = render(<WeatherPanel />)
    expect(container).toMatchSnapshot()
  })
  test('render loading panel correctly', () => {
    const { container } = render(<WeatherPanel loading />)
    expect(container).toMatchSnapshot()
  })
})
