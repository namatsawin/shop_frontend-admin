import { createSlice } from '@reduxjs/toolkit'

import initialState from './state'

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, payload) => {
      state.auth = payload.payload
    },
  }
})

export const { setAuth } = authSlice.actions

export default authSlice.reducer