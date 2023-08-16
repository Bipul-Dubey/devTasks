import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
export default function Services() {
    const isLoggedIn = useSelector(state => state.isLoggedIn);

    const router = useRouter()

    return <div>
        {isLoggedIn ? (
            <h1>this is services page</h1>
        ) : useEffect(() => { router.push('/signin') })
        }
    </div>
}