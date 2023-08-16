import styled from "styled-components";

export const getStaticPaths = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await res.json()

    const paths = data.map((currEle) => {
        return {
            params: {
                id: currEle.id.toString()
            }
        }
    })

    return {
        paths,
        fallback: false
    }

}

export const getStaticProps = async (context) => {
    const id = context.params.id
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json()
    return { props: { data } }
}

const PostDiv = styled.div`
    display: flex;
    flex-direction: column;
    border: 2px solid green;
    margin: 3px;
    padding: 7px;

`
const TitleSection = styled.section`
    display: flex;
    align-items: baseline;
    gap: 7px;
`


export default function PostList({ data }) {
    return <PostDiv>
        <TitleSection>
            <h4>ID: {data.id}</h4>
            <strong>Title: {data.title}</strong>
        </TitleSection>
        <p>{data.body}</p>
    </PostDiv>
}