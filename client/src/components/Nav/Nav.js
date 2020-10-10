import React from 'react';
import NavStyle from './Nav.style';

import SearchBar from './SearchBar/SearchBar';
import NavLinkItem from './NavLinkItem/NavLinkItem';
import NavMenu from './NavMenu/NavMenu';

function Nav(props) {
  const { currentUser, routes } = props;

  const printRoutesList = (routesArray) => {
    return routesArray.map((element, index) => {
      const key = "_key_";
      if (element.type === 'menu') {
        return <NavMenu
          key={index+key+element.route}
          routes={element.routes}
          label={"@"+currentUser.user_name}/>
      }
      return <NavLinkItem
        key={index+key+element.route}
        destiny={element.route}
        label={element.label}/>
    })
  };

  return(
    <div style={NavStyle.Nav} className="Nav">
      <div style={NavStyle.logo} className="logo">
        <a href="/" ><img src="/images/logo.jpg" alt="Logo" style={NavStyle.logoJpg} className="logoJpg"/></a>
      </div>
      <SearchBar />
      <div style={NavStyle.fixedGrid} className ="fixedGrid">
        {printRoutesList(routes.fixedRoutes)}
      </div>
      {currentUser ? (
        <div style={NavStyle.changeGrid} className="changeGrid">
          {printRoutesList(routes.verifiedRoutes)}
        </div>
      ):(
        <div style={NavStyle.changeGrid} className="changeGrid">
          {printRoutesList(routes.publicRoutes)}
        </div>
      )}
    </div>
  );
}


  
export default Nav;