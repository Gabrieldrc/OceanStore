import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import style from './AppDetailsPage.style';
import AppDetailsService from '../../../services/app_details.service';
import AppService from '../../../services/app.service';
import RateService from '../../../services/rate.service';
import dataApp from './db';

import Title from '../../Title/Title';
import AppDetails from '../../AppDetails/AppDetails';
import Reviews from '../../Reviews/Reviews';

function AppDetailsPage() {
  let { app_name } = useParams();
  const [app, setApp] = useState(null);
  const [appDetails, setAppDetails] = useState(null);
  const [rates, setAppRates] = useState(null);
  const [loadStatus, setLoadCompleted] = useState(false);

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

  return(<div>
    {loadStatus? (
      <div id="generalContainer" style={style.container}>
        <Title styleProps={style.title1}>{appDetails.app_name}</Title>
        <AppDetails appDetails={app} rates={rates}/>
        <div id="About">
          <Title styleProps={style.title2}>ABOUT THIS APP</Title>
          <p style={style.p}>{dataApp.aboutThisGame}</p>
        </div>
        <Title styleProps={style.title2}>Customer Reviews</Title>
        <Reviews appName={app_name}/>
      </div>
    ):(
      <div id="generalContainer" style={style.container}>
      ...
      </div>
    )}
  </div>
  );
}

export default AppDetailsPage;