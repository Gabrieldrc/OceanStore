import React, {useState, useRef, useEffect} from "react";
import AppGridStore from '../AppGridStore/AppGridStore';
import Title from "../Title/Title";
const axios = require('axios');

const fadeTime = 10000 // 10 sec 

function Store() {
  // our apps in what we can push at any time
  const [apps, setApps] = useState([]);
  // our updateTimer that will change every 10 sec if array have items
  const [updateTimer, setUpdateTimer] = useState(Date.now())
  // reference to timer
  const updateTimerRef = useRef(null)

  // here we start timer if it was mot started yet
  useEffect(() => {
    if (updateTimerRef.current === null) {
      startTimer()
    }
  }, [apps])

  // here we will update first message out of array (as it was already seen)
  useEffect(() => {
    updateTimerRef.current = null
    fetchData()
  }, [updateTimer])

  function startTimer() {
    updateTimerRef.current = setTimeout(() => {
      setUpdateTimer(Date.now)
    }, fadeTime )
  }

  function fetchData() {
    axios.get('/server/apps/store')
    .then(response => {
      setApps(response.data);
    })
    .catch(error => {
      console.log(error);
    })
  }

  function renderApps(apps) {
    if (apps.lenght === 0) {

      return <h1>No apps yet</h1>;

    }

    return apps.map((app, index) => {
      /*
        name: "pepeApp3"
        price: 59
        category: "Aventure"
        creator: "none"
        createdAt: "2020-09-22T16:39:18.000Z"
        updatedAt: "2020-09-22T16:39:18.000Z"
      */
      return <AppGridStore
        key={index}
        name={app.name}
        price={app.price}
        creator={app.creator}
        category={app.category}
        />;

    })
    
  };
  const styleContainer = {
    display: "block",
    height: "auto",
  };

  return (
    <div className="Store">
      <Title>Store posta</Title>
      <div style={styleContainer}>
        {renderApps(apps)}
      </div>
    </div>
  );

}

export default Store;
