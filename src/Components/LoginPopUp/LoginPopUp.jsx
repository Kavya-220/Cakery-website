import React, { useState } from 'react'
import './LoginPopUp.css'
import { assets } from '../../assets/assets'


export const LoginPopUp = ({setShowLogin}) => {

    const [currentState,setCurrentState] = useState("Login In")

  return (
    <>
  
                  <div className="row">
                    <div className="col-md-12 ">

                    <div className='login-popup'>
<form className='login-popup-container'>
    <div className="login-popup-title d-flex align-items-center">
        <h2 className='head-color'>{currentState}</h2>
        <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
    </div>
    <div className="login-popup-input">
        {currentState==="Login"?<></>:<input type="text" placeholder='Your Name' required />}
        <input type="email" placeholder='Your Email' required />
        <input type="password" placeholder='Password' required />
    </div>
    <button>{currentState==='Sign Up'?"Create account":"Login In"}</button>
    <div className="login-popup-condition">
        <input type="checkbox" required />
        <p>By continuing, I agree to the terms of use & privacy policy</p>
    </div>
    {currentState==='Login'
    ?<p>Create a New Acount ? <span className='head-color fw-bold' onClick={()=>setCurrentState("Sign Up")}>Click here</span></p>
    :<p>Already have an account? <span className='head-color fw-bold'  onClick={()=>setCurrentState("Login")}>Login here</span></p>
   }

</form>
    </div>
    </div>
    </div>
                                    
    </>
  )
}
