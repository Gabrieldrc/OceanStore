import React from 'react';
import './Review.css';
import StarsRate from '../StarsRate/StarsRate';

function Review(props) {
  const { data } = props;
  return(
    <div id="reviewContainer" className="review_container">
      <div>
        <div className="review_user_container">
          <div>{data.user_name}</div>
          <StarsRate average={data.rate} iconClassName="review_starsIcon"/>
        </div>
      </div>
      <div className="review_right_container">
        <div className="review_review_container">
          {data.review}
        </div>
        <div className="review_buttoms_container">
          like(?)
        </div>
      </div>
    </div>
  );
}

export default Review;