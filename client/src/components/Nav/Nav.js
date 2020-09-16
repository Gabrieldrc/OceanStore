import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import NavLink from '../NavLink/NavLink';

function Nav() {
  return(
    <div className="Nav">
      <div className="logo">
        <a href="/store" ><img src="./images/logo.jpg" alt="Logo" className="logoJpg"/></a>
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