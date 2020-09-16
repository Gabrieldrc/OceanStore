import React , { useState } from 'react';
import {
  Link,
} from 'react-router-dom';


function NavLink(props) {
  const {destiny, setClassName, label} = props;
  const [color, setColor] = useState("white");
  let LinkStyle = {
    color: color,
    textAlign: "center",
    verticalAlign: "text-bottom",
    paddingTop: "0.4rem",
    textDecoration: "none",
  };

  function setPathName(destiny) {
    const pathName = window.location.pathname;
    if (pathName === "/" || pathName.search(destiny) < 0 ) {
      return destiny;
    } 
    return pathName+destiny;
  }

  function handlerMouseOver() {
    setColor("deepskyblue");
  }
  
  function handlerMouseOut() {
    setColor("white");
  }

  return(
    <Link 
      className={setClassName}
      to={setPathName(destiny)}
      style={LinkStyle}
      onMouseOver={() => handlerMouseOver()}
      onMouseOut={() => handlerMouseOut()}
      >{label}
    </Link>
  );
}


  
export default NavLink;