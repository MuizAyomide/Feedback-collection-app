import React from 'react'
import './../src/App.css'
import Navbar from './Components/Navbar/Navbar'
import big_logo from './assets/big-logo.png'
import Home from './Components/Home/Home'
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <>
      <img className='bg-img' src={big_logo} alt="" />
     </>
{/* <Home/> */}
<Login/>
{/* <Register/> */}
    </div>
  )
}

export default App
