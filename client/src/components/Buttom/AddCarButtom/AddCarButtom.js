import React, { useState } from 'react';
import style from '../Buttom.style';
import styleAC from './AddCarButtom.style';

function AddCarButtom() {
  const [buttomStyle, setButtomStyle] = useState(style.getStyle(styleAC.primaryColor, styleAC.secundaryColor));
  const [content, setContent] = useState(['Add to car']);
  const handleClick = () => {
    setContent('In car');
  };
  const handleMouseOver = () =>{
    setButtomStyle(style.getOnMouseOverStyle(styleAC.primaryColor, styleAC.secundaryColor));
  }
  const handleMouseOut = () =>{
    setButtomStyle(style.getStyle(styleAC.primaryColor, styleAC.secundaryColor));
  }
  return(
    <div style={buttomStyle} onClick={handleClick} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      {content}
    </div>
  );
}

export default AddCarButtom;