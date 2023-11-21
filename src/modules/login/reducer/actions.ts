import { createAction } from "@reduxjs/toolkit";

export const authenticate = createAction<{ token: string }>('login/authenticate')