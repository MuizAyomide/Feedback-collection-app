import React, { useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../Lib/Firebase";
import { doc, setDoc } from "firebase/firestore";

const Register = () => {
  const [termsChecked, setTermsChecked] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!termsChecked) {
      console.log('erroe')
      toast.error("Please accept the Terms and Services");
      return;
    }

    const formData = new FormData(e.target);
    const { username, email, password } = Object.fromEntries(formData);

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      await setDoc(doc(db, "users", res.user.uid), {
        username,
        email,
        id: res.user.uid,
      });

      await setDoc(doc(db, "userfeedback", res.user.uid), {
        feedbacks: [],
      });

      await setDoc(doc(db, "productfeedback", res.user.uid), {
        feedbacks: [],
      });

      await setDoc(doc(db, "candidatefeedback", res.user.uid), {
        feedbacks: [],
      });

      toast.success("Account created! You can login now!");
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  const handleCheckboxChange = () => {
    setTermsChecked((prevTermsChecked) => !prevTermsChecked);
  };

  return (
    <div className="register">
      <form onSubmit={handleRegister}>
        <input type="text" placeholder="Username:" name="username" />
        <input type="text" placeholder="Email:" name="email" />
        <input type="password" placeholder="Password:" name="password" />
        <div className="mid-info">
          <h3>
            <input type="checkbox" className="checkbox" checked={termsChecked} onChange={handleCheckboxChange} /> Terms and Services
          </h3>

          <h3>
            Created or Already have an account? {" "}
            <Link to={"/login"} style={{ textDecoration: "none" }}>
              {" "}
              <span> Login Here!</span>
            </Link>
          </h3>
        </div>
        <button type="submit" disabled={!termsChecked} >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;