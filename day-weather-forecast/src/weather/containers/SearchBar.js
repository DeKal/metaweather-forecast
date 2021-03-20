import { connect } from 'react-redux'
import { getCityList, getLoadingStateForCityApi } from 'state/city/selectors'

import SearchBar from 'weather/components/SearchBar'

const mapStateToProps = (state) => ({
  list: getCityList(state),
  loading: getLoadingStateForCityApi(state)
})

export default connect(mapStateToProps)(SearchBar)
