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
    </div>
  )
}

export default Login
