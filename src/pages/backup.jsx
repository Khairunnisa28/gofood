import React, { useState } from 'react';
import Cart from '../component/cart';
import Headling from '../image/head.jpg';
import Imgcart from '../image/cart.png';
import Ramen from '../image/ramen.jpg';
import Sushi from '../image/sushi.jpg';
import Kare from '../image/kare.jpg';
import Udon from '../image/Udon.jpg';
import Takoyaki from '../image/Takoyaki.jpg';
import Sashimi from '../image/Sashimi.jpg';
import Tempura from '../image/Tempura.jpg';
import Dorayaki from '../image/dorayaki.jpeg';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Include Bootstrap JavaScript


function Home() {
  const initialProducts = [
    { id: 1, name: 'Ramen', price: 35000 },
    { id: 2, name: 'Sushi', price: 60000 },
    { id: 3, name: 'Kare', price: 45000 },
    { id: 4, name: 'Udon', price: 50000 },
    { id: 5, name: 'Takoyaki', price: 35000 },
    { id: 6, name: 'Sashimi', price: 70000 },
    { id: 7, name: 'Tempura', price: 35000 },
    { id: 8, name: 'Dorayaki', price: 30000 },

  ]
  const [products, setProducts] = useState(initialProducts);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [orderCount, setOrderCount] = useState(0);

  function openCartModal(){
    setIsCartModalOpen(true);
  };

  function closeCartModal(){
    setIsCartModalOpen(false);
  };

  function increaseOrderCount() {
    setOrderCount(orderCount + 1);
  }

  function decreaseOrderCount() {
    if (orderCount > 0) {
      setOrderCount(orderCount - 1);
    }
  }
  return (
    <div className='contant'>
      <img src={Headling} className='img-head'/>
      <h1>Mau makan apa hari ini?</h1>
      <button onClick={openCartModal}>
        <img src={Imgcart} alt="Keranjang Belanja" />
      </button>
      <Cart
        isOpen={isCartModalOpen}
        closeModal={closeCartModal}
      />
      <div className="card-container">
        <div className="card">
          <img src={Ramen} className="card-img-top" alt="Gambar 1" />
          <div className="card-body">
            <h5 className="card-title">Ramen</h5>
            <h6>Rp. 35.000</h6>
            <div className='count-btn'>
              <button className="btn btn-light" onClick={decreaseOrderCount}>-</button>
              <span>{orderCount}</span>
              <button className="btn btn-light" onClick={increaseOrderCount}>+</button>
            </div>
            <a href="#" class="btn btn-primary">ADD</a>
          </div>
        </div>
        <div className="card">
          <img src={Sushi} className="card-img-top" alt="Gambar 2" />
          <div className="card-body">
            <h5 className="card-title">Sushi</h5>
            <h6>Rp. 60.000</h6>
            <div className='count-btn'>
              <button className="btn btn-light" onClick={decreaseOrderCount}>-</button>
              <span>{orderCount}</span>
              <button className="btn btn-light" onClick={increaseOrderCount}>+</button>
            </div>
            <a href="#" class="btn btn-primary">ADD</a>
          </div>
        </div>
        <div className="card">
          <img src={Kare} className="card-img-top" alt="Gambar 3" />
          <div className="card-body">
            <h5 className="card-title">Curry</h5>
            <h6>Rp. 50.000</h6>
            <div className='count-btn'>
              <button className="btn btn-light" onClick={decreaseOrderCount}>-</button>
              <span>{orderCount}</span>
              <button className="btn btn-light" onClick={increaseOrderCount}>+</button>
            </div>
            <a href="#" class="btn btn-primary">ADD</a>
          </div>
        </div>
        <div className="card">
          <img src={Udon} className="card-img-top" alt="Gambar 3" />
          <div className="card-body">
            <h5 className="card-title">Udon</h5>
            <h6>Rp. 50.000</h6>
            <div className='count-btn'>
              <button className="btn btn-light" onClick={decreaseOrderCount}>-</button>
              <span>{orderCount}</span>
              <button className="btn btn-light" onClick={increaseOrderCount}>+</button>
            </div>
            <a href="#" class="btn btn-primary">ADD</a>
          </div>
        </div>
        <div className="card">
          <img src={Takoyaki} className="card-img-top" alt="Gambar 3" />
          <div className="card-body">
            <h5 className="card-title">Takoyaki</h5>
            <h6>Rp. 35.000</h6>
            <div className='count-btn'>
              <button className="btn btn-light" onClick={decreaseOrderCount}>-</button>
              <span>{orderCount}</span>
              <button className="btn btn-light" onClick={increaseOrderCount}>+</button>
            </div>
            <a href="#" class="btn btn-primary">ADD</a>
          </div>
        </div>
        <div className="card">
          <img src={Sashimi} className="card-img-top" alt="Gambar 3" />
          <div className="card-body">
            <h5 className="card-title">Sashimi</h5>
            <h6>Rp. 70.000</h6>
            <div className='count-btn'>
              <button className="btn btn-light" onClick={decreaseOrderCount}>-</button>
              <span>{orderCount}</span>
              <button className="btn btn-light" onClick={increaseOrderCount}>+</button>
            </div>
            <a href="#" class="btn btn-primary">ADD</a>
          </div>
        </div>
        <div className="card">
          <img src={Tempura} className="card-img-top" alt="Gambar 3" />
          <div className="card-body">
            <h5 className="card-title">Tempura</h5>
            <h6>Rp. 35.000</h6>
            <div className='count-btn'>
              <button className="btn btn-light" onClick={decreaseOrderCount}>-</button>
              <span>{orderCount}</span>
              <button className="btn btn-light" onClick={increaseOrderCount}>+</button>
            </div>
            <a href="#" class="btn btn-primary">ADD</a>
          </div>
        </div>
        <div className="card">
          <img src={Dorayaki} className="card-img-top" alt="Gambar 3" />
          <div className="card-body">
            <h5 className="card-title">Dorayaki</h5>
            <h6>Rp. 30.000</h6>
            <div className='count-btn'>
              <button className="btn btn-light" onClick={decreaseOrderCount}>-</button>
              <span>{orderCount}</span>
              <button className="btn btn-light" onClick={increaseOrderCount}>+</button>
            </div>
            <a href="#" class="btn btn-primary">ADD</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
