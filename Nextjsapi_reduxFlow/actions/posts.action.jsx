import API from '../api/posts.api'
import {
    GET_POSTS_REQUEST,
    GET_POSTS_RESOLVE,
    GET_POSTS_REJECT
} from "../actionTypes/posts.types";

export const getPosts = () => async (dispatch) => {
    dispatch({
        type: GET_POSTS_REQUEST
    })

    try {
        const response = await API.GetPosts()
        if (response.status === 200) {
            dispatch({
                type: GET_POSTS_RESOLVE,
                payload: response.data
            })
            return
        }
        dispatch({
            type: GET_POSTS_REJECT,
            payload: {}
        })
    } catch (error) {
        dispatch({
            type: GET_POSTS_REJECT,
            payload: {}
        })
    }
}