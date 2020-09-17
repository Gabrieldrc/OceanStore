import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';
import RegisterPage from '../RegisterPage/RegisterPage';
import Nav from '../Nav/Nav';

const headerConteinerStyle = {
  gridArea: "header",
  minHeight: "10vh",
  backgroundColor: "black",
};

const bodyConteinerStyle = {
  gridArea: "body",
  minHeight: "90vh",
  backgroundColor: "white",
};

const bodyContentStyle = {
  maxWidth: "1600px",
  margin: "auto",
};

function App() {
  return (
    <Router>
      <div className="App">
        <div style={headerConteinerStyle}>
          <Nav />
        </div>
        <div style={bodyConteinerStyle}>
          <div style={bodyContentStyle}>
            <Switch>
              <Route exact path="/">
                <RegisterPage />
              </Route>
              <Route exact path="/store">
                <h1>Store</h1>
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
