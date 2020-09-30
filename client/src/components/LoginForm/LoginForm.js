import React, { useState } from 'react';
import {
  Redirect
} from "react-router-dom";
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

function LoginForm() {
  const [error, setError] = useState(' ');
  const [redirect, setRedirect] = useState(false);

  function handleClick(event) {

    event.preventDefault();
  
    const url = '/server/users/signin';
    const form = document.getElementById('log_in_form');
    const formData = new FormData(form);

    axios.post(url, formData)
    .then(response => {
      console.log(response.data);
      setRedirect(true);
    })
    .catch((error) => {
      setError(error.response.data.message);
    });

  }

  function ifRedirect() {
    if (redirect) {
      return <Redirect to='/store' />;
    }
    return(
      <div>
        <form style={styleForm} id="log_in_form" encType="multipart/form-data">
          <label> Enter your username:</label>
          <input type="text" name="user_name" required/>
          <label> Enter your password:</label>
          <input type="password" name="user_password" required/>
          <button type="submit" onClick={event => handleClick(event)}>Submit</button>
          <label style={styleError}>{error}</label>
        </form>
      </div>
    );
  }

  return ifRedirect();
}


  
export default LoginForm;