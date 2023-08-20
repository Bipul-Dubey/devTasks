import { getPosts, getPostId } from '../actions/posts.action'
import { store } from '../store'

export const handleGetPosts = () => {
    return store.dispatch(getPosts())
}

export const handleGetPost = (id) => {
    return store.dispatch(getPostId(id))
}