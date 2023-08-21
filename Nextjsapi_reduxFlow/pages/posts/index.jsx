import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { handleGetPosts, handleDeletePost } from '../../services/posts.services'
import Link from 'next/link'
import styled from 'styled-components'

export default function PostsPage() {
    const posts = useSelector(state => state.POSTS.list)
    const isLoading = useSelector(state => !state.POSTS.checked);

    useEffect(() => {
        handleGetPosts()
    }, [])

    return <div>
        <h1>POSTS</h1>
        <h3>Total Posts: {posts.length}</h3>
        {(posts.slice(0, 10).map((post) => (
            <Post post={post} key={post.id} />
        )))
        }
    </div>
}

const StyledPostDiv = styled.div`
    border: 2px solid red;
    display: flex;
    padding: 15px;
    margin: 5px;
    border-radius: 15px;
    align-items: baseline;
`

function Post({ post }) {
    return <StyledPostDiv>
        <h3>{post.id}</h3>
        <Link href={`posts/${post.id}`}><span>{post.title}</span></Link>
        <article>{post.body}</article>
        <button onClick={() => handleDeletePost(post.id)}>Delete</button>
    </StyledPostDiv>
}
