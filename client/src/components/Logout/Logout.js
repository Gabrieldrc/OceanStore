import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import UserService from '../../services/user.service';
import { logout } from '../../redux/reducers/isLogged.reducer';
import { deleteUser } from '../../redux/reducers/currentUser.reducer';


function Logout() {
  const dispatch = useDispatch();

  useEffect(() => {
    (() => {
      UserService.logout()
      .then(response => {
        if (response) {
          dispatch(deleteUser());
          dispatch(logout());
        }
      })
      .catch(error => {
        console.log(error)
      });
    })();
  },[]);

  return (
    <div>
      <Redirect exact to="/signin" />
    </div>
  );
}

export default Logout;