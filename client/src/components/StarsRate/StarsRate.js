import React from 'react';
import './StarsRate.css';

function StarsRate(props) {
  const { average, iconClassName } = props;
  const keyBase = 'starsAverage';
  const className = iconClassName? `starsAverage ${iconClassName}` : `starsAverage`;
  let stars = [];
  for (let index = 1; index <= 5; index++) {
    if (index > average) {
      stars.push(<img src="/icons/starEmpty.icon.svg" alt="star" className={className} key={keyBase+index}/>);
    } else {
      stars.push(<img src="/icons/starFill.icon.svg" alt="star" className={className} key={keyBase+index}/>);
    }
  }
  return(
    <div className="stars_rate_container">
      {stars}
    </div>
  );
};

export default StarsRate;