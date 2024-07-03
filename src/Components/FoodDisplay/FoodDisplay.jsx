import React, { useContext } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../../Context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

export const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="food-display pb-5 mb-3 pt-4" id='food-display'>
            <h1 className='text-center head-color mt-3'>Top Dishes Near You</h1>
            <div className="food-display-list mt-5">
              {food_list.map((item, index) => {
                if (category === "All" || category === item.category) {
                  return (
                    <FoodItem
                      key={index}
                      id={item._id}
                      name={item.name}
                      description={item.description}
                      price={item.price}
                      image={item.image}
                    />
                  );
                }
                return null;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
