import React , { useState } from 'react';


function NavLinkItem(props) {
  const {destiny, setClassName, label, textAlign, padding} = props;
  const [color, setColor] = useState("white");
  let LinkStyle = {
    color: color,
    textAlign: textAlign? textAlign : "center",
    verticalAlign: "text-bottom",
    paddingTop: padding? padding: "0.4rem",
    textDecoration: "none",
  };

  function setPathName(destiny) {
    const pathName = window.location.pathname;
    if (pathName.search(destiny) >= 0) {
      return "";
    }
    if (pathName === "/") {
      return destiny.slice(0);
    }
    return destiny;
  }

  function handlerMouseOver() {
    setColor("deepskyblue");
  }
  
  function handlerMouseOut() {
    setColor("white");
  }

  return(
    <a
      className={setClassName}
      href={setPathName(destiny)}
      style={LinkStyle}
      onMouseOver={() => handlerMouseOver()}
      onMouseOut={() => handlerMouseOut()}
      >{label}
    </a>
  );
}


  
export default NavLinkItem;