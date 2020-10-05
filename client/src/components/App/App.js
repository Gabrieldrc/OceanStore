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
    console.log(signinStatus);
    console.log('Ajá');
    if (user) {
      setCurrentUser(user);
    }
  }, [signinStatus]);

  const navRoutes = {
    publicRoutes: [
      {label: 'Sign Up', type: 'link', route: '/signup'},
      {label: 'Sign In', type: 'link', route: '/signin'},
      {label: 'Sell',    type: 'link', route: '/sell'},
    ],
    fixedRoutes: [
      {label: 'Categories', type: 'link', route: '/categories'},
      {label: 'Gift Cards', type: 'link', route: '/gift-cards'},
    ],
    verifiedRoutes: [
      {label: 'Wishlist', type: 'link', route: '/wishlist'},
      {label: 'Car',      type: 'link', route: '/car'},
      {label: 'Car',      type: 'menu', routes: [
        {label: 'Settings', type: 'link' ,route: '/settings'},
        {label: 'Sell',     type: 'link' ,route: '/sell'},
        {label: 'My Apps',  type: 'link' ,route: '/apps'},
        {label: 'Log Out',  type: 'buttom' ,route: '/signin', func() {
          AuthService.logout()
          .then(response => {
            if (response) {
              setSignInStatus(false);
            }
          })
          .catch(error => {
            console.log(error)
          });
        }},
      ]},
    ]
  };

  return (
    <Router>
      <div style={AppStyle.App}>
        <div style={AppStyle.headerConteinerStyle}>
          <Nav routes={navRoutes} currentUser={currentUser} />
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
