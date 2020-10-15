import React from 'react';

import Review from '../Review/Review';
import db from './db.reviews';

function Reviews(props) {
  return(
    <div id="reviewContainer">
      {db.map(obj, index => {
        return <Review data={obj} key={review+index}/>;
      })}
    </div>
  );
}

export default Reviews;