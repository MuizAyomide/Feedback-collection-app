import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='login'>
      <form>
        <input type="text" placeholder='Email:' />
        <input type="text" placeholder='Password:' />
        <Link to={'/category'} style={{textDecoration: 'none'}}> <button>Login</button></Link>
      </form>
      <div className='bottom-info'>
        <h3>Forgot Password?</h3>
        <h3>Don't have an account?<Link to={'/register'} style={{textDecoration: 'none'}}> <span>Register Here!</span></Link></h3>
      </div>
    </div>
  )
}

export default Login
