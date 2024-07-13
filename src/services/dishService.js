import dishesData from '../data/dishes.json';

let dishes = [...dishesData];

export const getAllDishes = () => {
  return Promise.resolve(dishes);
};

export const togglePublishStatus = (dishId) => {
  dishes = dishes.map(dish => {
    if (dish.dishId === dishId) {
      dish.isPublished = !dish.isPublished;
    }
    return dish;
  });
  return Promise.resolve();
};
