import React, { useState } from 'react';
import Modal from 'react-modal';
import Ramen from '../image/ramen.jpg';
import Sushi from '../image/sushi.jpg';
import Kare from '../image/kare.jpg';
import Udon from '../image/Udon.jpg';
import Takoyaki from '../image/Takoyaki.jpg';
import Sashimi from '../image/Sashimi.jpg';
import Tempura from '../image/Tempura.jpg';
import Dorayaki from '../image/dorayaki.jpeg';

const Cart = ({ isOpen, closeModal }) => {
  const [cart, setCart] = useState([
    { id: 1, name: 'Ramen', quantity: 5, price: 35000 },
    { id: 2, name: 'Sushi', quantity: 6, price: 60000 },
    { id: 3, name: 'Kare', quantity: 5, price: 45000 },
    { id: 4, name: 'Udon', quantity: 5, price: 50000 },
    { id: 5, name: 'Takoyaki', quantity: 5, price: 35000 },
    { id: 6, name: 'Sashimi', quantity: 5, price: 70000 },
    { id: 7, name: 'Tempura', quantity: 5, price: 35000 },
    { id: 8, name: 'Dorayaki', quantity: 5, price: 30000 },
  ]);

  const increaseQuantity = (id) => {
    const updatedCart = cart.map((product) => {
      if (product.id === id) {
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    });
    setCart(updatedCart);
  };

  const decreaseQuantity = (id) => {
    const updatedCart = cart.map((product) => {
      if (product.id === id && product.quantity > 0) {
        return { ...product, quantity: product.quantity - 1 };
      }
      return product;
    });
    setCart(updatedCart);
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} contentLabel="Keranjang Belanja">
      <h2>Keranjang Belanja</h2>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Name Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cart.map((product) => (
              <tr key={product.id}>
                <td>
                  <img
                    src={product.name === 'Ramen' ? Ramen : Sushi} // Adjust this logic for other images
                    alt={product.name}
                    width="50"
                    height="50"
                  />
                </td>
                <td>{product.name}</td>
                <td>Rp.{product.price}</td>
                <td>
                  <button
                    type="button"
                    onClick={() => decreaseQuantity(product.id)}
                    className="btn btn-secondary"
                  >
                    -
                  </button>
                  {product.quantity}
                  <button
                    type="button"
                    onClick={() => increaseQuantity(product.id)}
                    className="btn btn-secondary"
                  >
                    +
                  </button>
                </td>
                <td>Rp.{product.price * product.quantity}</td>
                <td>
                  <button type="button" className="btn btn-danger">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button onClick={closeModal}>Tutup</button>
    </Modal>
  );
};

export default Cart;
