import React from 'react';
import './HomePage.css';

function HomePage() {
  return(
    <div className="full_page home_page_presentation">
      <img className="left bottom" src="/icons/media.icon.svg" alt="media"></img>
      <img className="right bottom" src="/icons/control.icon.svg" alt="control"></img>
      <img className="left top" src="/icons/tools.icon.svg" alt="tools"></img>
      <img className="right top" src="/icons/draw.icon.svg" alt="draw"></img>
      <img id="logo" src="/icons/OceanStore.icon.svg" alt="OceanStore"></img>
      <a href="/store" className="buttom">Explore</a>
    </div>
  );
}

export default HomePage;