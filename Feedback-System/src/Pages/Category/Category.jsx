import React from 'react'
import './Category.css'
import { Link } from 'react-router-dom'
const Category = () => {


  return (
    <div className='category'>
      <h3>Select Category...</h3>
      <div className="cards">
      <Link to={'/user'} style={{textDecoration: 'none', color: 'black'}}> 
        <div className="card">
            <h2>USER</h2>
            <p>Feedback</p>
        </div>
      </Link> 
      <Link to={'/product'} style={{textDecoration: 'none', color: 'black'}}> 
        <div className="card">
            <h2>Product</   h2>
            <p>Feedback</p>
        </div>
      </Link><Link to={'/candidate'} style={{textDecoration: 'none', color: 'black'}}> 
        <div className="card">
            <h2>Candidate</h2>
            <p>Feedback</p>
        </div>
      </Link>
      </div>
    </div>
  )
}

export default Category
