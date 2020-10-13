import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Title from '../Title/Title';
import AppDetailsPageStyle from './AppDetailsPage.style';
import AppDetailsService from '../../services/app_details.service';
import dataApp from './db';

function AppDetailsPage() {
  let { app_name } = useParams();
  const [appDetails, setAppDetails] = useState(null);

  useEffect(() => {
    fetchAppDetails();
  },[]);

  const fetchAppDetails = () => {
    AppDetailsService.getAppDetails(app_name)
    .then(response => {
      console.log(response.data)
      setAppDetails(response.data);
    })
    .catch(error => {
      console.log(error);
    });
  };
  console.log(appDetails);
  return(<div>
    {appDetails? (
      <div id="generalContainer" style={AppDetailsPageStyle.container}>
      <Title styleProps={AppDetailsPageStyle.title1}>{appDetails.app_name}</Title>
      <div id="resumeContainer" style={AppDetailsPageStyle.resumeContainer}>
        <div id="image" style={AppDetailsPageStyle.imageContainer}></div>
        <div id="details" style={AppDetailsPageStyle.details}>
          <div id="rate" style={AppDetailsPageStyle.row}>
            {dataApp.rate} {dataApp.votedAmount}
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
              <img src="/images/bookmarkPlus.icon.svg" alt="+" style={AppDetailsPageStyle.icon}/>
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