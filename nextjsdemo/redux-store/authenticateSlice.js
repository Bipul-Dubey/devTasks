import { createSlice, configureStore } from '@reduxjs/toolkit'

const loggedSlice = createSlice({
    name: "loggedSlice",
    initialState: { isLoggedIn: false },
    reducers: {
        login(state) {
            state.isLoggedIn = true
        },
        logout(state) {
            state.isLoggedIn = false
        }
    }
})

const store = configureStore({
    reducer: loggedSlice.reducer
})

export const loggedActions = loggedSlice.actions;

export default store;