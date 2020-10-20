import React from 'react';
import style from './StarsRate.style';

function StarsRate(props) {
  const { average, iconStyle } = props;
  const keyBase = 'starsAverage';
  
  if (iconStyle) {
    style.icon = {
      ...style.icon,
      ...iconStyle,
    };
  }
  // const starHalfFill = <img src="/icons/starHalfFill.icon.svg" alt="star" style={style.icon}/>;
  let stars = [];
  for (let index = 1; index <= 5; index++) {
    if (index > average) {
      stars.push(<img src="/icons/starEmpty.icon.svg" alt="star" style={style.icon} key={keyBase+index}/>);
    } else {
      stars.push(<img src="/icons/starFill.icon.svg" alt="star" style={style.icon} key={keyBase+index}/>);
    }
  }
  return(
    <div style={style.rateContainer}>
      {stars}
    </div>
  );
};

export default StarsRate;