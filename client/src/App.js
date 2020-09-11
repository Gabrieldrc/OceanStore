import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';
import RegisterPage from './components/RegisterPage/RegisterPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <RegisterPage />
          </Route>
          <Route exact path="/home">
            <h1>HOME</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
