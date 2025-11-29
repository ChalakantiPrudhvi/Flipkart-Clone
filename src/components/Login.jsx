import React from "react";
import "../css/Login.css";
import Footer from "./Footer";
import img from "../images/loginimg.jpg";
function Login() {
  return (
    <div>
      <div className="list">
        <ul>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Tv's & Appliances</a>
          </li>
          <li>
            <a href="/">Men</a>
          </li>
          <li>
            <a href="/">Women</a>
          </li>
          <li>
            <a href="/">baby & Kids</a>
          </li>
          <li>
            <a href="/">Home and Furniture</a>
          </li>
          <li>
            <a href="/">Sports,Books and More</a>
          </li>
          <li>
            <a href="/">Flights</a>
          </li>
          <li>
            <a href="/">Offers</a>
          </li>
        </ul>
      </div>
      <div className="login-page">
        <div className="partA">
          <h2>Login</h2>
          <h5>Get access to your Orders,wishlists and Recomandation</h5>
          <img src={img} alt="image" />
        </div>
        <div className="partB">
          <p>Enter Email/Mobile number</p>
          <form action="Email">
            <input type="email" className="email" />
          </form>
          <div className="help">
            <p>
              By continuing, you agreed to Flipkart's{" "}
              <a href="/"> Terms of Use</a>
              <span> and </span>
              <a href="/">Privacy Policy.</a>
            </p>
            <button>Request OTP</button>
          </div>
          <div className="foot">
            <a href="/">New to Flipkart? Create an account</a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
