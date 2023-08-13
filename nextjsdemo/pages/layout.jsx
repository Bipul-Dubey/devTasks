import Navbar from "../pages/components/navbar";
import { Provider } from "react-redux";
import store from '../redux-store/authenticateSlice'


export default function Layout({ children }) {
    return (
        <Provider store={store}>
            <div className="App">
                <Navbar />
                {children}
            </div>
        </Provider>
    )
}