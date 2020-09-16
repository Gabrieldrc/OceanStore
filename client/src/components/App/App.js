import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';
import RegisterPage from '../RegisterPage/RegisterPage';
import Nav from '../Nav/Nav';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="Header">
          <Nav />
        </div>
        <div className="Body">
        <Switch>
          <Route exact path="/">
            <RegisterPage />
          </Route>
          <Route exact path="/me/store">
            <h1>HOME</h1>
          </Route>
        </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
