import React from 'react';
import { useParams } from 'react-router-dom';
import Title from '../Title/Title';
import AppDetailsPageStyle from './AppDetailsPage.style';
import dataApp from './db';

function AppDetailsPage(props) {
  let { id } = useParams();

  return(
    <div id="generalContainer" style={AppDetailsPageStyle.container}>
      <Title styleProps={AppDetailsPageStyle.title1}>{dataApp.name}</Title>
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
            <a href="" style={AppDetailsPageStyle.awButtoms}>
              <img src="./images/bookmarkPlus.icon.svg" alt="+"/>
              Add to wish list
            </a>
            <a href="" style={AppDetailsPageStyle.acButtoms}>
              Add to car
            </a>
          </div>
        </div>
      </div>
      <Title styleProps={AppDetailsPageStyle.title2}>ABOUT THIS APP</Title>
      <p style={AppDetailsPageStyle.p}>{dataApp.aboutThisGame}</p>
    </div>
  );
}

export default AppDetailsPage;