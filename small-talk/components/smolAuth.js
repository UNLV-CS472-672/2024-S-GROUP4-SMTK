import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function SmolAuth(WrappedComponent) 
{
    function AuthorizedComponent(props) {
        const router = useRouter()

        useEffect(() => {
            /*
            get a cookie
            grab session id
            verify session id
            */
            const validSession = null;
            if (validSession == null) {
                router.push('/login');
            }
        }, []);

        return <WrappedComponent {...props}/>
    }

    return AuthorizedComponent;
}