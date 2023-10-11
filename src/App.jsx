import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import Create from './pages/Create';
import Detail from './pages/Detail';
import Cart from './component/cart'

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [cartVisible, setCartVisible] = useState(false);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);
      if (existingItem) {
        existingItem.quantity += 1;
        return [...prevItems];
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  const openCart = () => {
    setCartVisible(true);
  };

  const closeCart = () => {
    setCartVisible(false);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar openCart={openCart} /> {/* Pass the openCart function to the Navbar */}
        <div className="content">
          <Routes>
            <Route path="/" element={<Home addToCart={addToCart} />} /> {/* Pass the addToCart function to Home */}
            <Route path="/food" element={<Create />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/detail/:id" element={<Detail />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
