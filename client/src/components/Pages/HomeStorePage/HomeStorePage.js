import React, {useState, useEffect} from "react";
import AppGridStore from '../../AppGridStore/AppGridStore';
import Title from "../../Title/Title";
import AppService from '../../../services/app.service';

function Store() {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = () => {
    AppService.getAllApps()
    .then(response => {
      setApps(response.data);
    })
    .catch(error => {
      console.log(error);
    })
  }

  const renderApps = (apps) => {
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
