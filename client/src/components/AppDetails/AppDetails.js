import React from 'react';
import style from './AppDetails.style';

import StarsRate from '../StarsRate/StarsRate';
import dataApp from '../AppDetailsPage/db';

function AppDetails(props) {

  const { appDetails, rates } = props;
  console.log(appDetails);

  const userRated = () => {
    const personIcon = <img src="/icons/person.icon.svg" alt="star" style={style.icon}/>;
    return (
      <div style={style.rateContainer}>
        {rates.count.toString()} {personIcon}
      </div>
    );
  };


  return(
    <div id="resumeContainer" style={style.resumeContainer}>
      <div id="image" style={style.imageContainer}></div>
      <div id="details" style={style.details}>
        <div id="rate" style={style.row}>
          <div style={style.rateContainer}>
            <StarsRate average={4}/>
            {userRated()}
          </div>
        </div>
        <div id="developer" style={style.row}>
          {dataApp.developer}
        </div>
        <div id="categories" style={style.row}>
          {dataApp.categories.map(category => {
            return '<c>'+category+'</c> '
          })}
        </div>
        <div id="buttoms" style={style.buttomsContainer}>
          <a href="/dont_know" style={style.awButtoms}>
            <img src="/icons/bookmarkPlus.icon.svg" alt="+" style={style.icon}/>
            Add to wish list
          </a>
          <a href="/dont_know" style={style.acButtoms}>
            Add to car
          </a>
        </div>
      </div>
    </div>
  );
}

export default AppDetails;