import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
// import AppStyle from './App.style.js';

import SigninUserPage from '../Pages/SigninUserPage/SigninUserPage';
import Nav from '../Nav/Nav';
import StorePage from '../Pages/StorePage/StorePage';
import HomePage from '../Pages/HomePage/HomePage';
import NewAppForm from '../Forms/NewAppForm/NewAppForm';
import Title from '../Title/Title';
import SignupUserPage from '../Pages/SignupUserPage/SignupUserPage.js';
import AppDetailsPage from '../Pages/AppDetailsPage/AppDetailsPage.js';
import Logout from '../Logout/Logout.js';
import NotFountPage from '../ErrorPages/NotFoundPage/NotFoundPage';
import Footer from '../Footer/Footer';
import DevSignupPage from '../Pages/DevSignupPage/DevSignupPage.js';
import DevSigninPage from '../Pages/DevSigninPage/DevSigninPage';


function App() {
  const [error, setError] = useState(false);
  const appErrorClassName = error? "app_body_error" : "";
  return (
    <Router>
      <>
        <Nav/>
        <div className={`app_body ${appErrorClassName}`}>
          <Switch>
            <Route exact path="/signup">
              <SignupUserPage />
            </Route>
            <Route exact path="/signin">
              <SigninUserPage />
            </Route>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/store">
              <StorePage />
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
              <Redirect to="/dev/signin" />
            </Route>
            <Route exact path="/dev/signup">
              <DevSignupPage />
            </Route>
            <Route exact path="/dev/signin">
              <DevSigninPage />
            </Route>
            <Route path="*">
              <NotFountPage setError={setError} />
            </Route>
          </Switch>
          <Route exact path={["/", "/store"]}>
            <Footer />
          </Route>
        </div>
      </>
    </Router>
  );
}

export default App;
