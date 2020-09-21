import React from 'react';
import './Nav.css';
import SearchBar from '../SearchBar/SearchBar';
import NavLinkItem from '../NavLinkItem/NavLinkItem';
import NavMenu from '../NavMenu/NavMenu';

function Nav() {
  return(
    <div className="Nav">
      <div className="logo">
        <a href="/store" ><img src="./images/logo.jpg" alt="Logo" className="logoJpg"/></a>
      </div>
      <SearchBar />
      <NavLinkItem
        key="/categories"
        destiny="/categories"  
        setClassName="categories"
        label="Categories"/>
      <NavLinkItem
        key="/wishlist"
        destiny="/wishlist"  
        setClassName="wishlist"
        label="Wishlist"/>
      <NavLinkItem
        key="/car"
        destiny="/car"  
        setClassName="car"
        label="Car"/>
      <NavMenu
        list={[
          {value: "Settings", url: "/settings"},
          {value: "Sell", url: "/sell"},
          {value: "My Apps", url: "/apps"},
          {value: "Log Out", url: "/logOut"},
        ]} 
        destiny="/profile"  
        className="profile"
        title="Profile"/>
    </div>
  );
}


  
export default Nav;