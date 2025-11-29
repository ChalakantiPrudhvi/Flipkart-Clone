import React from "react";
import { useCart } from "./CartContext";
import { Link } from "react-router-dom";
import mob1 from "../images/mobile1.jpg";
import mob2 from "../images/mobile2.jpg";
import "../css/Productpage.css";
import goat from "../images/goat.jpg";
const ProductPage = () => {
  const { addToCart } = useCart();

  const products = [
    {
      id: 1,
      title: "iphone 16 pro Max",
      price: 79999,
      image: mob1,
      details: ["8GB RAM|256GB/512GB|'6.9' display|48MP|4676mAh"],
      rating: 4.5,
    },
    {
      id: 2,
      title: "Samsung s23 FE",
      price: 29999,
      image: mob2,
      details: ["8GB RAM|256GB/512GB|'6.2' display|50MP|4500mAh"],
      rating: 4.6,
    },
  ];

  return (
    <>
      <div className="goat">
        <img src={goat} alt="goatSale" />
      </div>
      <div className="cart">
        {products.map((item) => (
          <div key={item.id} className="card">
            <img src={item.image} />
            <h4>{item.title}</h4>
            <p>{item.details}</p>
            <h5 style={{ color: "darkgreen", textAlign: "center" }}>
              ₹{item.price}/-
            </h5>

            <p className="rating">★ {item.rating}</p>

            <div className="buttons">
              <button onClick={() => addToCart(item)}>
                <Link to="/Cart" className="nav-link">
                  Add to Cart
                </Link>
              </button>
              <button>
                <Link to="/Cart" className="nav-link">
                  Buy Now
                </Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductPage;
