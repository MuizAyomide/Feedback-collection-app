import React from 'react'
import './../src/App.css'
import Navbar from './Components/Navbar/Navbar'
import big_logo from './assets/big-logo.png'
import Home from './Components/Home/Home'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import Category from './Pages/Category/Category'

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <>
      <img className='bg-img' src={big_logo} alt="" />
     </>
{/* <Home/> */}
{/* <Login/> */}
{/* <Register/> */}
<Category/>
    </div>
  )
}

export default App
