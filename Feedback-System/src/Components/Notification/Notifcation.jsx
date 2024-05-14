import React from 'react'
import './Notification.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Notification = () => {
  return (
    <div>
      <ToastContainer position='bottom-right'/>
    </div>
  )
}

export default Notification;
