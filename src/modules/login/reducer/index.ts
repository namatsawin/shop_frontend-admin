import { createReducer } from '@reduxjs/toolkit'

import initialState from './state'
import { authenticate } from './actions'

export const loginReducer = createReducer(initialState, (builder) => {
  builder.addCase(authenticate, (state, action) => {
    state.auth = action.payload
  }) 
})

export default loginReducer