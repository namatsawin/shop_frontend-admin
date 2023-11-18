import { Dispatch } from "redux"

import { setAuth } from "."
import { IThunkAction } from ".."
import { LoginPresenter } from "@/presenters/login.presenter"

export function authenticate(data: LoginPresenter): IThunkAction<Promise<void>> {
  return async (dispatch: Dispatch, _, { api }) => {
    await new Promise(r => setTimeout(r, 1000))
    const result = await api.admin.authenticate(data)
    dispatch(setAuth(result))
  }
}