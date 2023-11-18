import { Action, ThunkDispatch, configureStore } from '@reduxjs/toolkit'

import auth from './auth'
import { APIService } from '@/services/api/api.service'

interface IExtraThunkArg { api: APIService }

export const store = configureStore({
  reducer: {
    auth
  },
  middleware: getDefaultMiddleware => {
    const extraArgument: IExtraThunkArg = {
      api: APIService.getInstance()
    }
    return getDefaultMiddleware({
      thunk: {
        extraArgument
      }
    })
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type IThunkAction<TReturnType = Promise<void>> = (
  dispatch: ThunkDispatch<RootState, IExtraThunkArg, Action>,
  getState: () => RootState,
  extraArgument: IExtraThunkArg,
) => TReturnType;


export default store;