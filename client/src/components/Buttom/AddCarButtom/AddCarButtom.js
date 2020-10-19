import React, { useState } from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import style from '../Buttom.style';
import styleAC from './AddCarButtom.style';
import AuthService from '../../../services/auth.service';

function AddCarButtom() {
  const [buttomStyle, setButtomStyle] = useState(style.getStyle(styleAC.primaryColor, styleAC.secundaryColor));
  const [content, setContent] = useState(['Add to car']);
  const location = useLocation();
  const handleClick = () => {
    const user = AuthService.getCurrentUser();
    if (!user) {
      return setContent(
        [
          <Redirect 
          key={`addCarNoSigned${location.pathname}`}
          to={{
            pathname:"/signin",
            state: { referrer: location.pathname}
          }} 
          />
        ]
      );
    }
    setContent([<Redirect exact to="/car" key="addCarSigned"/>]);
  };
  const handleMouseOver = () => {
    setButtomStyle(style.getOnMouseOverStyle(styleAC.primaryColor, styleAC.secundaryColor));
  }
  const handleMouseOut = () => {
    setButtomStyle(style.getStyle(styleAC.primaryColor, styleAC.secundaryColor));
  }
  return(
    <div style={buttomStyle} onClick={handleClick} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      {content}
    </div>
  );
}

export default AddCarButtom;