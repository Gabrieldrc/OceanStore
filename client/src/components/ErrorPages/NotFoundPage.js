import React from 'react';
import Title from '../Title/Title';

const containerStyle = {
  width: 'fit-content',
  textAlign: 'center',
};

const titleStyle = {
  fontSize: '3rem',
  color: 'black',
};

const pStyle = {
  fontSize: '1.5rem',
  color: 'black',
  fontWeight: '500',
};

const aStyle = {
  textDecoration: 'none',
  color: 'black',
  fontWeight: '700',
  padding: '0.5rem 1rem',
  borderRadius: '5px',
  backgroundColor: 'white',
};

const errorStyle = {
  color: 'red',
  fontWeight: '100',
  padding: '0.5rem 1rem',
};

const errorContainerStyle = {
  margin: '100px auto 0px auto',
  borderLeft: '2px solid red',
  width: 'fit-content',
};

function NotFountPage(props) {
  const {setError} = props;
  setError(true);
  return(
    <div style={containerStyle}>
      <div>
        <h1 style={titleStyle}>Lost your way?</h1>
        <p style={pStyle}>
          Sorry, we can't find that page. 
          You'll find lots to explore on the home page.
        </p>
        <a style={aStyle} href="/">Ocean Store Home</a>
      </div>
      <div style={errorContainerStyle}>
        <h1 style={errorStyle}>Error Code <b>404</b></h1>
      </div>
    </div>
  );
}

export default NotFountPage;