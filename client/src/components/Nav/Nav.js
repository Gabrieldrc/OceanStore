import React from 'react';
import {
  Link,
} from 'react-router-dom';
import './Nav.css';
import SearchBar from '../SearchBar/SearchBar';

function Nav() {
  return(
    <div className="Nav">
      <div className="logo">
        <img src="./images/logo.jpg" alt="Logo" className="logoJpg"/>
      </div>
      <SearchBar />
      <div className="categories">
        <Link to="/categories">Categories</Link>
      </div>
      <div className="wishlist">yes</div>
      <div className="car">syess</div>
      <div className="profile">Yo</div>
    </div>
  );
}


  
export default Nav;