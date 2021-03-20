import React from 'react'
import { Provider } from 'react-redux'

import { CssBaseline, ThemeProvider } from '@material-ui/core'

import theme from 'core/styles/theme'
import store from 'state/core/store'
import GlobalStyle from 'core/styles/globalCss'
import WeatherForecast from 'weather/containers/WeatherForecast'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <WeatherForecast />
      </ThemeProvider>
    </Provider>
  )
}

export default App
