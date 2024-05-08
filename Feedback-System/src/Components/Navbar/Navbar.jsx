import React from 'react'
import './Navbar.css'
import logo from '../../assets/small-logo.png'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='navbar'>
     <Link to={'/'}><img src={logo} alt="" /></Link> 
      <Link to={'/contact'} ><button>Contact Us</button></Link>
    </div>
  )
}

export default Navbar
