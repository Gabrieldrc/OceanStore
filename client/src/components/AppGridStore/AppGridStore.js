import React from 'react';
import style from './AppGridStyle';

function AppGridStore(props) {
  const {name, price} = props;

  return(
    <div style={style.container}>
      <div id="app_image" style={style.imageContainer}>
        <img src="./images/appImage.png" alt="app_image" style={style.image}/>
      </div>
      <div id="details" style={style.details}>
        <div id="app_name" style={style.name}>{name}</div>
        <div style={style.detailsColumn}>
          <div id="app_rate">stars</div>
          <div id="app_price">${price}</div>
        </div>
      </div>
    </div>
  );
}

export default AppGridStore;