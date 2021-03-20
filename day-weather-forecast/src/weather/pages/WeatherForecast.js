import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Container, makeStyles } from '@material-ui/core'
import debounce from 'lodash/debounce'
import WeatherPanel from 'weather/containers/WeatherPanel'
import SearchBar from 'weather/containers/SearchBar'

const useStyles = makeStyles((theme) => ({
  search: {
    marginTop: theme.spacing(4)
  }
}))

const WeatherForecast = ({ searchCity, getWeatherByCity }) => {
  const classes = useStyles()
  return (
    <Container maxWidth="lg">
      <Grid container spacing={4}>
        <Grid item sm={6} xs={12}>
          <SearchBar
            placeholder="London"
            className={classes.search}
            fullWidth
            onChange={(city) => {
              if (city) {
                getWeatherByCity(city.woeid)
              }
            }}
            onChangeInput={debounce(function makeQuery(query) {
              searchCity(query)
            }, 200)}
          />
        </Grid>
        <Grid item xs={12}>
          <WeatherPanel />
        </Grid>
      </Grid>
    </Container>
  )
}
export default WeatherForecast
WeatherForecast.propTypes = {
  searchCity: PropTypes.func.isRequired,
  getWeatherByCity: PropTypes.func.isRequired
}
