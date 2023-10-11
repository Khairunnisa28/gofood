import React from "react";

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      {cartItems.length === 0 ? (
        <span className="empty-cart">Cart is empty</span>
      ) : (
        <ul className="cart-items">
          {cartItems.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartDropdown;
