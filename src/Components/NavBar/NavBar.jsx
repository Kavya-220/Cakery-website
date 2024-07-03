import React, { useState, useContext } from 'react';
import './NavBar.css';
import { assets } from '../../assets/assets';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';

export const NavBar = ({ setShowLogin }) => {
  const { getTotalCartAmount } = useContext(StoreContext);
  const [menu, setMenu] = useState("menu");
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      navigate(`/search?query=${searchQuery}`);
      setShowSearch(false);
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top pt-0 mt-0 py-0 bg">
        <div className="container-fluid">
          <span className="navbar-brand" href="#">
            <Link to='/'><img src={assets.logo} alt="" width="65" height="60" className="" /></Link>
            <span className='fw-bold title-color pointer'>Cakery.</span>
          </span>
          <button className="navbar-toggler icon" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item ms-3">
                <NavLink to="/" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>Home</NavLink>
              </li>
              <li className="nav-item ms-3">
                <NavLink to="/menu" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>Explore Menu</NavLink>
              </li>
              <li className="nav-item ms-3">
                <NavLink to="/blog" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>Blog</NavLink>
              </li>
              <li className="nav-item ms-3">
                <NavLink to="/review" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>Reviews</NavLink>
              </li>
              <li className="nav-item ms-3">
                <NavLink to="/contact" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>Contact</NavLink>
              </li>
            </ul>
          </div>
          <div className="d-flex align-items-center justify-content-center icons-container mx-auto">
            <div className="search-container">
              {showSearch ? (
                <div className="search-input-wrapper">
                  <input
                    type="text"
                    className="search-input text-white"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={handleSearch}
                  />
                  <img src={assets.search_icon} alt="Search" width="20" height="20" className="search-icon-inside" onClick={() => setShowSearch(false)} />
                </div>
              ) : (
                <img src={assets.search_icon} alt="Search" width="20" height="20" className="search-icon" onClick={() => setShowSearch(true)} />
              )}
            </div>
            <div className="navbar-search-icon">
              <Link to='./cart'><img src={assets.basket_icon} alt="" width="20" height="20" className="ms-4" /></Link>
              <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
            </div>
            <button className='ms-4 btn-style text-white ' onClick={() => setShowLogin(true)}>sign in</button>
          </div>
        </div>
      </nav>
    </>
  );
}
