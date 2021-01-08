import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import UserService from '../../services/user.service';
import { logout } from '../../redux/reducers/isLogged.reducer';
import { deleteUser } from '../../redux/reducers/currentUser.reducer';


function Logout() {
  const dispatch = useDispatch();
  const [logoutDone, setLogOutStatus] = useState(undefined)

  useEffect(() => {
    (() => {
      UserService.logout()
      .then(response => {
        if (response) {
          dispatch(deleteUser());
          dispatch(logout());
          setLogOutStatus(true);
        }
      })
      .catch(error => {
        console.log(error)
      });
    })();
  },[]);

  return (
    <>
      {logoutDone ? <Redirect exact to="/signin" />: "error"}
    </>
  );
}

export default Logout;