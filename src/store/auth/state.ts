import { RootState } from ".."

export interface AuthState {
  auth: any
}

export const initialState: AuthState = {
  auth: null,
}

export const selectAuth = (state: RootState) => state.auth.auth

export default initialState
