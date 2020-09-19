import React, { useState } from 'react';
const axios = require('axios');

const styleForm = {
  display: "grid",
  gridTemplateColumns: "300px",
  gridTemplateRows: "auto",
  width: "fit-content",
  gridRowGap: "10px",
};

const styleError = {
  color: "red",
};

const styleCheck = {
  color: "lawngreen",
};

function NewAppForm() {
  const [name, setAppName] = useState('');
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState('');
  const [res, setRes] = useState({});

  function handleClick(event) {

    event.preventDefault();
    
    // if (password !== password_confirm) {
    //   setPasswordsMatch('dont match');
    //   return;
    // }

    // setPasswordsMatch('');

    // const url = '/server/users/new_user';
    // const data = {
    //   'user_name': user_name,
    //   'password': password,
    // };

    // axios.post(url, data)
    // .then(response => {
    //   setRes({
    //     message: response.data,
    //     type: 'check',
    //   });
    // })
    // .catch((error) => {
    //   setRes({
    //     message: error.response.data,
    //     type: 'error',
    //   });
    // });
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
      <form style={styleForm} id="signupForm" enctype="multipart/form-data">
        <label> Name:</label>
        <input type="text" name="app_name" onChange={event => setAppName(event.target.value)} required/>
        <label> Price:</label>
        <input type="number" name="app_price" min="0" max="100" onChange={event => setPrice(event.target.value)} required/>
        <label> Category:</label>
        <input type="text" name="category" onChange={event => setCategory(event.target.value)} required/>  
        <label> Image or Logo:</label>
        <input type="file" name="image" />
        <button type="submit" onClick={event => handleClick(event)}>Submit</button>
        {labelResponse()}
      </form>
    </div>
  );
}


  
export default NewAppForm;