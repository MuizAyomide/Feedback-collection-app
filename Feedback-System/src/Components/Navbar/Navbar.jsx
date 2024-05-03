import React from 'react'
import './Navbar.css'
import logo from '../../assets/small-logo.png'


const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={logo} alt="" />
      <button>Contact Us</button>
    </div>
  )
}

export default Navbar
