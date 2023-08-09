import { useState } from "react"

export default function App() {
    return <div className="App">
        <CounterBox />
    </div>
}

function CounterBox() {
    return <div className="Counter-Box">
        <h2 className="heading">Counter</h2>
        <Counters />
    </div>
}

function Counters() {
    const [step, stepState] = useState(1)
    const [count, countState] = useState(0)

    function stepMinusHandler() {
        stepState((s) => s - 1)
    }

    function stepPlusHandler() {
        stepState((s) => s + 1)
    }

    function countMinusHandler() {
        countState(count - step)
    }

    function countPlusHandler() {
        countState(count + step)
    }

    return <div>
        <div className="Steps">
            <UpdateButton onClick={stepMinusHandler} text="-" />
            <h4>Step: {step}</h4>
            <UpdateButton onClick={stepPlusHandler} text="+" />
        </div>
        <div className="Steps">
            <UpdateButton onClick={countMinusHandler} text="-" />
            <h4>Counter: {count}</h4>
            <UpdateButton onClick={countPlusHandler} text="+" />
        </div>
    </div>
}

function UpdateButton({ onClick, text }) {
    return (
        <button className="btn" type="button" onClick={onClick}>{text}</button>
    );
}