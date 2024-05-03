import React from 'react'
import './../src/App.css'
import Navbar from './Components/Navbar/Navbar'
import big_logo from './assets/big-logo.png'

const App = () => {
  return (
    <div className='app'>
      <Navbar/>

      <>
      <img className='bg-img' src={big_logo} alt="" />
     </>

    </div>
  )
}

export default App
