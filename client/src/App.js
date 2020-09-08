import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';
import SignUpForm from './components/SignUpForm/SignUpForm';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/sign_up">
            <SignUpForm />
          </Route>
          <Route exact path="/">
            <h1>HOME</h1>
          </Route>
          <Route path="/login">
            <h1>Login</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
