import React from "react";
import "./Home.css";
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div className="home">
      <h2>Welcome to a FeedBack Collection Application</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
        nesciunt, ipsum, fugit nulla laboriosam alias perspiciatis et possimus
        laborum voluptate incidunt! rerum, debitis beatae nulla quaerat
        cumque! Nemo, maiores!
      </p>
<div className="btn">
  <Link to='/login' style={{textDecoration: 'none'}}>   <button className="login-btn">Login</button></Link> 
  <Link to='/register' style={{textDecoration: 'none'}}>  <button className="register-btn">Register</button></Link> 
</div>

    </div>
  );
};

export default Home;
