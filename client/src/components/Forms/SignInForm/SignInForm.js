import React, { useState } from 'react';
import {
  Redirect
} from "react-router-dom";
import AuthService from '../../../services/auth.service';

const styleForm = {
  display: "grid",
  gridTemplateColumns: "300px",
  gridTemplateRows: "auto",
  width: "fit-content",
  gridRowGap: "10px",
  color: "#b4b2b1",
};

const inputStyle = {
  marginBottom: "20px",
  height: "1.6rem",
};

const styleError = {
  color: "red",
};

function SignInForm(props) {
  const [error, setError] = useState(' ');
  const [redirect, setRedirect] = useState(false);
  const { setSignInStatus } = props;

  function handleClick(event) {

    event.preventDefault();

    const form = document.getElementById('log_in_form');
    const formData = new FormData(form);

    AuthService.signin(formData)
    .then(response => {
      console.log(response);
      setSignInStatus(true)
      setRedirect(true);
    })
    .catch((error) => {
      setError(error.response.data.message);
    });
  }

  function ifRedirect() {
    if (redirect) {
      return <Redirect to='/' />;
    }
    return(
      <div>
        <form style={styleForm} id="log_in_form" encType="multipart/form-data">
          <label> Username:</label>
          <input style={inputStyle} type="text" name="user_name" required/>
          <label> Password:</label>
          <input style={inputStyle} type="password" name="user_password" required/>
          <button type="submit" onClick={event => handleClick(event)}>Submit</button>
          <label style={styleError}>{error}</label>
        </form>
      </div>
    );
  }

  return ifRedirect();
}


  
export default SignInForm;