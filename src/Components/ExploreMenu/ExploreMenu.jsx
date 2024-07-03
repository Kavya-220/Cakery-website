import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

export const ExploreMenu = ({category,setCategory}) => {
  return (
    <>
    <div className="container">
              <div className="row">
                <div className="col-md-12">
    <div className="explore-menu pt-5" id='explore-menu'>
    <h1 className='pt-3 head-color'>Explore our menu</h1>
    <p className='explore-menu-text col-md-6 text-color'>Explore our delectable cake creations, from classic favorites to unique flavors. Indulge in a slice of happiness today!</p>
    <div className="explore-menu-list ">
        {menu_list.map((item,index)=>{
            return (
                <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                    <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" width="150" height="150"/>
                    <p className='mt-4'>{item.menu_name}</p>
                    </div>
            )
        })}
        
        </div>
      <hr />
        </div>
        </div>
        </div>
    </div>
    </>
  )
}
