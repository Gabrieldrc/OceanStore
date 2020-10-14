import React from 'react';

import Review from '../Review/Review';
import db from './db.reviews';

function Reviews(props) {
  return(
    <div id="reviewContainer">
      {db.map(obj => {
        return <Review data={obj}/>;
      })}
    </div>
  );
}

export default Reviews;