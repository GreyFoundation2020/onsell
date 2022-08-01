import { configureStore } from '@reduxjs/toolkit'
import authenticationSlice from '../features/authenticationSlice'

export const store = configureStore({
  reducer: {
    auth: authenticationSlice,
  },
})
