import React from 'react';
import './Nav.css';
import SearchBar from '../SearchBar/SearchBar';
import NavLink from '../NavLink/NavLink';

function Nav() {
  return(
    <div className="Nav">
      <div className="logo">
        <img src="./images/logo.jpg" alt="Logo" className="logoJpg"/>
      </div>
      <SearchBar />
      <NavLink 
        destiny="/categories"  
        setClassName="categories"
        label="Categories"/>
      <NavLink 
        destiny="/wishlist"  
        setClassName="wishlist"
        label="Wishlist"/>
      <NavLink 
        destiny="/car"  
        setClassName="car"
        label="Car"/>
      <NavLink 
        destiny="/profile"  
        setClassName="profile"
        label="Profile"/>
    </div>
  );
}


  
export default Nav;