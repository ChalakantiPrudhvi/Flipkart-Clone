import React from "react";
import { useCart } from "./CartContext";
import "../css/CartPage.css";
const CartPage = () => {
  const { cart, updateQty, removeFromCart } = useCart();

  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <>
      <div className="Addcart">
        <div className="address">
          <p>From saved Addresses</p>
          <button>Enter Devilery Pincode</button>
        </div>

        {cart.length === 0 && (
          <h4
            style={{ textAlign: "center", margin: "50px", background: "white" }}
          >
            Cart is empty
          </h4>
        )}

        {cart.map((item) => (
          <div key={item.id} className="added-item">
            <img src={item.image} width="150" />

            <div style={{ marginLeft: "20px", flexGrow: 1 }}>
              <h3>{item.title}</h3>
              <p>₹{item.price}</p>

              <div>
                <button
                  onClick={() => updateQty(item.id, -1)}
                  disabled={item.qty === 1}
                >
                  -
                </button>
                <span style={{ margin: "0 10px" }}>{item.qty}</span>
                <button onClick={() => updateQty(item.id, +1)}>+</button>
              </div>
            </div>

            <button
              onClick={() => removeFromCart(item.id)}
              style={{
                background: "red",
                color: "white",
                border: "none",
                padding: "10px",
                borderRadius: "5px",
              }}
            >
              Remove
            </button>
          </div>
        ))}
        <div className="order">
          <h3>Total: ₹{total}/-</h3>
          <button>Place Order</button>
        </div>
      </div>
      <div className="cart-end">
        <ul>
          <li>Policies:Returns PolicyTerms of useSecurityPrivacy</li>
          <li>© 2007-2025 Flipkart.com</li>
          <li>
            Need help? Visit the <a href="/">Help Center</a> or{" "}
            <a href="/">Contact Us</a>{" "}
          </li>
        </ul>
      </div>
    </>
  );
};

export default CartPage;
