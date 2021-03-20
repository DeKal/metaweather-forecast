import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import API_URL from 'core/constants/api'

export const searchCity = createAsyncThunk('city/searchCity', async (city) => {
  const {
    data: { data: payload }
  } = await axios.get(`${API_URL}/city/search/?name=${city}`)

  return payload.cities
})
