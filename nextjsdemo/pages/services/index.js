import styled from 'styled-components'

export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json()
    return { props: { data } }
}

export default function Services({ data }) {
    return <>
        <h2>This is service page</h2>
        <APIDataContainer data={data} />
    </>
}

function APIDataContainer({ data }) {
    return <div>
        <h1>Posts</h1>
        {
            data.slice(0, 10).map((currEle) => {
                return (<PostList currentElement={currEle} key={currEle.id}></PostList>)
            })
        }
    </div>
}

const Post = styled.div`
    display: flex;
    flex-direction: column;
    border: 2px solid green;
    margin: 3px;
    padding: 7px;

`
const Title = styled.section`
    display: flex;
    align-items: baseline;
    gap: 7px;
`


function PostList({ currentElement }) {
    return <Post>
        <Title>
            <h3>ID: {currentElement.id}</h3>
            <strong>Title: {currentElement.title}</strong>
        </Title>
        <p>{currentElement.body}</p>
    </Post>
}