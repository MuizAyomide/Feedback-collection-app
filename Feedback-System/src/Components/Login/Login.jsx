import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <div className='login'>
      <form>
        <input type="text" placeholder='Email:' />
        <input type="text" placeholder='Password:' />
<button>Login</button>
      </form>
      <div className='bottom-info'>
        <h3>Forgot Password?</h3>
        <h3>Don't have an account? <span>Register Here!</span></h3>
      </div>
    </div>
  )
}

export default Login
