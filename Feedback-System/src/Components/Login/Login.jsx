import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Lib/Firebase";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { email, password } = Object.fromEntries(formData);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Redirect to the chat page after successful login

      navigate("/category");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="login">
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Email:"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Password:"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Login</button>
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
