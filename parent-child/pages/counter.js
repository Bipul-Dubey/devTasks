import { useState } from "react"

export default function Count() {
    const [count, setCount] = useState(0)

    function inceaseHandler() {
        setCount((cnt) => cnt + 1)
    }

    return <>
        <CountUI count={count} />
        <ButtonUI onclick={inceaseHandler} />
    </>
}

function CountUI({ count }) {
    return <>
        <h2>Count: {count}</h2>
    </>
}

function ButtonUI({ onclick }) {
    return <button onClick={onclick}>Incease</button>
}
