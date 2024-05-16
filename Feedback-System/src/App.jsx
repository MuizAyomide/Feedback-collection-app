import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import big_logo from "./assets/big-logo.png";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Category from "./Pages/Category/Category";
import User from "./Pages/User/User";
import Product from "./Pages/Product/Product";
import Candidate from "./Pages/Candidate/Candidate";
import Contact from "./Components/Contact/Contact";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Lib/Firebase";
import { useUserStore } from "./Lib/userStore";
import Notification from "./Components/Notification/Notifcation";
import AdminLogin from "./AdminPage/AdminLogin/AdminLogin";
import AdminCategory from "./AdminPage/AdminCategory/AdminCategory";

const App = () => {
  const { currentUser, fetchUserInfo } = useUserStore();

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      if (user) {
        fetchUserInfo(user.uid);
      }
    });

    return () => {
      unSub();
    };
  }, [fetchUserInfo]);

  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <>
          <img className="bg-img" src={big_logo} alt="" />
        </>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admincategory" element={<AdminCategory />} />
          <Route path='/adminlogin' element={<AdminLogin/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {currentUser && (
            <>
              <Route path="/category" element={<Category />} />
              <Route path="/user" element={<User />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/product" element={<Product />} />
              <Route path="/candidate" element={<Candidate />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
      <Notification />
    </div>
  );
};

export default App;
