import React from 'react';
import { Redirect, Route, useHistory } from 'react-router-dom';
import UserService from '../../../services/user.service';

function NoLoggedInRoute(props) {
  const { children, ...rest } = props;
  let history = useHistory();
  const auth = () => {
    if (UserService.getCurrentUser()) {
      return false;
    }
    return true;
  };
  return (
    <Route 
      {...rest}
      render = { () => 
        auth() ? (
          children
        ) : (
          <Redirect
            to = {{
              pathname: history.goBack()
            }}
          />
        )
      }
    />
  );
}

export default NoLoggedInRoute;