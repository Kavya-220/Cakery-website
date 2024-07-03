import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <>
   <div className="container-fluid top-banner home section" id="home">
              <div className="row">
                <div className="col-md-12">
              <h4 className="head">_WELCOME TO CAKERY_</h4>
              <h2 className="para col-md-8 text-center mx-auto mt-1">“Slice into sweet moments, one cake at a time.”</h2>
             <Link to='/display'> <button className="btn-style mt-2 text-white">Order Now</button></Link>
      
                </div>
              </div>
              </div>
          
    </>
  )
}
