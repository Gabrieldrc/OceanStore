import React from 'react';
import { Redirect, Route, useHistory } from 'react-router-dom';
import UserService from '../../../services/user.service';

function UserRoute(props) {
  const { children, ...rest } = props;
  let history = useHistory();
  console.log(history)
  return (
    <Route 
      {...rest}
      render = { () => 
        UserService.auth() ? (
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

export default UserRoute;