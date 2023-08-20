import {
    GET_POSTS_REQUEST,
    GET_POSTS_RESOLVE,
    GET_POSTS_REJECT
} from '../actionTypes/posts.types'

export const initialState = {
    list: [],
    checked: false
}

export default function APIReducer(state = initialState, action) {
    const { type, payload } = action

    switch (type) {
        case GET_POSTS_REQUEST: {
            return {
                ...state,
                checked: false
            }
        }
        case GET_POSTS_RESOLVE: {
            return {
                ...state,
                list: payload,
                checked: true
            }
        }
        case GET_POSTS_REJECT: {
            return {
                ...state,
                checked: true
            }
        }
        default: {
            return state;
        }
    }
}