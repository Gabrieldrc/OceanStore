import React from 'react';
import style from './Review.style';
import StarsRate from '../StarsRate/StarsRate';

function Review(props) {
  const { data } = props;
  return(
    <div id="reviewContainer" style={style.container}>
      <div>
        <div style={style.userContainer}>
          <div>{data.user_name}</div>
          <StarsRate average={data.rate} iconStyle={style.starsIcon}/>
        </div>
      </div>
      <div style={style.rightContainer}>
        <div style={style.reviewContainer}>
          {data.review}
        </div>
        <div style={style.buttomsContainer}>
          like(?)
        </div>
      </div>
    </div>
  );
}

export default Review;