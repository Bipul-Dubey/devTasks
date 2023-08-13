import { useDispatch } from 'react-redux'
import { loggedActions } from '../../redux-store/authenticateSlice'
import { useRouter } from 'next/router'

export default function SignIn() {
    const dispatch = useDispatch();
    const router = useRouter()

    const handleLogin = () => {
        dispatch(loggedActions.login());
        router.push('/')

    };

    return <main>
        <h1>This is Sign In Page</h1>
        <button className="btn" onClick={handleLogin}>Sign In</button>
    </main>
}