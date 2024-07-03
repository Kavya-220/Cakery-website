import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

export const Footer = () => {
  return (
    <>

<footer className="bg-dark text-white pt-3 " id='contact'>
                  <div className=" container text-center text-md-left">
                    <div className="row text-center text-md-left">
                      <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-5 ">
                       <img src={assets.logo} alt="" width="80" height="80" />
                        <span className="text-uppercase font-weight-bold text-danger fs-3">Cakery</span>
                      <ul className="list-unstyled list-inline">
                        <li className="list-inline-item">
                          <a href="#" className="btn-floating btn-sm text-white"><img src={assets.linkedin_icon} height="30" width="30" alt="" /></a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#" className="btn-floating btn-sm text-white"><img src={assets.facebook_icon} height="30" width="30" alt="" /></a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#" className="btn-floating btn-sm text-white"><img src={assets.twitter_icon} height="30" width="30" alt="" /></a>
                        </li>                 
                        
                      </ul>
                      </div>

                      <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-5">
                        <h4 className="text-uppercase text-danger mt-2">products</h4>
                        <p>
                          <a href="#cakes" className="text-white" >Cakes</a>
                        </p>
                        <p>
                          <a href="#slice cakes" className="text-white" >Slice Cakes</a>
                        </p>
                        <p>
                          <a href="#cupcakes" className="text-white" >Cupcakes</a>
                        </p>
                      </div>

                      <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-5">
                        <h4 className="text-uppercase text-danger  mt-1">quick links</h4>
                        <p >
                          <a href="#home" className="text-white" >Home</a>
                        </p>
                        <p>
                          <a href="#category" className="text-white" >Category</a>
                        </p> <p>
                          <a href="#blog" className="text-white">Blog</a>
                        </p>

                        <p>
                          <a href="#about" className="text-white" >About</a>
                        </p>
                        <p>
                          <a href="reviews" className="text-white" >Reviews</a>
                        </p>
                        <p>
                          <a href="#contact" className="text-white" >Contact</a>
                        </p>
                      </div>

                      <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-5">
                        <h4 className="text-uppercase font-weight-bold text-danger fs-5 mt-1">Contact Information:</h4>
                        <p>
                          <i className="fa fa-home"></i>123 Main Street,
                          Nehrutown, Chennai
                        </p>
                        <p>
                          <i className="fa fa-envelope"></i>info@cakerybakery.com
                        </p>
                        <p>
                          <i className="fa fa-phone"></i> +91 (955) 123-4567
                        </p>
                        <p>
                          <i className="fa fa-print "></i> +01 335 633 77
                        </p>
                      </div>

                      <hr className="" />
                      <div className="row align-items-center">
                        <div className="col-md-7 col-lg-8 mx-auto">
                          <p>Copyright &copy;2024 All rights reserved by :
                            <a href="#" >
                            <strong className="text-danger"> Cakery</strong> </a>
                          </p>
                        </div>
                      </div>




                    </div>
                  </div>
                </footer>
    </>
  )
}
