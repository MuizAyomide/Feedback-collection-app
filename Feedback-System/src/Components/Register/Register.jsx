import React from "react";
import "./Register.css";
const Register = () => {
  return (
    <div className="register">
      <form>
        <input type="text" placeholder="Username:" />
        <input type="text" placeholder="Email:" />
        <input type="text" placeholder="Password:" />
        <div className='mid-info'>
        <h3>Forgot Password?</h3>
        <h3>Already have an account? <span>Login Here!</span></h3>
      </div>
        <button>Register</button>
      </form>
    </div>
  );
};

export default Register;
