import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import DevRoute from '../Middlewares/DevRoute/DevRoute';
import UserRoute from '../Middlewares/UserRoute/UserRoute';
import NoLoggedInRoute from '../Middlewares/NoLoggedInRoute/NoLoggedInRoute';

import SigninUserPage from '../Pages/SigninUserPage/SigninUserPage';
import Nav from '../Nav/Nav';
import HomeStorePage from '../Pages/HomeStorePage/HomeStorePage';
import NewAppForm from '../Forms/NewAppForm/NewAppForm';
import Title from '../Title/Title';
import SignupUserPage from '../Pages/SignupUserPage/SignupUserPage.js';
import AppDetailsPage from '../Pages/AppDetailsPage/AppDetailsPage.js';
import Logout from '../Logout/Logout.js';
import NotFountPage from '../ErrorPages/NotFoundPage/NotFoundPage';
import Footer from '../Footer/Footer';
import DevHomePage from '../Pages/DevHomePage/DevHomePage.js';
import DevSignupPage from '../Pages/DevSignupPage/DevSignupPage.js';
import DevSigninPage from '../Pages/DevSigninPage/DevSigninPage';


function App() {
  const [error, setError] = useState(false);
  const appErrorClassName = error? "app_body_error" : "";
  return (
    <Router>
      <div className="app_container">
        <div className="app_header">
          <Nav/>
        </div>
        <div className={`app_body ${appErrorClassName}`}>
          <Switch>
            <NoLoggedInRoute exact path="/signup">
              <SignupUserPage />
            </NoLoggedInRoute>
            <NoLoggedInRoute exact path="/signin">
              <SigninUserPage />
            </NoLoggedInRoute>
            <Route exact path="/">
              <HomeStorePage />
            </Route>
            <DevRoute path="/dev/new_app">
              <div>
                <Title>Upload an app</Title>
                <NewAppForm />
              </div>
            </DevRoute>
            <Route exact path="/app/:app_name/">
              <AppDetailsPage />
            </Route>
            <Route exact path="/logout">
              <Logout />
            </Route>
            <Route exact path="/dev">
              <DevHomePage />
            </Route>
            <NoLoggedInRoute exact path="/dev/signup">
              <DevSignupPage />
            </NoLoggedInRoute>
            <NoLoggedInRoute exact path="/dev/signin">
              <DevSigninPage />
            </NoLoggedInRoute>
            <DevRoute path="/abc">
              <div>DEVELOPERSSSSSSSSSSSS</div>
            </DevRoute>
            <Route path="*">
              <NotFountPage setError={setError} />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
