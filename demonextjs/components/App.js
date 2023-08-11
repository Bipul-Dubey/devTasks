import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';

export default function App() {
    const [isLoggedIn, setLoggedInState] = useState(false)

    return <div className="App">
        <BrowserRouter>
            <Header isLogin={isLoggedIn} onLogoutUpdate={setLoggedInState} />
            <Routes>

                <Route exact path='/signin' element={<SignIn onLoginUpdate={setLoggedInState} />} />
                <Route exact path='/signup' element={<SignUp onLoginUpdate={setLoggedInState} />} />

                {/* only after login */}
                {isLoggedIn && (
                    <>
                        <Route exact path='/about' element={<About />} />
                        <Route exact path='/services' element={<Services />} />
                    </>
                )}

                {/* anytime */}
                <Route exact path='/' element={<Home />} />
                <Route path='/:pageName' element={<PageNotFound />} />

            </Routes>
        </BrowserRouter>
    </div >
}

function Header({ isLogin, onLogoutUpdate }) {
    const navigate = useNavigate()

    return <header className="header">
        <h1 className="logo">Routers</h1>
        <ul className="list">
            {!isLogin ? <>
                <li><Link className="link" to="/">Home</Link></li>
                <li><Link className="link" to="/signin">Sign In</Link></li>
                <li><Link className="link" to="/signup">Sign Up</Link></li>
            </>
                : <>
                    <li><Link className="link" to="/">Home</Link></li>
                    <li><Link className="link" to="/about">About</Link></li>
                    <li><Link className="link" to="/services">Services</Link></li>
                    <li><Link className="link" to="/" onClick={() => { onLogoutUpdate(false); navigate("/"); }}>Sign out</Link></li>
                </>}
        </ul>
    </header>
}

function Home() {
    return <main>
        <h3>This is Home Page</h3>
    </main>
}

function SignUp({ onLoginUpdate }) {
    const navigate = useNavigate();
    return <main>
        <h3>This is Sign Up Page</h3>
        <button onClick={() => { onLoginUpdate(true); navigate("/"); }}>SignUp</button>
    </main>
}

function SignIn({ onLoginUpdate }) {
    const navigate = useNavigate()
    return <main>
        <h3>This is Sign In Page</h3>
        <button type='button' onClick={() => { onLoginUpdate(true); navigate("/"); }}>Login</button>
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


function PageNotFound() {
    const params = useParams()
    return <div>{params.pageName} : page Not Found</div>
}