import React , {useState} from 'react';
import NavLinkItem from '../NavLinkItem/NavLinkItem';

function NavMenu(props) {
  const {list, title, className} = props;
  const [colorTitle, setColorTitle] = useState("white");
  const [visibility, setVisibility] = useState("hidden");
  let TitleStyle = {
    color: colorTitle,
    position: "relative",
    textAlign: "center",
    verticalAlign: "text-bottom",
    paddingTop: "0.4rem",
  };

  let SubMenuStyle = {
    display: "grid",
    position: "absolute",
    top: "45px",
    width: "auto",
    padding: "20px",
    backgroundColor: "dimgray",
    textAlign: "left",
    visibility: visibility,
  };

  function handlerMouseOver(color) {
    setColorTitle(color);
    setVisibility("visible")
  }
  
  function handlerMouseOut() {
    setColorTitle("white");
    setVisibility("hidden")
  }

  return(<div 
    key={title}
    className={className} 
    style={TitleStyle}
    onMouseOver={() => handlerMouseOver("deepskyblue")}
    onMouseOut={() => handlerMouseOut()}
    >{title}
    <div style={SubMenuStyle}>
      {list.map( obj => {
        return <NavLinkItem
            key={obj.url}
            textAlign="left"
            destiny={obj.url}
            label={obj.value}
          />;
      })}
    </div>
  </div>);
}

export default NavMenu;