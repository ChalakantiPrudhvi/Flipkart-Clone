import React from "react";
import flipkart from "../images/logo.jpg";
import "../css/Navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="header">
      <div className="navbar">
        <div className="logo">
          <img src={flipkart} alt="flipkart" />
        </div>
        <div className="srchbar">
          <form action="search" class="srch">
            <button>
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
            <input
              type="search"
              placeholder="Search for Products,Brands and More"
            />
          </form>
        </div>
        <div className="login">
          <i class="fa-solid fa-user"></i>
          <button>
            <Link to="/login" className="Nav-link">
              Login
            </Link>
          </button>
        </div>
        <div className="cart">
          <i class="fa-solid fa-cart-shopping"></i>

          <button>
            <Link to="/Cart" className="Nav-link">
              Cart
            </Link>
          </button>
        </div>
        <div className="seller">
          <i class="fa-solid fa-store"></i>

          <button>Become a seller</button>
        </div>
        <div className="navigation">
          <button>
            <i class="fa-solid fa-ellipsis-vertical"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
