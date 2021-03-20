import React from 'react'
import theme from 'core/styles/theme'
import { ThemeProvider } from '@material-ui/core/styles'
import WeatherTile from './WeatherTile'

export default {
  title: 'Weather/Components/WeatherTile',
  component: WeatherTile
}

export const Normal = () => (
  <ThemeProvider theme={theme}>
    <WeatherTile date="2021-03-18" minTemperature={12} maxTemperature={23} />
  </ThemeProvider>
)
