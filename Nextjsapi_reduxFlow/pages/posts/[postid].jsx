import { useRouter } from "next/router";
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { handleGetPost } from '../../services/posts.services'
import styled from 'styled-components'

const StyledPostDiv = styled.div`
    border: 2px solid red;
    padding: 15px;
    margin: 5px;
    border-radius: 15px;
`

export default function Posts() {
    const router = useRouter();
    const { postid } = router.query
    const post = useSelector(state => state.POSTS.list)

    useEffect(() => {
        handleGetPost(postid)
    }, [])

    return <StyledPostDiv>
        <h1>POST : {postid}</h1>
        <div>
            <div>Title : {post.title}</div>
            <div>Post: {post.body}</div>
        </div>
    </StyledPostDiv>
}