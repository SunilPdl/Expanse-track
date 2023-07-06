import React from 'react'
import '../../auth.css'
import { Link } from 'react-router-dom'
import BackButton from '../../components/authentication/BackButton'
const Login = () => {
  return (
    <main className='authentication-wrapper flex'>
      <BackButton/>
      <div className=' flex authentication-div'>
        <h3>Login</h3>
        <input type="text" className='input' placeholder='Username...'/>
        <input type="password" className='input' placeholder='Password'/>
        <button>Sign in</button>
        <p>No account? Create new one <Link to='/auth/register'>here</Link> </p>
      </div>
    </main>
  )
}

export default Login
