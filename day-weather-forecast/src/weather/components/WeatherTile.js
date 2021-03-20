import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Typography, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { format } from 'date-fns'
import theme from 'core/styles/theme'

const useStyles = makeStyles(() => ({
  container: {
    border: theme.borders.standard[1],
    borderWidth: '0 1px',
    margin: `${theme.spacing(2)}px 0`
  },
  dateText: {
    textAlign: 'center',
    marginBottom: theme.spacing(0.5),
    color: theme.colors.hardEmphasis
  },
  maxWeatherText: {
    textAlign: 'center',
    color: theme.colors.primary[1]
  },
  minWeatherText: {
    textAlign: 'center',
    color: theme.colors.primary[2]
  }
}))

const WeatherTile = ({ date, maxTemperature, minTemperature }) => {
  const classes = useStyles()

  const weatherDate = new Date(date)
  const roundedMaxTemperature = Math.round(maxTemperature)
  const roundedMinTemperature = Math.round(minTemperature)
  return (
    <Container maxWidth="xs" className={classes.container}>
      <Grid container direction="column">
        <Grid item className={classes.dateText}>
          <Typography variant="subtitle1">
            {format(weatherDate, 'EEEE d')}
          </Typography>
        </Grid>

        <Grid item className={classes.maxWeatherText}>
          <Typography variant="h4">{`${roundedMaxTemperature}°C`}</Typography>
        </Grid>
        <Grid item className={classes.minWeatherText}>
          <Typography variant="h6">{`${roundedMinTemperature}°C`}</Typography>
        </Grid>
      </Grid>
    </Container>
  )
}

export default WeatherTile
WeatherTile.propTypes = {
  date: PropTypes.string,
  minTemperature: PropTypes.number,
  maxTemperature: PropTypes.number,
  isShowOnlyLeftBorder: PropTypes.bool
}
WeatherTile.defaultProps = {
  date: '20/11/2000',
  minTemperature: 18,
  maxTemperature: 0
}
