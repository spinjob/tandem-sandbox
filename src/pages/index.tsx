import type {NextPage} from 'next'
import { Text, Image } from '@mantine/core';
import Head from 'next/head'
import RegistrationForm from '../components/registration-form'


const Home: NextPage = () => {
  return(
    <div>
      <Head>
        <title>Login Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{display:'flex', flexDirection:'row'}}>
      <div style={{width: '60vw', alignContent:'center'}}>
        <Image src= 'https://i.ibb.co/5rzpBx3/landing-Page.png' style={{width: '100%', height:'100vh'}}/>
        </div>
        <div style={{width: '40vw', justifyItems:'center'}}>
          <RegistrationForm />
        </div>
      </div>
    </div>
  ) 
}

export default Home