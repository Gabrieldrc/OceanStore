import React, { useState } from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import UserService from '../../../services/user.service';

function WishlistButtom() {
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
      <img src="/icons/checkBox.icon.svg" alt="+" key="checkBoxIcon"/>,
      'On your list',
    ]);
  };
  return(
    <div className="buttom primary_color_bg" onClick={handleClick}>
      {content}
    </div>
  );
}

export default WishlistButtom;