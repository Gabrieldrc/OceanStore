import React from 'react';
import { Link } from 'react-router-dom';
import './AppGridStore.css';

function AppGridStore(props) {
  const {name, price} = props;

  return(
    <Link  className="app_grid_store_container" to={`/app/${name}`} replace>
      <div id="app_image" className="app_grid_store_image_container">
        <img src="./images/appImage.png" alt="app_image" className="app_grid_store_image"/>
      </div>
      <div id="details" className="app_grid_store_details">
        <div id="app_name" className="app_grid_store_name">{name}</div>
        <div className="app_grid_store_columns">
          <div id="app_rate">stars</div>
          <div id="app_price">${price}</div>
        </div>
      </div>
    </Link>
  );
}

export default AppGridStore;