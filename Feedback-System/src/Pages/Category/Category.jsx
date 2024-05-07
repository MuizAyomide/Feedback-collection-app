import React from 'react'
import './Category.css'
const Category = () => {


  return (
    <div className='category'>
      <h3>Select Category...</h3>
      <div className="cards">
        <div className="card">
            <h2>USER</h2>
            <p>Feedback</p>
        </div>
        <div className="card">
            <h2>Product</h2>
            <p>Feedback</p>
        </div>
        <div className="card">
            <h2>Candidate</h2>
            <p>Feedback</p>
        </div>
      </div>
    </div>
  )
}

export default Category
