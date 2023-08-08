import { useState } from "react";

const messages = [
    "Learn JavaScript ",
    "Learn React ⚛️",
    "Learn Next.js 🤑",
];

function App() {
    return <div>
        <Steps />
    </div>
}

function Steps() {
    const btnstyle = { backgroundColor: "#7950f2", color: "#fff" }
    const [step, stepState] = useState(1)
    const [isOpen, isOpenState] = useState(true)

    function previousHandler() {
        if (step > 1) stepState(step - 1)
    }

    function nextHandler() {
        if (step < 3) stepState(step + 1)
    }

    return <div>
        <div className="close" onClick={() => isOpenState(!isOpen)}>&times;</div>
        {
            isOpen && (
                <div className="steps">
                    <div className="numbers">
                        <div className={step >= 1 ? "active" : ""}>1</div>
                        <div className={step >= 2 ? "active" : ""}>2</div>
                        <div className={step === 3 ? "active" : ""}>3</div>
                    </div>
                    <p className="message">
                        Step {step} : {messages[step - 1]}
                    </p>
                    <div className="buttons">
                        <button style={btnstyle} onClick={previousHandler}>Previous</button>
                        <button style={btnstyle} onClick={nextHandler}>Next</button>
                    </div>
                </div>
            )
        }
    </div>
}

export default App