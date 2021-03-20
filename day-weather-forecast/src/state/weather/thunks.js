import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import API_URL from 'core/constants/api'

export const getWeatherByCity = createAsyncThunk(
  'weather/getWeatherByCity',
  async (cityId) => {
    const {
      data: { data: payload }
    } = await axios.get(`${API_URL}/weather/?cityId=${cityId}`)

    return payload.weathers
  }
)
