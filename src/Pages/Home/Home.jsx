import React, { useState } from 'react'
import './Home.css'
import { Header } from '../../Components/Header/Header'
import { ExploreMenu } from '../../Components/ExploreMenu/ExploreMenu'
import { FoodDisplay } from '../../Components/FoodDisplay/FoodDisplay'
import { Blog } from '../../Components/Blog/Blog'
import { Review } from '../../Components/Review/Review'
import { ContactForm } from '../../Components/ContactForm/ContactForm'

export const Home = () => {

  const[category,setCategory]=useState("All")

  return (
    <>
    <Header/>
    <ExploreMenu category={category} setCategory={setCategory} />
    <FoodDisplay category={category}/>
    <Blog />
    <Review/>
     <ContactForm/>
    </>
  )
}
