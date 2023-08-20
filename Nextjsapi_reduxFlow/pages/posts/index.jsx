import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { handleGetPosts } from '../../services/posts.services'
import Link from 'next/link'
import styled from 'styled-components'

export default function PostsPage() {
    const posts = useSelector(state => state.POSTS.list)

    useEffect(() => {
        handleGetPosts()
    }, [])

    return <div>
        <h1>POSTS</h1>
        {
            posts.map((post) => (
                <Post post={post} key={post.id} />
            ))
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
    </StyledPostDiv>
}
