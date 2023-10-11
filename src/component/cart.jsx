import React, { Component } from 'react';
import Modal from 'react-modal';
import Ramen from '../image/ramen.jpg';
import Sushi from '../image/sushi.jpg';
import Kare from '../image/kare.jpg';
import Udon from '../image/Udon.jpg';
import Takoyaki from '../image/Takoyaki.jpg';
import Sashimi from '../image/Sashimi.jpg';
import Tempura from '../image/Tempura.jpg';
import Dorayaki from '../image/dorayaki.jpeg';


const Cart = ({ isOpen, closeModal}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Keranjang Belanja"
    >
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
            <tr>
              <td><img src={Ramen} alt="Ramen" width="50" height="50" /></td>
              <td>Ramen</td>
              <td>Rp.35.000</td>
              <td>5</td>
              <td>Rp.175.000</td>
              <td><button type="button" class="btn btn-danger">Delete</button></td>
            </tr>
            <tr>
              <td><img src={Sushi} alt="Produk 2" width="50" height="50" /></td>
              <td>Sushi</td>
              <td>Rp.60.000</td>
              <td>3</td>
              <td>Rp.180.000</td>
              <td><button type="button" class="btn btn-danger">Delete</button></td>
            </tr>
          </tbody>
        </table>
      </div>
      <button onClick={closeModal}>Tutup</button>
    </Modal>
  );
};

export default Cart;
