import { applyMiddleware, createStore } from "redux"
import thunk from "redux-thunk"
import { createWrapper } from "next-redux-wrapper"
import createRootReducers from "./reducers/root.reducers"
import { composeWithDevTools } from "redux-devtools-extension"

const initialState = {}

const middleware = [thunk]
const enhancer = composeWithDevTools(applyMiddleware(...middleware))

export const store = createStore(createRootReducers(), initialState, enhancer)
const makeStore = () => store

export const wrapper = createWrapper(makeStore)