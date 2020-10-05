import React , {useState} from 'react';
import NavLinkItem from '../NavLinkItem/NavLinkItem';

function NavMenu(props) {
  const {routes, label} = props;
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
    key={label} 
    style={TitleStyle}
    onMouseOver={() => handlerMouseOver("deepskyblue")}
    onMouseOut={() => handlerMouseOut()}
    >{label}
    <div style={SubMenuStyle}>
      {routes.map( (obj, index) => {
        if (obj.type === 'buttom') {
          return <NavLinkItem
            key={obj.route+index.toString()}
            textAlign="left"
            destiny={obj.route}
            label={obj.label}
            funcHandleClick={obj.func}
            type='buttom'
          />;
        } else {
          return <NavLinkItem
              key={obj.route+index.toString()}
              textAlign="left"
              destiny={obj.route}
              label={obj.label}
            />;
        }
      })}
    </div>
  </div>);
}

export default NavMenu;