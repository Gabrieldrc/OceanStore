import React from 'react';
import style from './AppDetails.style';

import StarsRate from '../StarsRate/StarsRate';
import AddCarButtom from '../Buttom/AddCarButtom/AddCarButtom';
import WishlistButtom from '../Buttom/WishlistButtom/WishlistButtom';

function AppDetails(props) {

  const { appDetails, rates } = props;

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
        <div id="publisher" style={style.row}>
          {appDetails.publisher}
        </div>
        <div id="categories" style={style.row}>
          {appDetails.category}
        </div>
        <div id="buttoms" style={style.buttomsContainer}>
          <WishlistButtom/>
          <AddCarButtom/>
        </div>
      </div>
    </div>
  );
}

export default AppDetails;