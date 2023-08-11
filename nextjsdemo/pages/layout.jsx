import Navbar from "../pages/components/navbar";

export default function Layout({ children }) {
    return (
        <div className="App">
            <Navbar />
            {children}
        </div>
    )
}