import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div className="register">
      <form>
        <input type="text" placeholder="Username:" />
        <input type="text" placeholder="Email:" />
        <input type="text" placeholder="Password:" />
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
