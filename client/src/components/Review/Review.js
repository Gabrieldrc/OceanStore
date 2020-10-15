import React from 'react';
import style from './Review.style';

function Review(props) {
  const { data } = props;
  return(
    <div id="reviewContainer" style={style.container}>
      {data.user_name}
    </div>
  );
}

export default Review;