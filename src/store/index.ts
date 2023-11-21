import { Action, ThunkDispatch, configureStore } from '@reduxjs/toolkit'

import login from '../modules/login/reducer'
import { APIService } from '@/commons/services/api/api.service'

interface IExtraThunkArg { api: APIService }

export const store = configureStore({
  reducer: {
    login
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