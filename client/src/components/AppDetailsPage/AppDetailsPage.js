import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Title from '../Title/Title';
import AppDetailsPageStyle from './AppDetailsPage.style';
import AppDetailsService from '../../services/app_details.service';
import RateService from '../../services/rate.service';
import dataApp from './db';

function AppDetailsPage() {
  let { app_name } = useParams();
  const [appDetails, setAppDetails] = useState(null);
  const [rates, setAppRates] = useState(null);
  const [loadStatus, setLoadCompleted] = useState(false);

  useEffect(() => {
    fetchAppDetails();
  },[]);

  const fetchAppDetails = async () => {
    try {
      const appDetailsResponse = await AppDetailsService.getAppDetails(app_name);
      const rateResponse = await RateService.getAppRates(app_name);
      setAppDetails(appDetailsResponse.data);
      setAppRates(rateResponse.data);
      setLoadCompleted(true);
    } catch (error) {
      console.log(error); 
    }
  };

  const rateMinComponent = () => {
    const starFill = <img src="/icons/starFill.icon.svg" alt="star" style={AppDetailsPageStyle.icon}/>;
    const starHalfFill = <img src="/icons/starHalfFill.icon.svg" alt="star" style={AppDetailsPageStyle.icon}/>;
    const starEmpty = <img src="/icons/starEmpty.icon.svg" alt="star" style={AppDetailsPageStyle.icon}/>;
    const av = 0;
    let stars = [];
    for (let index = 1; index <= 5; index++) {
      if (index > av) {
        stars.push(starEmpty);
      } else {
        stars.push(starFill);
      }
    }
    return (
      <div style={AppDetailsPageStyle.rateContainer}>
        {stars.map(star => star)} {userRated()}
      </div>
    );
  };

  const userRated = () => {
    const personIcon = <img src="/icons/person.icon.svg" alt="star" style={AppDetailsPageStyle.icon}/>;
    return (
      <div style={AppDetailsPageStyle.rateContainer}>
        {rates.count.toString()} {personIcon}
      </div>
    );
  };

  return(<div>
    {loadStatus? (
      <div id="generalContainer" style={AppDetailsPageStyle.container}>
      <Title styleProps={AppDetailsPageStyle.title1}>{appDetails.app_name}</Title>
      <div id="resumeContainer" style={AppDetailsPageStyle.resumeContainer}>
        <div id="image" style={AppDetailsPageStyle.imageContainer}></div>
        <div id="details" style={AppDetailsPageStyle.details}>
          <div id="rate" style={AppDetailsPageStyle.row}>
            {rateMinComponent()}
          </div>
          <div id="developer" style={AppDetailsPageStyle.row}>
            {dataApp.developer}
          </div>
          <div id="categories" style={AppDetailsPageStyle.row}>
            {dataApp.categories.map(category => {
              return '<c>'+category+'</c> '
            })}
          </div>
          <div id="buttoms" style={AppDetailsPageStyle.buttomsContainer}>
            <a href="/dont_know" style={AppDetailsPageStyle.awButtoms}>
              <img src="/icons/bookmarkPlus.icon.svg" alt="+" style={AppDetailsPageStyle.icon}/>
              Add to wish list
            </a>
            <a href="/dont_know" style={AppDetailsPageStyle.acButtoms}>
              Add to car
            </a>
          </div>
        </div>
      </div>
      <Title styleProps={AppDetailsPageStyle.title2}>ABOUT THIS APP</Title>
      <p style={AppDetailsPageStyle.p}>{dataApp.aboutThisGame}</p>
    </div>
    ):(
      <div id="generalContainer" style={AppDetailsPageStyle.container}>
      ...
      </div>
    )}
  </div>
  );
}

export default AppDetailsPage;