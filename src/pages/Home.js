import { useState, useCallback, useEffect } from 'react';
import {UserContext} from '../context/UserContext';
import {useUser} from '@auth0/nextjs-auth0/client'
import Partnerships from '../components/partnerships'
import Navigation from '../components/Navbar'
import { Text, Image, Loader } from '@mantine/core';

const Home = () => {
    const { user, error, isLoading } = useUser();
    const [userContext, setUserContext] = useState(UserContext)
    const [selectedView, setSelectedView] = useState('partnerships')

    const setView = (e) => {
    //    setSelectedView(e)
        console.log(e.label)
        setSelectedView(e.label)
    }

    return selectedView == 'Partnerships' ? ( 
            <div style={{display:'flex'}}>
                 <Navigation setView={setView} />
                 <Partnerships/>
            </div>    
        ) : selectedView == 'My APIs' ? (
            <div style={{display:'flex'}}>
                <Navigation setView={setView} />
                <Text>My APIs</Text>
            </div>  
        ) : selectedView == 'My Organization' ?(
            <div style={{display:'flex'}}>
                <Navigation setView={setView} />
                <Text>My Organization</Text>
            </div>  
        ) : ( 
            <div style={{display:'flex'}}>
                 <Navigation setView={setView} />
                 <Partnerships/>
            </div>    
        )
    }

export default Home