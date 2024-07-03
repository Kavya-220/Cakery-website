import React from 'react'
import { assets } from '../../assets/assets'
import './Review.css'

export const Review = () => {
  return (
    <>
    <div className="container-fluid bg-image pb-5 " id="review">
                  <div className="container pb-5">
                  <div className="row">
                    <div className="col-md-12 ">
                  <h4 className="mt-5 text-center text-white pb-3 pt-5 fs-2 fw-bold">What customers say..</h4>
                  
                  <div className="d-lg-flex mt-5">
                    <div className="p-2 ms-3 mb-3 bg-white flex-fill box ">
                      <h2 className="fs-4 text-center mt-3 head-color" >"Absolutely Divine Cakes! <br />⭐⭐⭐⭐⭐</h2>
                      <p className="fs-6 text-color">"Incredible cakes! Tasted as good as they looked. A must-visit!"</p>
                      <img src={assets.img_1} alt="" className="rounded-circle image  ms-3" />
                      <span className="ms-5 ">James</span>
                      </div>
                
                
                        <div className="p-2 ms-3 mb-3 bg-white  flex-fill box">
                          <h2 className="fs-4 text-center  mt-3 head-color" >"Best Cupcakes in Town! <br/>⭐⭐⭐⭐⭐</h2>
                          <p className="fs-6 text-color">"Best cupcakes ever! Every flavor is a delight."</p>
                          <img src={assets.img_2} alt="" className="rounded-circle image  ms-3" />
                          <span className="ms-4 mb-3">Sophia</span>
                          </div>
      
                            
                            <div className="p-2 ms-3 mb-3 bg-white flex-fill box">
                              <h2 className="fs-4 text-center  mt-3 head-color" >"Fantastic Customer Service! <br/>⭐⭐⭐⭐⭐</h2>
                              <p className="fs-6 text-color">"Impressed by their vegan options. Delicious and guilt-free!"</p>
                              <img src={assets.img_3} alt="" className="rounded-circle image  ms-3" />
                              <span className="ms-5">Emma</span>
                            </div>
                            
                               
                  </div>

                  <div className="d-lg-flex flex-row mt-5 pt-3">
                
                            <div className="p-2 ms-3 mb-4 bg-white box flex-fill">
                            <img src={assets.icon_1} alt="" className="rounded-circle icon" />
                            <h2 className="fs-5 text-center head-color fw-bold" >"FAST DELIVERY"</h2>
                              <p className="fs-6 text-center text-color">"Within 30 Minutes"</p>
                              
                              </div>
                            
                
                              <div className="p-2 ms-3 mb-4 bg-white box flex-fill ">
                               <img src={assets.icon_2} alt="" className="rounded-circle icon" />
                                <h2 className="fs-5 text-center head-color fw-bold" >"24/7 Available"</h2>
                                <p className="fs-6 text-center text-color">"Call Us Anytime"</p>                           
                                </div>

                                <div className="p-2 ms-3 mb-4 bg-white box flex-fill ">
                               <img src={assets.icon_3} alt="" className="rounded-circle icon" />
                                <h2 className="fs-5 text-center head-color fw-bold" >"EASY PAYMENTS"</h2>
                                  <p className="fs-6 text-center text-color">"Cash or Credit"</p>
                                  </div>
                    
                  </div>
                    </div>
                    </div>
                  </div>
                </div>
    </>
  )
}
