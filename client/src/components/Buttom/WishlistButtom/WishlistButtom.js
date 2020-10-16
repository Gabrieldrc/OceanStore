import React, { useState } from 'react';
import style from '../Buttom.style';
import styleWB from './WishlistButtom.style';

function WishlistButtom() {
  const [buttomStyle, setButtomStyle] = useState(style.getStyle(styleWB.primaryColor, styleWB.secundaryColor));
  const [content, setContent] = useState(['Add to wish list']);
  const handleClick = () => {
    console.log('click(?)');
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