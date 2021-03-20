import { createSlice } from '@reduxjs/toolkit'
import { searchCity } from 'state/city/thunks'

const initialState = {
  cities: [],
  loading: false
}

export const { actions, reducer } = createSlice({
  name: 'city',
  initialState,
  extraReducers: {
    [searchCity.pending]: (state) => ({
      ...state,
      loading: true
    }),
    [searchCity.fulfilled]: (state, action) => ({
      ...state,
      loading: false,
      cities: action.payload
    }),
    [searchCity.rejected]: (state) => ({
      ...state,
      loading: false,
      cities: []
    })
  }
})
