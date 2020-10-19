import React, { useState } from 'react';
import {
  Redirect, useHistory
} from "react-router-dom";
import AuthService from '../../../services/auth.service';
import style from './SignInForm.style';

function SignInForm(props) {
  const [error, setError] = useState(' ');
  const [redirect, setRedirect] = useState(false);
  const { setSignInStatus, location } = props;
  const history = useHistory();

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
    console.log(history.location.state);
    if (redirect) {
      if (history.location.state) {
        return <Redirect to={history.location.state.referrer} />
      }
      return <Redirect to='/' />;
    }
    return(
      <div>
        <form style={style.styleForm} id="log_in_form" encType="multipart/form-data">
          <label> Username:</label>
          <input style={style.inputStyle} type="text" name="user_name" required/>
          <label> Password:</label>
          <input style={style.inputStyle} type="password" name="user_password" required/>
          <button type="submit" onClick={event => handleClick(event)}>Submit</button>
          <label style={style.styleError}>{error}</label>
        </form>
      </div>
    );
  }

  return ifRedirect();
}


  
export default SignInForm;