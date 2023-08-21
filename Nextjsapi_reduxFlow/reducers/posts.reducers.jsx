import {
    GET_POSTS_REQUEST,
    GET_POSTS_RESOLVE,
    GET_POSTS_REJECT,
    GET_POSTID_REQUEST,
    GET_POSTID_RESOLVE,
    GET_POSTID_REJECT,
    DELETE_POST_REQUEST,
    DELETE_POST_RESOLVE,
    DELETE_POST_REJECT
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

        case GET_POSTID_REQUEST: {
            return {
                ...state,
                checked: false
            }
        }

        case GET_POSTID_RESOLVE: {
            return {
                ...state,
                list: payload,
                checked: true
            }
        }

        case GET_POSTID_REJECT: {
            return {
                ...state,
                checked: true
            }
        }

        case DELETE_POST_REQUEST: {
            return {
                ...state,
                checked: false
            }
        }

        case DELETE_POST_RESOLVE: {
            return {
                ...state,
                list: state.list.filter(post => post.id !== payload),
                checked: true
            }
        }

        case DELETE_POST_REJECT: {
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