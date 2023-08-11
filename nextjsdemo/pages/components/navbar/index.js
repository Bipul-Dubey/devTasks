import Link from "next/link";

export default function Navbar() {
    return <header className="header">
        <h1 className="logo">Routers</h1>
        <ul className="list">
            <li><Link className="link" href={{ pathname: '/' }}>Home</Link></li>
            <li><Link className="link" href={{ pathname: '/signin' }}>Sign In</Link></li>
            <li><Link className="link" href={{ pathname: '/about' }}>About Us</Link></li>
            <li><Link className="link" href={{ pathname: '/services' }}>Services</Link></li>
            <li><Link className="link" href={{ pathname: '/' }}>Sign Out</Link></li>
        </ul>
    </header>
}