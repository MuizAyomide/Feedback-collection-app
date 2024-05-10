import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../Lib/Firebase";
import { doc, setDoc } from "firebase/firestore";



const Register = () => {
  const handleRegister = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const { username, email, password } = Object.fromEntries(formData);

    try {

      const res = await createUserWithEmailAndPassword(auth,email,password)

      await setDoc(doc(db, "users", res.user.uid), {
        username,
        email,
        id: res.user.uid,
      });

      await setDoc(doc(db, "userfeedback", res.user.uid), {
        feedbacks: []
      });

      toast.success('Account Created! you can login Now!!!')
    } catch (err) {
      console.log(err)
      toast.error(err.massage)
    }
  };

  return (
    <div className="register">
      <form onSubmit={handleRegister}>
        <input type="text" placeholder="Username:" name="username" />
        <input type="text" placeholder="Email:" name="email" />
        <input type="text" placeholder="Password:" name="password" />
        <div className="mid-info">
          <h3>
            {" "}
            <input type="checkbox" className="checkbox" /> Terms and Services
          </h3>

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
