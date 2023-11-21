import { RootState } from "../../../store"

export interface LoginState {
  auth: any
}

export const initialState: LoginState = {
  auth: null,
}

export const selectAuth = (state: RootState) => state.login.auth

export default initialState
