import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";
const Register = () => {

const handleRegister = e =>{
  e.preventDefault()

  const formData = new FormData()
  const {username,email,password} = Object.fromEntries(formData)

  console.log(username)
}


  return (
    <div className="register">
      <form onSubmit={handleRegister}>
        <input type="text" placeholder="Username:" name="username" />
        <input type="text" placeholder="Email:" name="email"/>
        <input type="text" placeholder="Password:" name="password" />
        <div className="mid-info">
         
          <h3> <input type="checkbox" className="checkbox"/> Terms and Services</h3>
          
          <h3>
            Already have an account?{" "}
            <Link to={"/login"} style={{ textDecoration: "none" }}>
              {" "}
              <span>Login Here!</span>
            </Link>
          </h3>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
