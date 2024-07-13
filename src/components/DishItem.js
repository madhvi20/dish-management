import React from 'react';

const DishItem = ({ dish, onTogglePublish }) => {
  const { dishId, dishName, imageUrl, isPublished } = dish;

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
      <img src={imageUrl} alt={dishName} style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
      <h3>{dishName}</h3>
      <p>{isPublished ? 'Published' : 'Unpublished'}</p>
      <button onClick={() => onTogglePublish(dishId)}>
        {isPublished ? 'Unpublish' : 'Publish'}
      </button>
    </div>
  );
};

export default DishItem;
