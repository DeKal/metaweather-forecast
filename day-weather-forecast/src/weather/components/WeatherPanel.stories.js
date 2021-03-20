import React from 'react'
import theme from 'core/styles/theme'
import { ThemeProvider } from '@material-ui/core/styles'
import WeatherPanel from './WeatherPanel'

export default {
  title: 'Weather/Components/WeatherPanel',
  component: WeatherPanel
}

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

export const Normal = () => (
  <ThemeProvider theme={theme}>
    <WeatherPanel weathers={weathers} />
  </ThemeProvider>
)

export const Loading = () => (
  <ThemeProvider theme={theme}>
    <WeatherPanel loading />
  </ThemeProvider>
)
