// src/components/OrderNowPage/OrderNowPage.js

import React, { useContext } from 'react';
import './OrderNowPage.css';
import { StoreContext } from '../../Context/StoreContext';
import FoodItem from '../../Components/FoodItem/FoodItem';

const OrderNowPage = () => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="food-display pb-5 mb-3 pt-4" id='food-display'>
            <h1 className='text-center head-color mt-3'>Top Dishes Near You</h1>
            <div className="food-display-list mt-5">
              {food_list.map((item, index) => (
                <FoodItem
                  key={index}
                  id={item._id}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  image={item.image}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderNowPage;
