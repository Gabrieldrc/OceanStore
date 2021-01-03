import React, { useEffect, useState } from 'react';
import './AppDetailsPage.css';
import { useParams } from 'react-router-dom';

import AppDetailsService from '../../../services/app_details.service';
import AppService from '../../../services/app.service';
import RateService from '../../../services/rate.service';
import dataApp from './db';

import Reviews from '../../Reviews/Reviews';
import StarsRate from '../../StarsRate/StarsRate';
import WishlistButtom from '../../Buttom/WishlistButtom/WishlistButtom';
import AddCarButtom from '../../Buttom/AddCarButtom/AddCarButtom';

function AppDetailsPage() {
  let { app_name } = useParams();
  const [app, setApp] = useState(null);
  const [appDetails, setAppDetails] = useState(null);
  const [rates, setAppRates] = useState(null);
  const [loadStatus, setLoadCompleted] = useState(false);
  const [direction, setDirection] = useState("up");
  
  const [showBoxHidedClass, setShowBoxHidedClass] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const appDetailsResponse = await AppDetailsService.getAppDetails(app_name);
        const rateResponse = await RateService.getAppRates(app_name);
        const appResponse = await AppService.getApp(app_name);
        setApp(appResponse.data);
        setAppDetails(appDetailsResponse.data);
        setAppRates(rateResponse.data);
        setLoadCompleted(true);
      } catch (error) {
        console.log(error); 
      }
    })();
  },[]);

  const userRated = () => {
    const personIcon = <img src="/icons/person.icon.svg" alt="star" className="app_details_icon"/>;
    return (
      <div className="app_details_rate">
        {rates.count.toString()} {personIcon}
      </div>
    );
  };

  

  {console.log(appDetails)}
  {console.log(app)}
  return(
    <div className="full_page app_page">
      {loadStatus? (
        <>
          <h1 className="title_1 big_font">{appDetails.app_name}</h1>
          <div className="resume">
            <div className="app_image"></div>
            <div className="block text_resume">
              <p>
                Red hair crookshanks bludger Marauder’s Map Prongs sunshine daisies butter mellow Ludo Bagman. Beaters gobbledegook N.E.W.T., Honeydukes eriseD inferi Wormtail. Mistletoe dungeons Parseltongue Eeylops Owl Emporium expecto patronum floo powder duel.
              </p>
            </div>
            <div className="about">
              <div className="row rate">
                <span className="primary_color bold">Reviews:</span> 
                <StarsRate average={4}/>
                {userRated()}
              </div>
              <div className="row developer">
                <span className="primary_color bold">Developer:</span> 
                {app.developer}
              </div>
              <div className="row categories">
                <span className="primary_color bold">Categories:</span>
                {app.category}
              </div>
            </div>
          </div>
          <div className="buttom_container">
            <WishlistButtom key="wishlistButtom"/>
            <AddCarButtom/>
          </div>
          <div className="box_shadow">
            <h1 className="title_2 middle_font">
              ABOUT THIS APP
              <div className={`arrow_displaybox ${direction}`}></div>
            </h1>
            <p className={`box_part ${showBoxHidedClass}`}>
              {dataApp.aboutThisGame}
            </p>
          </div>
          <div>
            <h1 className="title_2 middle_font">Customer Reviews</h1>
            <Reviews appName={app_name}/>
          </div>
        </>
      ):(
        <>
        ...
        </>
      )}
    </div>
  );
}

export default AppDetailsPage;