import React, { useContext } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext'

export const FoodItem = ({id,name,price,description,image}) => {

   const{cartItems,addToCart,removeFromCart}=useContext(StoreContext)

  return (
    <>
     <div className="container" >
              <div className="row  d-flex align-items-center justify-content-center">
                <div className="col-md-12 ">
     <div className="card mt-2 p-0">
        <div className="card-img">
    <img src={image} className="card-img-top rounded" width="100" height="200"  alt="" />
    {!cartItems[id]
    ?<img className='add' width="30" onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="" />
    :<div className='food-item-counter bg-white d-flex align-items-center p-2'>
      <img onClick={()=>removeFromCart(id)} width="20" src={assets.remove_icon_red} alt="" />
      <p className='mb-0'>{cartItems[id]}</p>
      <img onClick={()=>addToCart(id)} width="20" src={assets.add_icon_green} alt="" />
    </div>
    }
    </div>
    <div className="food-item-rating">
    <p className="card-text mt-2 ps-3 fw-bold">{name}</p>
    <img src={assets.rating_starts}  width="100" alt="" className='px-3 mb-1' />
   </div> 
    <p className='px-3 mb-0 mt-0 text-color'>{description}</p>
    <p className='px-3 pt-2 mt-0 head-color fw-bold '>₹{price}</p>   
  </div>
  </div>
  </div>
  </div>
 </>
  )
}
export default FoodItem
