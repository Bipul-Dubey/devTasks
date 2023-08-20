import { combineReducers } from 'redux'
import POSTS from './posts.reducers'
const createRootReducers = () => {
    return combineReducers({
        POSTS: POSTS
    })
}

export default createRootReducers