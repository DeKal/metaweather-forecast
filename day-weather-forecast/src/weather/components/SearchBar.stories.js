import React from 'react'
import theme from 'core/styles/theme'
import { ThemeProvider } from '@material-ui/core/styles'
import SearchBar from './SearchBar'

export default {
  title: 'Weather/Components/SearchBar',
  component: SearchBar
}
const list = [
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
export const Normal = () => (
  <ThemeProvider theme={theme}>
    <SearchBar placeholder="London" list={list} />
  </ThemeProvider>
)

export const Error = () => (
  <ThemeProvider theme={theme}>
    <SearchBar placeholder="London" error />
  </ThemeProvider>
)

export const Disabled = () => (
  <ThemeProvider theme={theme}>
    <SearchBar placeholder="London" disabled />
  </ThemeProvider>
)
