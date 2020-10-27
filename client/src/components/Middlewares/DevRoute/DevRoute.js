import React from 'react';
import { Redirect, Route, useHistory } from 'react-router-dom';
import DevService from '../../../services/dev.service';

function DevRoute(props) {
  const { children, ...rest } = props;
  let history = useHistory();
  console.log(history)
  return (
    <Route 
      {...rest}
      render = { () => 
        DevService.auth() ? (
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

export default DevRoute;