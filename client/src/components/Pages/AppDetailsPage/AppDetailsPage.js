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

  const displayAndHideText = () => {
    if (direction === "up") {
      setDirection("down");
      setShowBoxHidedClass("box_part_displayed");
      return;
    }
    setDirection("up");
    setShowBoxHidedClass("");
    return;
  };

  {console.log(appDetails)}
  {console.log(app)}
  return(
    <div className="app_page">
      {loadStatus? (
        <>
          <h1 className="title_1 big_font">{appDetails.app_name}</h1>
          <div className="light_container app_page_child resume">
            <div className="app_image"></div>
            <div className="details">
              <div className="block text_resume">
                Red hair crookshanks bludger Marauder’s Map Prongs sunshine daisies butter mellow Ludo Bagman. Beaters gobbledegook N.E.W.T., Honeydukes eriseD inferi Wormtail. Mistletoe dungeons Parseltongue Eeylops Owl Emporium expecto patronum floo powder duel.
              </div>
              <div>
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
              <div className="buttom_container">
                <WishlistButtom key="wishlistButtom"/>
                <AddCarButtom/>
              </div>
            </div>
          </div>
          <div className="dark_container app_page_child">
            <h1 className="title_2 middle_font display_hide_buttom" onClick={displayAndHideText}>
              About this app
              <div className={`arrow_displaybox ${direction}`}></div>
            </h1>
            <p className={`box_part ${showBoxHidedClass}`}>
              {dataApp.aboutThisGame}
            </p>
          </div>
          <div className=" reviews_container light_container app_page_child">
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