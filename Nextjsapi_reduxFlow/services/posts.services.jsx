import { getPosts, getPostId, deletePost } from '../actions/posts.action'
import { store } from '../store'

export const handleGetPosts = () => {
    return store.dispatch(getPosts())
}

export const handleGetPost = (id) => {
    return store.dispatch(getPostId(id))
}

export const handleDeletePost = (id) => {
    return store.dispatch(deletePost(id))
}