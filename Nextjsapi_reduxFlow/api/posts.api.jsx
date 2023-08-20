import axios from "axios"
class PostsAPI {
    constructor() {
        this.url = "https://jsonplaceholder.typicode.com/posts"

        this.GetPosts = async () => {
            const result = await axios.get(this.url)
            return result
        }
    }
}

const API = new PostsAPI()
export default API