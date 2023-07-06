import React from 'react'
import { Link } from 'react-router-dom'
import BackButton from '../../components/authentication/BackButton'

const Register = () => {
  return (
    <main className='authentication-wrapper flex'>
      <BackButton />
      <div className=' flex authentication-div'>
        <h3>REGISTER</h3>
        <input type="text" className='input' placeholder='Username...'/>
        <input type="email" className='input' placeholder='Email...'/>
        <input type="password" className='input' placeholder='Password...'/>
        <input type="password" className='input' placeholder='Confirm Password...'/>
        <button>Sign UP</button>
        <p>Already have an account? login <Link to='/auth/login'>here</Link> </p>
      </div>
    </main>
  )
}

export default Register
