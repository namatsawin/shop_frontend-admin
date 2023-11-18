import { Dispatch } from "redux"
import { setAuth } from "."

export function authenticate()  {
  return (dispatch: Dispatch) => {
    return new Promise(resolve => {
      setTimeout(() => {
        dispatch(setAuth({ test: 1 }))
        resolve(true)
      }, 1000)
    })
  }
}