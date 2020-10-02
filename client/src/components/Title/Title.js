import React from "react";
const style = {
  fontFamily: "'Quicksand', sans-serif",
  color: "white",
  fontSize: "2.5rem",
}

function Title(props) {
  const {children, styleProps} = props;
  let h1Style = {
    ...style,
    ...styleProps
  };

  return <h1 style= {h1Style}>{children}</h1>;

}

export default Title;