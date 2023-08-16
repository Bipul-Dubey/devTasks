import { useRouter } from 'next/router'

export default function Demo() {
    const router = useRouter()
    function Toabout() {
        router.push('/about')
    }

    return <>
        <h3>this is demo</h3>
        <button onClick={Toabout}>About</button>
    </>
}
