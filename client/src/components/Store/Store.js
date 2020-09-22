import React, {useState, useRef, useEffect} from "react";
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
      console.log(app);
    return <h1 key={index}>name {app.name}</h1>;
    })
  };

  return (
    <div className="Store">
      <h1>Store posta</h1>
      {renderApps(apps)}
    </div>
  );
}

export default Store;
