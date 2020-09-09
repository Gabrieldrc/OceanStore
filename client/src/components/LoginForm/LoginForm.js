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
  const [user_name, setUserName] = useState('');
  const [password, setpassword] = useState('');
  const [error, setError] = useState(' ');
  const [redirect, setRedirect] = useState(false);

  function handleClick(event) {

    event.preventDefault();
  
    const url = '/server/users/login';
    const data = {
      'user_name': user_name,
      'password': password,
    };

    axios.post(url, data)
    .then(response => {
      console.log(response.data);
      setRedirect(true);
    })
    .catch((error) => {
      setError(error.response.data);
    });

  }

  function ifRedirect() {
    if (redirect) {
      setRedirect(false);
      return <Redirect to='/login' />;
    }
    return(
      <div>
        <form style={styleForm} id="registerForm">
          <label> Enter your username: {user_name}</label>
          <input type="text" name="user_name" onChange={event => setUserName(event.target.value)} required/>
          <label> Enter your password: {password}</label>
          <input type="password" name="password" onChange={event => setpassword(event.target.value)} required/>
          <button type="submit" onClick={event => handleClick(event)}>Submit</button>
          <label style={styleError}>{error}</label>
        </form>
      </div>
    );
  }

  return ifRedirect();
}


  
export default LoginForm;