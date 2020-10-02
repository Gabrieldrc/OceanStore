import React, { useEffect} from 'react';
import NavStyle from './Nav.style';

import AuthService from '../../services/auth.service';

import SearchBar from './SearchBar/SearchBar';
import NavLinkItem from './NavLinkItem/NavLinkItem';
import NavMenu from './NavMenu/NavMenu';

const fixedRoutes = [
  {label: 'Categories', route: '/categories'},
  {label: 'Gift Cards', route: '/gift-cards'},
];

const verifiedRoutes = [
  {label: 'Wishlist', route: '/wishlist'},
  {label: 'Car',      route: '/car'},
  {label: 'Car',      routes: [
    {label: "Settings", route: "/settings"},
    {label: "Sell",     route: "/sell"},
    {label: "My Apps",  route: "/apps"},
    {label: "Log Out",  route: "/signin", func: AuthService.logout},
  ]},
];

const publicRoutes = [
  {label: 'Sign Up', route: '/signup'},
  {label: 'Sign In',      route: '/signin'},
  {label: 'Sell',      route: '/sell'},
];

function Nav(props) {
  
  const { currentUser } = props;

  useEffect(() => {
    if (typeof currentUser !== 'undefined') {
      console.log('seteó(?)');
    }
  }, [currentUser]);

  const printRoutesList = (routesArray) => {
    return routesArray.map((element, index) => {
      const key = "_key_";
      if (element.routes) {
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
        <a href="/" ><img src="./images/logo.jpg" alt="Logo" style={NavStyle.logoJpg} className="logoJpg"/></a>
      </div>
      <SearchBar />
      <div style={NavStyle.fixedGrid} className ="fixedGrid">
        {printRoutesList(fixedRoutes)}
      </div>
      {currentUser ? (
        <div style={NavStyle.changeGrid} className="changeGrid">
          {printRoutesList(verifiedRoutes)}
        </div>
      ):(
        <div style={NavStyle.changeGrid} className="changeGrid">
          {printRoutesList(publicRoutes)}
        </div>
      )}
    </div>
  );
}


  
export default Nav;