import React from 'react';
import { Link } from 'react-router-dom';
import './AppGridStore.css';

function AppGridStore(props) {
  const {name, price} = props;

  return(
    <Link  className="app_store_container box_shadow" to={`/app/${name}`} replace>
      <img src="./images/appImage.png" alt="app_image" className="app_store_image"/>
      <div id="details" className="app_store_details">
        <div id="app_name" className=" app_store_columns middle_font app_grid_store_name title_2">{name}</div>
        <div className="app_store_columns">
          <div id="app_rate">stars</div>
          <div id="app_price">${price}</div>
        </div>
      </div>
    </Link>
  );
}

export default AppGridStore;