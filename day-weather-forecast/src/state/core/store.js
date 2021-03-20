import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './rootReducers'

const configureAppStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production'
  })

  return store
}
const store = configureAppStore()

export default store
