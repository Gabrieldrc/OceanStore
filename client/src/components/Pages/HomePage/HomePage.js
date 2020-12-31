import React from 'react';
import './HomePage.css';

function HomePage() {

  const changeSlide = (e, n) => {
    e.preventDefault();
    let flagCurrentDisplayed = -1;
    const presentations = document.getElementById("home_page_presentation").children;
    // Search wich one is displayed
    for (let i = 0; i < presentations.length; i++) {
      if (presentations[i].style.display !== "none") {
        flagCurrentDisplayed = i;
        presentations[i].style.display = "none";
        break;
      }
    }

    if ( flagCurrentDisplayed + n >= presentations.length) {
      presentations[0].style.display = "flex";
      return;
    }
    if ( flagCurrentDisplayed + n < 0 ) {
      presentations[presentations.length -1].style.display = "flex";
      return;
    }
    presentations[flagCurrentDisplayed + n].style.display = "flex";
    return;
  };

  return(
    <div className="full_page home_page">
      <div className="full_center_page arrows_presentation">
        <div onClick={e => changeSlide(e, -1)} className="prev big_font" href="">❮</div>
        <div onClick={e => changeSlide(e, 1)} className="next big_font" href="">❯</div>
      </div>
      <div className="presentation_container" id="home_page_presentation">
        <div style={{display: "flex"}} className="full_center_page presentation_item" id="pstt_1">
          <img className="left bottom" src="/icons/media.icon.svg" alt="media"></img>
          <img className="right bottom" src="/icons/control.icon.svg" alt="control"></img>
          <img className="left top" src="/icons/tools.icon.svg" alt="tools"></img>
          <img className="right top" src="/icons/draw.icon.svg" alt="draw"></img>
          <img id="logo" src="/icons/OceanStore.icon.svg" alt="OceanStore"></img>
          <a href="/store" className="buttom">Explore</a>
        </div>
        <div style={{display: "none"}} className="full_center_page presentation_item dev_home" id="pstt_2">
          <div className="float_window_style box_shadow">
            <h1 className="title_4 big_font primary_color">WELCOME DEVELOPER!</h1>
            <h1 className="title_2 middle_font">share your applications</h1>
          </div>
          <a href="/dev/signup" className="buttom secundary_color_bg">Get start it</a>
        </div>
      </div>
    </div>
  );
}

export default HomePage;