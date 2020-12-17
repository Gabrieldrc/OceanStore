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
  
  // Namespace
  const [navCN, setNavCN ] = useState('');
  const [menuIconCN, setMenuIconCN ] = useState('');
  const [hideMenuIconCN, setHideMenuIconCN ] = useState('');
  const [navMenuCN, setNavMenuCN ] = useState('');

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
        key={`${index}_nav_link_item`}
        className="nav_link"
        href={element.route}
        >{element.label}</a>
    })
  };

  const displayMenu = () => {
    setMenuIconCN('menu_icon_active');
    setNavCN('Nav_active');
    setNavMenuCN('nav_menu_active');
    setHideMenuIconCN('hide_menu_icon_active');
  };

  const hideMenu = () => {
    setMenuIconCN('');
    setNavCN('');
    setNavMenuCN('');
    setHideMenuIconCN('hide_menu_icon');
  };

  return(
    <div className={`Nav ${navCN}`}>
      <div className="nav_icon_container">
        <img className={`menu_icon nav_item ${menuIconCN}`}
          onClick={displayMenu}
          src="/icons/menu.icon.svg"
          alt="menu"
        />
        <img className={`nav_item ${hideMenuIconCN}`}
          onClick={hideMenu}
          src="/icons/x_menu.icon.svg"
          alt="hide"
        />
        <img className="logo_img nav_item" src="/images/logo.jpg" alt="Logo"/>
      </div>
      <div className={`nav_menu ${navMenuCN}`}>
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