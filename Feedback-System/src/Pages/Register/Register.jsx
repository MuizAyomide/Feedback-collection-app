import React from "react";
import "./Register.css";
const Register = () => {
  return (
    <div className="register">
      <form>
        <input type="text" placeholder="Username:" />
        <input type="text" placeholder="Email:" />
        <input type="text" placeholder="Password:" />
        <button>Register</button>
      </form>
    </div>
  );
};

export default Register;
