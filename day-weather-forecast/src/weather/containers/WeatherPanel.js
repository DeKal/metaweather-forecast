import { connect } from 'react-redux'

import WeatherPanel from 'weather/components/WeatherPanel'
import { getWeathers, getWeatherLoading } from 'state/weather/selectors'

const mapStateToProps = (state) => ({
  weathers: getWeathers(state),
  loading: getWeatherLoading(state)
})

export default connect(mapStateToProps)(WeatherPanel)
