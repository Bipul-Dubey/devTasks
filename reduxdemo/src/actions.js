import { createStore } from 'redux'

export const login = () => ({
    type: 'LOGIN',
});

export const logout = () => ({
    type: 'LOGOUT',
});

const initialState = {
    isLoggedIn: false,
};

const loggedReducer = (currentState = initialState, action) => {
    if (action.type === 'LOGIN') {
        return { ...currentState, isLoggedIn: true };
    }
    else if (action.type === 'LOGOUT') {
        return { ...currentState, isLoggedIn: false };
    }
    return currentState;
};

const store = createStore(loggedReducer)
export default store;
