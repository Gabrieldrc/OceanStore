import React, { useState } from 'react';
const axios = require('axios');

const styleForm = {
  display: "grid",
  gridTemplateColumns: "300px",
  gridTemplateRows: "auto",
  width: "fit-content",
  gridRowGap: "10px",
  color: "white",
};

const styleError = {
  color: "red",
};

const styleCheck = {
  color: "lawngreen",
};

function NewAppForm() {
  const [res, setRes] = useState({});

  function handleClick(event) {

    event.preventDefault();
    
    const url = '/server/apps/new_app';
    
    const form = document.getElementById('new_app_form');
    const formData = new FormData(form);
    axios.post(url, formData)
    .then(response => {
      setRes({
        message: response.data,
        type: 'check',
      });
    })
    .catch((error) => {
      setRes({
        message: error.response.data,
        type: 'error',
      });
    });
  }

  function labelResponse() {
    if (!res) {
      return <label>  </label>;
    }
    if (res.type === 'error') {
      return <label style={styleError}>{res.message}</label>;
    }
    return <label style={styleCheck}>{res.message}</label>;
  }

  return(
    // Nombre.
    // Precio de venta,
    // Categoría.
    // Imagen o logo.
    <div>
      <form style={styleForm} id="new_app_form" encType="multipart/form-data">
        <label> Name:</label>
        <input type="text" name="app_name"  required/>
        <label> Price:</label>
        <input type="number" name="app_price" min="0" max="100"  required/>
        <label> Category:</label>
        <input type="text" name="app_category" required/>
        <label> Image or Logo:</label>
        <input type="file" name="image" disabled/>
        <button type="submit" onClick={event => handleClick(event)}>Submit</button>
        {labelResponse()}
      </form>
    </div>
  );
}


  
export default NewAppForm;