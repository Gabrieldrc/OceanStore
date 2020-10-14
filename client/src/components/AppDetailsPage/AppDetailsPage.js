import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AppDetails from './AppDetails/AppDetails';
import AppDetailsPageStyle from './AppDetailsPage.style';
import AppDetailsService from '../../services/app_details.service';
import RateService from '../../services/rate.service';

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

  return(<div>
    {loadStatus? (
      <div id="generalContainer" style={AppDetailsPageStyle.container}>
        <AppDetails appDetails={appDetails} rates={rates}/>
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