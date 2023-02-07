import { useState, useCallback, useEffect } from 'react';
import {UserContext} from '../context/UserContext';
import {useUser} from '@auth0/nextjs-auth0/client'
import Navigation from '../components/Navbar'

const Home = () => {
    const { user, error, isLoading } = useUser();
    const [userContext, setUserContext] = useState(UserContext)

    console.log(user)
    return ( 
            <div>
                 <Navigation/>
            </div>    
        )
    }

export default Home