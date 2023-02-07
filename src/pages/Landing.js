import { Text, Image, Loader } from '@mantine/core';
import {UserContext} from '../context/UserContext'
import RegistrationForm from '../components/RegistrationForm'
import LoginForm from '../components/LoginForm.js'
import { useState, useCallback, useEffect } from 'react';

const Landing = () => {
    const [userContext, setUserContext] = useState(UserContext)
    const [isLoggingIn, setIsLoggingIn] = useState(false)
    
    const toggleLogin = () => {
        setIsLoggingIn(!isLoggingIn)
    }

    const verifyUser = useCallback(() => {
      fetch(process.env.NEXT_PUBLIC_API_BASE_URL + "/users/refreshToken", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
      }).then(async response => {
        if (response.ok) {
          const data = await response.json()
          setUserContext(oldValues => {
            return { ...oldValues, token: data.token }
          })
        } else {
          setUserContext(oldValues => {
            return { ...oldValues, token: null }
          })
        }
        // call refreshToken every 5 minutes to renew the authentication token.
        setTimeout(verifyUser, 5 * 60 * 1000)
      })
    }, [setUserContext])

    useEffect(() => {
      verifyUser()
    }, [verifyUser])


return userContext.token === null && isLoggingIn ? (
    <div style={{display:'flex', flexDirection:'row'}}>
        <div style={{width: '60vw', alignContent:'center'}}>
            <Image src= 'https://i.ibb.co/5rzpBx3/landing-Page.png' style={{width: '100%', height:'100vh'}}/>
        </div>
        <div style={{width: '40vw', justifyItems:'center'}}>
            <LoginForm toggleLogin={toggleLogin} />
        </div>
    </div>
) : userContext.token === null && !isLoggingIn ?  (
    <div style={{display:'flex', flexDirection:'row'}}>
        <div style={{width: '60vw', alignContent:'center'}}>
            <Image src= 'https://i.ibb.co/5rzpBx3/landing-Page.png' style={{width: '100%', height:'100vh'}}/>
        </div>
        <div style={{width: '40vw', justifyItems:'center'}}>
            <RegistrationForm toggleLogin={toggleLogin} />
        </div>
    </div>
)
: (      
    <div style={{display:'flex', flexDirection:'row'}}>
      <Text>
        User is logged in
      </Text>
    </div>)
}

export default Landing