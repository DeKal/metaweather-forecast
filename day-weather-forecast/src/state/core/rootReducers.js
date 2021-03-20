import { reducer as weatherReducer } from 'state/weather/reducers'
import { reducer as cityReducer } from 'state/city/reducers'

const rootReducer = {
  weather: weatherReducer,
  city: cityReducer
}

export default rootReducer
