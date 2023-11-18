import { configureStore } from '@reduxjs/toolkit'

import auth from './auth'

export const store = configureStore({
  reducer: {
    auth
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {}
      }
    })
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;