import React from 'react'
import './AdminCategory.css'
import { Link } from 'react-router-dom'

const AdminCategory = () => {
  return (
    <div>
        <div className="admincategory">
      <h2>Admin Category</h2    >
      <div className="cards">
        <Link to={"/adminuser"} style={{ textDecoration: "none", color: "black" }}>
          <div className="card">
            <h2>USER</h2>
            <p>Feedbacks</p>
          </div>
        </Link>
        <Link
          to={"/adminproduct"}
          style={{ textDecoration: "none", color: "black" }}
        >
          <div className="card">
            <h2>Product</h2>
            <p>Feedbacks</p>
          </div>
        </Link>
        <Link
          to={"/admincandidate"}
          style={{ textDecoration: "none", color: "black" }}
        >
          <div className="card">
            <h2>Candidate</h2>
            <p>Feedbacks</p>
          </div>
        </Link>
      </div>
    </div>
      
    </div>
  )
}

export default AdminCategory
