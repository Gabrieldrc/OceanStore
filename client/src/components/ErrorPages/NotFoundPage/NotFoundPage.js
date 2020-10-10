import React from 'react';
import NotFoundPageStyle from './NotFoungPage.style';

function NotFountPage(props) {
  const {setError} = props;
  setError(true);
  return(
    <div style={NotFoundPageStyle.containerStyle}>
      <div>
        <h1 style={NotFoundPageStyle.titleStyle}>Lost your way?</h1>
        <p style={NotFoundPageStyle.pStyle}>
          Sorry, we can't find that page. 
          You'll find lots to explore on the home page.
        </p>
        <a style={NotFoundPageStyle.aStyle} href="/">Ocean Store Home</a>
      </div>
      <div style={NotFoundPageStyle.errorContainerStyle}>
        <h1 style={NotFoundPageStyle.errorStyle}>Error Code <b>404</b></h1>
      </div>
    </div>
  );
}

export default NotFountPage;