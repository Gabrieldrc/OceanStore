import React, { useState } from 'react';
import AppService from '../../../services/app.service';

function NewAppForm() {
  const [res, setRes] = useState({});

  function handleClick(event) {

    event.preventDefault();
    
    const form = document.getElementById('new_app_form');
    const formData = new FormData(form);

    AppService.createNewApp(formData)
    .then(response => {
      setRes({
        message: response.data.message,
        type: 'check',
      });
    })
    .catch((error) => {
      setRes({
        message: error.response.data.message,
        type: 'error',
      });
    });
  }

  function labelResponse() {
    if (!res) {
      return <label>  </label>;
    }
    if (res.type === 'error') {
      return <label className="styleError">{res.message}</label>;
    }
    return <label className="styleCheck">{res.message}</label>;
  }

  return(
    // Nombre.
    // Precio de venta,
    // Categoría.
    // Imagen o logo.
    <>
      <form className="form" id="new_app_form" encType="multipart/form-data">
        <label> Name
          <input className="inputStyle" type="text" name="app_name"  required/>
        </label>
        <label> Price
          <input className="inputStyle" type="number" name="app_price" min="0" max="100"  required/>
        </label>
        <label> Category
          <input className="inputStyle" type="text" name="app_category" required/>
        </label>
        <label> Image or Logo
          <input className="inputStyle" type="file" name="image" disabled/>
        </label>
        <button className="primary_color_bg" type="submit" onClick={event => handleClick(event)}>Submit</button>
      </form>
      {labelResponse()}
    </>
  );
}


  
export default NewAppForm;