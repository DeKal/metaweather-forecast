import { createSlice } from '@reduxjs/toolkit'
import { getWeatherByCity } from 'state/weather/thunks'

const initialState = {
  weathers: [],
  loading: false
}

export const { actions, reducer } = createSlice({
  name: 'weather',
  initialState,
  extraReducers: {
    [getWeatherByCity.pending]: (state) => ({
      ...state,
      loading: true
    }),
    [getWeatherByCity.fulfilled]: (state, action) => ({
      ...state,
      loading: false,
      weathers: action.payload
    }),
    [getWeatherByCity.rejected]: (state) => ({
      ...state,
      loading: false,
      weathers: []
    })
  }
})
