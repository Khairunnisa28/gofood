import React, { useState } from 'react';
import Ramen from '../image/ramen.jpg';
import Sushi from '../image/sushi.jpg';
import Kare from '../image/kare.jpg';
import Headling from '../image/head.jpg';

import FoodCard from './FoodCard'; // Import komponen FoodCard
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Include Bootstrap JavaScript

function Home() {
  const foodData = [
    { image: Ramen, title: 'Ramen', count: 0 },
    { image: Sushi, title: 'Sushi', count: 0 },
    { image: Kare, title: 'Kare', count: 0 },
    // Tambahkan data makanan lainnya di sini
  ];

  const [foodCounts, setFoodCounts] = useState(foodData);

  function increaseCount(index) {
    const updatedFoodCounts = [...foodCounts];
    updatedFoodCounts[index].count += 1;
    setFoodCounts(updatedFoodCounts);
  }

  function decreaseCount(index) {
    const updatedFoodCounts = [...foodCounts];
    if (updatedFoodCounts[index].count > 0) {
      updatedFoodCounts[index].count -= 1;
      setFoodCounts(updatedFoodCounts);
    }
  }

  return (
    <div className='contant'>
      <img src={Headling} className='img-head' />
      <h1>Mau makan apa hari ini?</h1>
      <div className="card-container">
        {foodCounts.map((food, index) => (
          <FoodCard
            key={index}
            image={food.image}
            title={food.title}
            count={food.count}
            increaseCount={() => increaseCount(index)}
            decreaseCount={() => decreaseCount(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
