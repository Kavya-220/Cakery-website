import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../Context/StoreContext'
import { useNavigate } from 'react-router-dom'

export const Cart = () => {

  const{cartItems,food_list,removeFromCart,getTotalCartAmount} = useContext(StoreContext)

   const navigate = useNavigate()

  return (
   <>
     <div className="container-fluid ">
                  <div className="container ">
                  <div className="row">
                    <div className="col-md-12 ">
                      <div className='cart'>
 <div className="cart-items">
  <div className="cart-items-title">
    <p>Items</p>
    <p className='d-flex align-items-center justify-content-center'>Title</p>
    <p>Price</p>
    <p>Quantity</p>
    <p>Total</p>
    <p>Remove</p>
  </div>
  <br />
  <hr />
  {food_list.map((item,index)=>{
    if(cartItems[item._id]>0){
      return(
        <>
        <div className='cart-items-title cart-items-item'>
            <img src={item.image} alt="" className='rounded' />
            <p>{item.name}</p>
            <p>₹{item.price}</p>
            <p>{cartItems[item._id]}</p>
            <p>₹{item.price * cartItems[item._id]}</p>
            <p onClick={()=>removeFromCart(item._id)} className='cross' >x</p>
            </div>
             <hr />
            </>
      )
    }
  })}
  
 </div>
 <div className="cart-bottom mb-5">
    <div className="cart-total">
        <h2>Cart Total</h2>
        <div>
            <div className="cart-total-details">
                <p>Subtotal</p>
                <p>₹{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
                <p>Delivery Fee</p>
                <p>₹{getTotalCartAmount()===0?0:50}</p>
            </div>
            <hr />
            <div className="cart-total-details">
                <b>Total</b>
                <b>₹{getTotalCartAmount()===0?0:getTotalCartAmount()+50}</b>
            </div>
        </div>
        <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
    </div>
    <div className="cart-promocode">
        <div>
            <p>If you have a promo code, Enter it here</p>
            <div className='cart-promocode-input'>
             <input type="text" placeholder='promo code'/>
             <button>Submit</button>
            </div>
        </div>
    </div>
 </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    
   </>
  )
}
