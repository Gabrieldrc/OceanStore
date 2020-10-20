import React, { useState } from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import style from '../Buttom.style';
import styleWB from './WishlistButtom.style';
import UserService from '../../../services/user.service';

function WishlistButtom() {
  const [buttomStyle, setButtomStyle] = useState(style.getStyle(styleWB.primaryColor, styleWB.secundaryColor));
  const [content, setContent] = useState(['Add to wish list']);
  const location = useLocation();
  const handleClick = () => {
    const user = UserService.getCurrentUser();
    if (!user) {
      return setContent(
        [
          <Redirect 
          key={`wishListNoSigned${location.pathname}`}
          to={{
            pathname:"/signin",
            state: { referrer: location.pathname}
          }} 
          />
        ]
      );
    }
    setContent([
      <img src="/icons/checkBox.icon.svg" alt="+" style={style.icon}/>,
      'On your list',
    ]);
  };
  const handleMouseOver = () =>{
    setButtomStyle(style.getOnMouseOverStyle(styleWB.primaryColor, styleWB.secundaryColor));
  }
  const handleMouseOut = () =>{
    setButtomStyle(style.getStyle(styleWB.primaryColor, styleWB.secundaryColor));
  }
  return(
    <div style={buttomStyle} onClick={handleClick} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      {content}
    </div>
  );
}

export default WishlistButtom;