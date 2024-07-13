import React, { useState, useEffect } from 'react';
import { getAllDishes, togglePublishStatus } from '../services/dishService';
import DishItem from './DishItem';

const DishList = () => {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    fetchDishes();
  }, []);

  const fetchDishes = () => {
    getAllDishes().then(data => {
      setDishes(data);
    }).catch(error => {
      console.error('Error fetching dishes:', error);
    });
  };

  const handleTogglePublish = (dishId) => {
    togglePublishStatus(dishId).then(() => {
      fetchDishes(); // Refresh dish list after update
    }).catch(error => {
      console.error('Error toggling publish status:', error);
    });
  };

  return (
    <div>
      <h2>Dish List</h2>
      {dishes.map(dish => (
        <DishItem key={dish.dishId} dish={dish} onTogglePublish={handleTogglePublish} />
      ))}
    </div>
  );
};

export default DishList;
