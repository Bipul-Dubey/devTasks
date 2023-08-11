import { createSlice } from "@reduxjs/toolkit";
import { AppState } from './store'

const authSlice = createSlice({
    name: 'authenticate',
    initialState: { isAuthenticated: false },
    reducers: {
        setAuthState(state, action) {
            state.isAuthenticated = action.payload
        }
    },
})

export const { setAuthState } = authSlice.actions

export default authSlice.reducer;