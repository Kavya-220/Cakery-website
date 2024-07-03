import React from 'react'
import './Blog.css'
import { assets } from '../../assets/assets'

export const Blog = () => {
  return (
    <>
        <div className=" px-0 banner pt-5  pb-5" id="blog">
          <div className="container-fluid">
              <div className="row">
                <div className="col-md-12 ">
              <h4 className="blog mt-5 text-center text-white fs-2">OUR BLOGS</h4>
                           
<div id="demo" className="carousel slide carousel-fade  ps-5 pe-5 pt-5  mt-3" data-bs-ride="carousel">

 
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
  </div>
  
  
  <div className="carousel-inner">
    <div className="carousel-item active">
<img src={assets.blog_1} alt=""  width="100%"  />
      <div className="carousel-caption">
        <h3>"The Art of Cake Decorating: A Peek Inside Our Bakery"</h3>
        <p> Share behind-the-scenes photos or videos of decorators at work, 
          along with tips for aspiring bakers who want to improve their decorating skills.</p>
      </div>
    </div>
    <div className="carousel-item">
<img src={assets.blog_2} alt="" width="100%" />
      <div className="carousel-caption">
        <h3>"The Sweet History of Our Bakery: From Humble Beginnings to Sweet Success"</h3>
        <p>Highlight any unique aspects of your bakery, such as family traditions, secret recipes passed down through generations, or special community initiatives.
          Include photos of your bakery throughout the years, as well as</p>
      </div> 
    </div>
    <div className="carousel-item">
      <img src={assets.blog_3} alt=""  width="100%"  />
      <div className="carousel-caption">
        <h3>"Behind the Flavors: Exploring Our Signature Cake Creations"</h3>
        <p>Encourage readers to try making their own versions of your signature cakes at home, offering 
          tips for adapting recipes to suit personal preferences and dietary restrictions.</p>
      </div>  
    </div>
  </div>
  
  
  <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span className="carousel-control-prev-icon"></span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span className="carousel-control-next-icon"></span>
  </button>
</div>
          </div>
          </div>
            </div>
            </div>

    </>
  )
}
