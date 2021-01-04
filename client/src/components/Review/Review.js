import React, { useState } from 'react';
import './Review.css';
import StarsRate from '../StarsRate/StarsRate';

function Review(props) {
  const { data } = props;
  const [direction, setDirection] = useState("up");
  const [showBoxHidedClass, setShowBoxHidedClass] = useState("");

  const displayAndHideText = () => {
    if (direction === "up") {
      setDirection("down");
      setShowBoxHidedClass("display_review");
      return;
    }
    setDirection("up");
    setShowBoxHidedClass("");
    return;
  };

  return(
    <div className="review_container box_shadow">
      <div className="left_container">
        <div className="review_user_container">
          <div className="app_name middle_font">{data.user_name}</div>
          <StarsRate average={data.rate} iconClassName="review_starsIcon"/>
        </div>
      </div>
      <div className="right_container">
        <div className={`review_text ${showBoxHidedClass}`}>
          {data.review}
        </div>
        <div className="buttoms_container">
          <div className={`arrow_displaybox ${direction}`} onClick={displayAndHideText}></div>
        </div>
      </div>
    </div>
  );
}

export default Review;