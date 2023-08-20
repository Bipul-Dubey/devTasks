import { useRouter } from "next/router";

export default function Posts() {
    const router = useRouter();
    const { postid } = router.query
    { console.log(postid); }
    return <div>
        <h1>POST : {postid}</h1>
    </div>
}