import { Dispatch } from "redux"

import { IThunkAction } from "../../../store"
import { ILoginFormBody } from "../forms/LoginForm/LoginForm"
import { authenticate } from "./actions"

export function login(data: ILoginFormBody): IThunkAction<Promise<void>> {
  return async (dispatch: Dispatch, _, { api }) => {
    await new Promise(r => setTimeout(r, 1000))
    const result = await api.admin.authenticate(data)
    dispatch(authenticate(result))
  }
}