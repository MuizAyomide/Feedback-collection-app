import React, { useState } from "react";
import "./AdminLogin.css";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Lib/Firebase";
import { toast } from "react-toastify";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { email, password } = Object.fromEntries(formData);

    try {
      await signInWithEmailAndPassword(auth, email, password);
  

      navigate("/admincategory");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="adminlogin">
            <h1>Login As Admin</h1>

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
            <h3><span>Account Already Created Manually From Api!!!</span>
</h3>
          </div>
        </div>
      );
}

export default AdminLogin
