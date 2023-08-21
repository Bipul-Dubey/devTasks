import Link from "next/link";

export default function Home() {
  return <>
    <h1>Hello</h1>
    <Link href={"/posts"} >POSTS</Link> <br/>
    <Link href={"/googlemaps"} >Google Maps</Link>
  </>
}
