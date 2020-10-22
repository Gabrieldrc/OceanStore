import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import NavStyle from './Nav.style';
import RoutesService from '../../services/routes.service';
import UserService from '../../services/user.service';

import SearchBar from './SearchBar/SearchBar';
import NavLinkItem from './NavLinkItem/NavLinkItem';
import NavMenu from './NavMenu/NavMenu';

const routes = RoutesService.getRoutes();

function Nav() {
  const [currentUser, setCurrentUser ] = useState(undefined);
  let islogged = useSelector(state => state.isLogged.value);

  useEffect(() => {
    (() => {
      const user = UserService.getCurrentUser();
      if (user) {
        setCurrentUser(user);
      }
    })();
  },[islogged]);

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
      {currentUser && islogged ? (
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