import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@material-ui/core'
import WeatherTile from './WeatherTile'
import Loading from './Loading'

const WeatherPanel = ({ weathers, loading }) => {
  if (loading) {
    return <Loading />
  }
  if (!weathers.length) {
    return 'No weather to display. Please search for a city.'
  }

  return (
    <Grid container>
      {weathers.map((weather) => (
        <Grid key={weather.date} item lg={12 / weathers.length} md={4} xs={6}>
          <WeatherTile
            date={weather.date}
            minTemperature={weather.minTemperature}
            maxTemperature={weather.maxTemperature}
          />
        </Grid>
      ))}
    </Grid>
  )
}

export default WeatherPanel
WeatherPanel.propTypes = {
  weathers: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string,
      minTemperature: PropTypes.number,
      maxTemperature: PropTypes.number
    })
  ),
  loading: PropTypes.bool
}
WeatherPanel.defaultProps = {
  weathers: [],
  loading: false
}
