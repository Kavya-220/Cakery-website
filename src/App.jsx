import { useState } from 'react'
import './App.css'
import { NavBar } from './Components/NavBar/NavBar'
import { Route, Routes } from 'react-router-dom'
import { Home } from './Pages/Home/Home'
import { Cart } from './Pages/Cart/Cart'
import { PlaceOrder } from './Pages/PlaceOrder/PlaceOrder'
import { Footer } from './Components/Footer/Footer'
import { LoginPopUp } from './Components/LoginPopUp/LoginPopUp'
import { Blog } from './Components/Blog/Blog'
import { Review } from './Components/Review/Review'
import { ContactForm } from './Components/ContactForm/ContactForm'
import { ExploreMenu } from './Components/ExploreMenu/ExploreMenu'
import { FoodItem } from './Components/FoodItem/FoodItem'
import { FoodDisplay } from './Components/FoodDisplay/FoodDisplay'
import SearchResults from './Pages/SearchResults/SearchResults'
import OrderNowPage from './Pages/OrderNowPage/OrderNowPage'


function App() {
  
  const [showLogin,setShowLogin]=useState(false)
  const [category, setCategory] = useState('All');

  return (
    <>
    {showLogin?<LoginPopUp setShowLogin={setShowLogin}/>:<></>}
      <div className="app">
        <NavBar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/order' element={<PlaceOrder/>}/>
          <Route path='/menu'element={<> <ExploreMenu category={category} setCategory={setCategory} />
          <FoodDisplay category={category} /></>} />
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/review' element={<Review/>}/>
          <Route path='/contact' element={<ContactForm/>}/>
          <Route path='/search' element={<SearchResults/>}/>
          <Route path="/display" element={<OrderNowPage/>} />


        </Routes>
      </div>
   
   <Footer/>
    </>
  )
}

export default App
