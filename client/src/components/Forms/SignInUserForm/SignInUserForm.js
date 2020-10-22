import React, { useState } from 'react';
import {
  Redirect, useHistory
} from "react-router-dom";
import { useDispatch } from 'react-redux';
import { signin } from '../../../redux/reducers/isLogged.reducer';
import { newUser } from '../../../redux/reducers/currentUser.reducer';
import UserService from '../../../services/user.service';
import style from './SignInUserForm.style';

function SignInUserForm(props) {
  const [error, setError] = useState(' ');
  const [redirect, setRedirect] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();


  function handleClick(event) {

    event.preventDefault();

    const form = document.getElementById('log_in_form');
    const formData = new FormData(form);

    UserService.signin(formData)
    .then(response => {
      dispatch(signin());
      dispatch(newUser())
      setRedirect(true);
    })
    .catch((error) => {
      setError(error.response.data.message);
    });
  }

  function ifRedirect() {
    if (redirect) {
      if (history.location.state) {
        return <Redirect to={history.location.state.referrer} />
      }
      return <Redirect to='/' />;
    }
    return(
      <div>
        <form style={style.styleForm} id="log_in_form">
          <label> Username:</label>
          <input style={style.inputStyle} type="text" name="user_name" required/>
          <label> Password:</label>
          <input style={style.inputStyle} type="password" name="password" required/>
          <button type="submit" onClick={event => handleClick(event)}>Submit</button>
          <label style={style.styleError}>{error}</label>
        </form>
      </div>
    );
  }

  return ifRedirect();
}


  
export default SignInUserForm;