import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import AppStyle from './App.style.js';

import SigninUserPage from '../Pages/SigninUserPage/SigninUserPage';
import Nav from '../Nav/Nav';
import Store from '../Pages/Store/Store';
import NewAppForm from '../Forms/NewAppForm/NewAppForm';
import Title from '../Title/Title';
import SignupUserPage from '../Pages/SignupUserPage/SignupUserPage.js';
import AppDetailsPage from '../Pages/AppDetailsPage/AppDetailsPage.js';
import Logout from '../Logout/Logout.js';
import NotFountPage from '../ErrorPages/NotFoundPage/NotFoundPage';
import Footer from '../Footer/Footer';
import DevHomePage from '../Pages/DevHomePage/DevHomePage.js';
import DevSignupPage from '../Pages/DevSignupPage/DevSignupPage.js';


function App() {
  const [error, setError] = useState(false);

  return (
    <Router>
      <div style={AppStyle.App}>
        <div style={AppStyle.headerContainerStyle}>
          <Nav/>
        </div>
        <div style={AppStyle.setBodyStyle(error)}>
          <div style={AppStyle.setBodyContentStyle(error)}>
            <Switch>
              <Route exact path="/signup">
                <SignupUserPage />
              </Route>
              <Route exact path="/signin">
                <SigninUserPage />
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
              <Route exact path="/app/:app_name/">
                <AppDetailsPage />
              </Route>
              <Route exact path="/logout">
                <Logout />
              </Route>
              <Route exact path="/dev">
                <DevHomePage />
              </Route>
              <Route exact path="/dev/signup">
                <DevSignupPage />
              </Route>
              <Route path="*">
                <NotFountPage setError={setError} />
              </Route>
            </Switch>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
