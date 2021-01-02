import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import SigninUserPage from '../Pages/SigninUserPage/SigninUserPage';
import Nav from '../Nav/Nav';
import StorePage from '../Pages/StorePage/StorePage';
import HomePage from '../Pages/HomePage/HomePage';
import NewAppForm from '../Forms/NewAppForm/NewAppForm';
import SignupUserPage from '../Pages/SignupUserPage/SignupUserPage.js';
import AppDetailsPage from '../Pages/AppDetailsPage/AppDetailsPage.js';
import Logout from '../Logout/Logout.js';
import NotFountPage from '../ErrorPages/NotFoundPage/NotFoundPage';
import Footer from '../Footer/Footer';
import DevSignupPage from '../Pages/DevSignupPage/DevSignupPage.js';
import DevSigninPage from '../Pages/DevSigninPage/DevSigninPage';
import DevDashboard from '../Pages/DevDashboardPage/DevDashboardPage';
import DevNewAppPage from '../Pages/DevNewAppPage/DevNewAppPage';


function App() {
  return (
    <Router>
      <>
        <Nav/>
        <div className="app_body">
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/signup">
              <SignupUserPage />
            </Route>
            <Route exact path="/signin">
              <SigninUserPage />
            </Route>
            <Route exact path="/store">
              <StorePage />
            </Route>
            <Route exact path="/app/:app_name/">
              <AppDetailsPage />
            </Route>
            <Route exact path="/dev/apps/new_app">
              <DevNewAppPage />
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
            <Route exact path="/dev/dashboard">
              <DevDashboard />
            </Route>
            <Route path="*">
              <NotFountPage />
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
