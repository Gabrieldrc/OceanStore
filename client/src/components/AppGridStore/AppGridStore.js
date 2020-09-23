import React from 'react';
import style from './AppGridStyle';

function AppGridStore(props) {
  const {name, price, category, creator} = props;

  return(
    <div style={style.container}>
      <div id="app_image">
        <img src="./images/appImage.png" alt="app_image" style={style.image}/>
      </div>
      <div id="details" style={style.details}>
        <div id="app_name">{name}</div>
        <div style={style.detailsColumn}>
          <div id="app_creator">{creator}</div>
          <div id="app_price">${price}</div>
        </div>
        <div style={style.detailsColumn}>
          <div id="app_category">{category}</div>
          <div id="app_rate">stars</div>
        </div>
      </div>
    </div>
  );
}

export default AppGridStore;