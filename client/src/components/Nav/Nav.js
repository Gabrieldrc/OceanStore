import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './Nav.css';
import RoutesService from '../../services/routes.service';
import UserService from '../../services/user.service';

import SearchBar from './SearchBar/SearchBar';
// import NavMenu from './NavMenu/NavMenu';

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
      if (element.type === 'menu') {
        return <>hola</>
      }
      return <a
        className="nav_link"
        href={element.route}
        >{element.label}</a>
    })
  };

  return(
    <div className="Nav">
      <div className="nav_icon_container">
        <img className="menu_icon menu_icon_active nav_item" src="/icons/menu.icon.svg" alt="menu"/>
        <img className="logo_img nav_item" src="/images/logo.jpg" alt="Logo"/>
      </div>
      <div className="nav_menu nav_menu_active">
        <SearchBar />
        <div className="change_link_container">
          {currentUser && islogged ? (
              printRoutesList(routes.verifiedRoutes)
          ):(
              printRoutesList(routes.publicRoutes)
          )}
        </div>
        <div className ="fixed_link_container">
          {printRoutesList(routes.fixedRoutes)}
        </div>
      </div>
    </div>
  );
}


  
export default Nav;