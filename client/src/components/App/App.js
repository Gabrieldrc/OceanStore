import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import AppStyle from './App.style.js';

import AuthService from '../../services/auth.service';

import SigninPage from '../SigninPage/SigninPage';
import Nav from '../Nav/Nav';
import Store from '../Store/Store';
import NewAppForm from '../Forms/NewAppForm/NewAppForm';
import Title from '../Title/Title';
import SignupPage from '../SignupPage/SignupPage.js';

function App() {
  const [signinStatus, setSignInStatus] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      console.log('seteó(?)');
      setCurrentUser(user);
    }
    console.log('Se ejecutó');
    console.log(user);
  }, [signinStatus]);

  return (
    <Router>
      <div style={AppStyle.App}>
        <div style={AppStyle.headerConteinerStyle}>
          <Nav currentUser={currentUser} />
        </div>
        <div style={AppStyle.bodyConteinerStyle}>
          <div style={AppStyle.bodyContentStyle}>
            <Switch>
              <Route exact path="/signup">
                <SignupPage />
              </Route>
              <Route exact path="/signin">
                <SigninPage 
                  setSignInStatus={(value) => setSignInStatus(value)}/>
              </Route>
              <Route exact path="/">
                <Store />
              </Route>
              <Route exact path="/sell">
                <div>
                  <Title>Upload an app</Title>
                  <NewAppForm />
                </div>
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
