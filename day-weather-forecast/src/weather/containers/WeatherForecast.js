import { connect } from 'react-redux'
import WeatherForecast from 'weather/pages/WeatherForecast'
import { searchCity } from 'state/city/thunks'
import { getWeatherByCity } from 'state/weather/thunks'

const mapDispatchToProps = (dispatch) => ({
  searchCity: (city) => dispatch(searchCity(city)),
  getWeatherByCity: (cityId) => dispatch(getWeatherByCity(cityId))
})

export default connect(null, mapDispatchToProps)(WeatherForecast)
