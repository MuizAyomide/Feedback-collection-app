import React from "react";
import "./../src/App.css";
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

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <>
        <img className="bg-img" src={big_logo} alt="" />
      </>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/category" element={<Category />} />
          <Route path="/user" element={<User />} />
          <Route path="product" element={<Product />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
