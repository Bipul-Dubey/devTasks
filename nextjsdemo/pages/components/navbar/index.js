import Link from "next/link";
import { useSelector, useDispatch } from 'react-redux';
import { loggedActions } from "../../../redux-store/authenticateSlice";

export default function Navbar() {
    const isLoggedIn = useSelector(state => state.isLoggedIn);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(loggedActions.logout());
    };

    return <header className="header">
        <h1 className="logo">Routers</h1>
        <ul className="list">
            {isLoggedIn ? (
                <>
                    <li><Link className="link" href={{ pathname: '/' }}>Home</Link></li>
                    <li><Link className="link" href={{ pathname: '/posts' }}>Posts</Link></li>
                    <li><Link className="link" href={{ pathname: '/about' }}>About Us</Link></li>
                    <li><Link className="link" href={{ pathname: '/services' }}>Services</Link></li>
                    <li><Link className="link" href={{ pathname: '/' }}><button className="btn" onClick={handleLogout}>Sign Out</button></Link></li>
                </>
            ) : (
                <>
                    <li><Link className="link" href={{ pathname: '/' }}>Home</Link></li>
                    <li><Link className="link" href={{ pathname: '/posts' }}>Posts</Link></li>
                    <li><Link className="link" href={{ pathname: '/signin' }}>Sign In</Link></li>
                </>
            )}
        </ul>
    </header>
}