import React from 'react';
import './AppDetails.css';

import StarsRate from '../StarsRate/StarsRate';
import AddCarButtom from '../Buttom/AddCarButtom/AddCarButtom';
import WishlistButtom from '../Buttom/WishlistButtom/WishlistButtom';

function AppDetails(props) {

  const { appDetails, rates } = props;

  const userRated = () => {
    const personIcon = <img src="/icons/person.icon.svg" alt="star" className="app_details_icon"/>;
    return (
      <div className="app_details_rate">
        {rates.count.toString()} {personIcon}
      </div>
    );
  };

  return(
    <div id="resumeContainer" className="app_details_resume">
      <div id="image" className="app_details_image"></div>
      <div id="details" className="app_details_details">
        <div id="rate" className="app_details_row">
          <div className="app_details_rate">
            <StarsRate average={4}/>
            {userRated()}
          </div>
        </div>
        <div id="publisher" className="app_details_row">
          {appDetails.publisher}
        </div>
        <div id="categories" className="app_details_row">
          {appDetails.category}
        </div>
        <div id="buttoms" className="app_details_buttoms">
          <WishlistButtom key="wishlistButtom"/>
          <AddCarButtom/>
        </div>
      </div>
    </div>
  );
}

export default AppDetails;