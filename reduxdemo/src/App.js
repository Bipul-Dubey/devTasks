import React from 'react'
import { BrowserRouter, Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loggedActions } from './actions'

export default function App() {
  const isLoggedIn = useSelector(state => state.isLoggedIn);

  return <div className="App">
    <BrowserRouter>
      <Header />
      <Routes>

        <Route exact path='/signin' element={<SignIn />} />
        <Route exact path='/signup' element={<SignUp />} />

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

function Header() {
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(loggedActions.logout());
    navigate('/');
  };


  return <header className="header">
    <h1 className="logo">Routers</h1>
    <ul className="list">
      {!isLoggedIn ? <>
        <li><Link className="link" to="/">Home</Link></li>
        <li><Link className="link" to="/signin">Sign In</Link></li>
        <li><Link className="link" to="/signup">Sign Up</Link></li>
      </>
        : <>
          <li><Link className="link" to="/">Home</Link></li>
          <li><Link className="link" to="/about">About</Link></li>
          <li><Link className="link" to="/services">Services</Link></li>
          <li><Link className="link" to="/signin" onClick={handleLogout}>Sign out</Link></li>
        </>}
    </ul>
  </header>
}

function Home() {
  return <main>
    <h3>This is Home Page</h3>
  </main>
}

function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    dispatch(loggedActions.login());
    navigate('/');
  };

  return <main>
    <h3>This is Sign Up Page</h3>
    <button className='btn' onClick={handleLogin}>SignUp</button>
  </main>
}

function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    dispatch(loggedActions.login());
    navigate('/');
  };

  return <main>
    <h3>This is Sign In Page</h3>
    <button className='btn' type='button' onClick={handleLogin}>Login</button>
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