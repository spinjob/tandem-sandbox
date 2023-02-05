import type {NextPage} from 'next'
import Head from 'next/head'
import LoginForm from '../components/login-form'

const Home: NextPage = () => {
  return(
    <div>
      <Head>
        <title>Login Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{display:'flex', flexDirection:'row'}}>
      <div style={{width: '40%'}}>
          TEST
        </div>
        <div style={{width: '60%'}}>
          <LoginForm />
        </div>
      </div>
    </div>
  ) 
}

export default Home