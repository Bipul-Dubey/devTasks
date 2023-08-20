import { getPosts } from '../actions/posts.action'
import { store } from '../store'

export const handleGetPosts = () => {
    return store.dispatch(getPosts())
}