import React, { useState } from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import UserService from '../../../services/user.service';

function AddCarButtom() {
  const [content, setContent] = useState(['Add to car']);
  const location = useLocation();
  const handleClick = () => {
    const user = UserService.getCurrentUser();
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
  
  return(
    <div className="buttom secundary_color_bg" onClick={handleClick}>
      {content}
    </div>
  );
}

export default AddCarButtom;