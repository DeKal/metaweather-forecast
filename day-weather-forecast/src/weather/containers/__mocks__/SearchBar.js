/* eslint-disable react/prop-types */
import React from 'react'

const MockSearchBar = (props) => (
  <input
    onChange={(e) => {
      props.onChange({
        woeid: e.target.value
      })
      props.onChangeInput(e.target.value)
    }}
    data-testid="mock-search-bar"
    type="text"
  />
)

export default MockSearchBar
