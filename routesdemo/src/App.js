import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';

export default function App() {
    return <div className="App">
        <BrowserRouter>
            <Header />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/about' element={<About />} />
                <Route exact path='/services' element={<Services />} />
                <Route exact path='/signin' element={<SignIn />} />
                <Route exact path='/login' element={<Login />} />
            </Routes>
        </BrowserRouter>
    </div >
}

function Header() {
    return <header className="header">
        <h1 className="logo">Routers</h1>
        <ul className="list">
            <li><Link className="link" to="/">Home</Link></li>
            <li><Link className="link" to="/about">About</Link></li>
            <li><Link className="link" to="/services">Services</Link></li>
            <li><Link className="link" to="/signin">SignIn</Link></li>
        </ul>
    </header>
}

function Home() {
    return <main>
        <h3>This is Home Page : {React.version}</h3>
    </main>
}

function About() {
    return <main>
        <h3>This is About Page</h3>
    </main>
}

function Services() {
    return <main>
        <h3>This is Services Page</h3>
    </main>
}

function SignIn() {
    const [login, loginState] = useState(false)

    function setLoginState() {
        loginState((currentState) => !login)
    }

    if (login) {
        return <Navigate to="/login"></Navigate>
    }

    return <main>
        <h3>This is Sign In Page</h3>
        <button type='button' onClick={setLoginState}>Login</button>
    </main>
}

function Login() {
    return <main>
        <h3>This is Login In Page</h3>
    </main>
}