import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Lib/Firebase";



const Login = () => {


  
  const handleLogin = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { email, password } = Object.fromEntries(formData);

    try{

      await signInWithEmailAndPassword(auth,email,password)

    }catch(err){
      toast.error(err.message)
    }
  };

  return (
    <div className="login">
      <form onSubmit={handleLogin}>
        <input type="text" placeholder="Email:" name="email" />
        <input type="text" placeholder="Password:" name="password" />
        <Link to={"/category"} style={{ textDecoration: "none" }}>
          {" "}
          <button>Login</button>
        </Link>
      </form>
      <div className="bottom-info">
        <h3>Forgot Password?</h3>
        <h3>
          Don't have an account?
          <Link to={"/register"} style={{ textDecoration: "none" }}>
            {" "}
            <span>Register Here!</span>
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default Login;
