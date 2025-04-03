import React from "react";
import { useNavigate } from "react-router-dom";

const items = [
  { id: 1, name: "Burger", price: 599, image: "https://tse4.mm.bing.net/th?id=OIP.s07UsAo90pfNbIUBM-OTbAHaHa&pid=Api&P=0&h=180" },
  { id: 2, name: "Pizza", price: 899, image: "https://tse1.mm.bing.net/th?id=OIP.aX5Q-c98CDtdR1z6q79P5QHaEo&pid=Api&P=0&h=180" },
];

const ItemList = ({ addToCart }) => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Menu</h2>
      <div style={{ display: "flex", gap: "20px" }}>
        {items.map((item) => (
          <div key={item.id} style={{ border: "1px solid black", padding: "10px", textAlign: "center" }}>
            <img src={item.image} alt={item.name} width="100" />
            <h3>{item.name}</h3>
            <p>Rs. {item.price}</p>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <button onClick={() => navigate("/cart")}>Go to Cart</button>
    </div>
  );
};

export default ItemList;
