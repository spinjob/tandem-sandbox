import type {NextPage} from 'next'
import { Text, Image } from '@mantine/core';
import {UserContext} from '../context/UserContext'
import Head from 'next/head'
import RegistrationForm from '../components/RegistrationForm'
import { useState } from 'react';
import Landing from './Landing.js'

const Index: NextPage = () => {
  const [userContext, setUserContext] = useState({})
  
  return(
    <div>
      <Head>
        <title>Login Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <div>
       <Landing/>
      </div>
    </div>
  ) 
}

export default Index