import API from '../api/posts.api'
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

export const getPostId = (id) => async (dispatch) => {
    dispatch({
        type: GET_POSTID_REQUEST
    })

    try {
        const response = await API.GetPostId(id)
        if (response.status === 200) {
            dispatch({
                type: GET_POSTID_RESOLVE,
                payload: response.data
            })
            return
        }
        dispatch({
            type: GET_POSTID_REJECT,
            payload: {}
        })
    } catch (error) {
        dispatch({
            type: GET_POSTID_REJECT,
            payload: {}
        })
    }
}

export const deletePost = (id) => async (dispatch) => {
    dispatch({
        type: DELETE_POST_REQUEST
    })

    try {
        const response = await API.DeletePost(id)
        if (response.status === 200) {
            dispatch({
                type: DELETE_POST_RESOLVE,
                payload: response
            })
            return
        }
        dispatch({
            type: DELETE_POST_REJECT,
            payload: {}
        })
    } catch (error) {
        dispatch({
            type: DELETE_POST_REJECT,
            payload: {}
        })
    }
}