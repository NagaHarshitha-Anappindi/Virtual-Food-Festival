import React from "react";
import "./cart.css";

const Cart = ({ cartItems }) => {
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.name} width="100" />
            <div>{item.name}</div>
            <div>Rs.{item.price}</div>
            <div>Qty: {item.quantity}</div>
          </div>
        ))
      )}
      <div className="total">Total: Rs.{total.toFixed(2)}</div>
      <button className="checkout-btn">Checkout</button>
    </div>
  );
};

export default Cart;
