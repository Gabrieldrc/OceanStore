import React from 'react';
import './SearchBar.css';

function SearchBar() {
  return(
    <div className="searchbar">
      <input type="search" className="searchInput" placeholder="Search"/>
      <img src="/images/search.icon.svg" alt="lens" className="searchIcon"/>
    </div>
  );
}


  
export default SearchBar;