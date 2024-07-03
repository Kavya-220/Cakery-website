import React from 'react'
import './ContactForm.css'
export const ContactForm = () => {
  return (
    <>
    <div className="container-fluid bg-contact pb-5 font fw-bold" id="contact">
              
              <h4 className=" pt-5 text-center text-white ">CONTACT US</h4>
              
              <div className="container pt-5">
                <form action=""  className="w-30 mx-auto contact" >
                     <div className="row   ">
                  
                    <h3 className="text-head pt-2 text-center">GET IN TOUCH</h3>
                    <div className="pt-4 pb-2">
                      <input type="text " id="name" className="form-control text-white" placeholder="First name" />
                    </div>
                    <div className=" pb-2">
                      <input type="email " id="email" className="form-control text-white" placeholder="Enter email"/>
                    </div>
                    <div className="pb-2">
                      <input type="tel" id="number" className="form-control text-white"  placeholder="Mobile Number"/>
                    </div>
                    <div className=" pb-2">
                    <textarea className="form-control text-white" rows="5" id="comment"  placeholder="Your comments" name="text"></textarea>
                  </div>
                  <div className="text-center pb-2">
                    <button type="submit" id="submit" className="btn btn-danger">Contact Now</button>
                  </div>
                  </div>
                 </form>

                </div>
                </div>

           
    </>
  )
}
