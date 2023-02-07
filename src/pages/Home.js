import { Text, Image, Loader } from '@mantine/core';
import {UserContext} from '../context/UserContext'
import RegistrationForm from '../components/RegistrationForm'
import LoginForm from '../components/LoginForm'
import { useState, useCallback, useEffect } from 'react';

const Home = () => {
    const [userContext, setUserContext] = useState(UserContext)

    const fetchUserDetails = useCallback(() => {
      fetch(process.env.NEXT_PUBLIC_API_BASE_URL + "/users/me", {
        method: "GET",
        credentials: "include",
        // Pass authentication token as bearer token in header
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userContext.token}}`,
        },
      }).then(async response => {
        if (response.ok) {
          const data = await response.json()
          setUserContext(oldValues => {
            return { ...oldValues, details: data }
          })
        } else {
          if (response.status === 401) {
            // Edge case: when the token has expired.
            // This could happen if the refreshToken calls have failed due to network error or
            // User has had the tab open from previous day and tries to click on the Fetch button
            window.location.reload()
          } else {
            setUserContext(oldValues => {
              return { ...oldValues, details: null }
            })
          }
        }
      })
    }, [setUserContext, userContext.token])
  
    return userContext.details === null && isLoggingIn ? (
        <div style={{display:'flex', flexDirection:'row'}}>
            <div style={{width: '60vw', alignContent:'center'}}>
                <Image src= 'https://i.ibb.co/5rzpBx3/landing-Page.png' style={{width: '100%', height:'100vh'}}/>
            </div>
            <div style={{width: '40vw', justifyItems:'center'}}>
                <LoginForm toggleLogin={toggleLogin} />
            </div>
        </div>
    ): userContext.details === null && !isLoggingIn ?  (
        <div style={{display:'flex', flexDirection:'row'}}>
            <div style={{width: '60vw', alignContent:'center'}}>
                <Image src= 'https://i.ibb.co/5rzpBx3/landing-Page.png' style={{width: '100%', height:'100vh'}}/>
            </div>
            <div style={{width: '40vw', justifyItems:'center'}}>
                <RegistrationForm toggleLogin={toggleLogin} />
            </div>
        </div>
    )
    : !userContext.details ? (
        <Loader/>
    )
    : (      
        <div style={{display:'flex', flexDirection:'row'}}>
        </div>)
    }

export default Home