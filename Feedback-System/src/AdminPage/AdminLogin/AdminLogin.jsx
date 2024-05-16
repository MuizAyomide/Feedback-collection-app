import React, { useState } from "react";
import "./AdminLogin.css";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Lib/Firebase";
import { toast } from "react-toastify";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [change, setChange] = useState(true);
  const navigate = useNavigate();
  const adminEmails = ["admin@muiz.com", "admin1@muiz.com"];

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please enter your email and password");
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
  
      // Check if the user's email is in the array of admin email addresses
      if (adminEmails.includes(user.email)) {
        // Clear the email and password fields
        setEmail("");
        setPassword("");
  
        navigate("/admincategory");
      } else {
        toast.error("You are not authorized to access the admin page.");
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please enter your email and password");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);

      // Clear the email and password fields
      toast.success('Registered Successfully')
      setEmail("");
      setPassword("");

    } catch (err) {
      toast.error(err.message);
    }

    
  };

  return (
    <div className="adminlogin">
      <h1>{change? 'Login As Admin': 'Register As Admin'}</h1>

      {change ? (
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email:"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password:"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
      ) : (
        <form onSubmit={handleRegister}>
          <input
            type="email"
            placeholder="Email:"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password:"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">{change ? 'Login' : 'Register'}</button>
        </form>
      )}
      {change ? (
  <div className="bottom-info">
    <h3>
      Don't have an account?{" "}
      <span onClick={() => setChange((prev) => !prev)}>Register Here!</span>
    </h3>
  </div>
) : (
  <div className="bottom-info">
    <h3>
      Already Registered?{" "}
      <span onClick={() => setChange((prev) => !prev)}>Login Here!</span>
    </h3>
  </div>
)}
    </div>
  );
};

export default AdminLogin;
