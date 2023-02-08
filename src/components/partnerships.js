import { useState, useCallback, useEffect } from 'react';
import {UserContext} from '../context/UserContext';
import {useUser} from '@auth0/nextjs-auth0/client'
import {Button,Text} from '@mantine/core'

const Partnerships = () => {
    const { user, error, isLoading } = useUser();
    const [userContext, setUserContext] = useState(UserContext)

    return ( 
            <div>
                <Text style={{padding: 30,fontFamily:'Visuelt', fontWeight: 650, fontSize: '40px'}}>Welcome, {user?.given_name}</Text>
            </div>  
        )
    }

export default Partnerships