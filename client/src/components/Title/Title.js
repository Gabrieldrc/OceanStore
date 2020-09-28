import React from "react";
const style = {
  fontFamily: "'Oswald', sans-serif",
  color: "#14a1ea",
  fontSize: "2.5rem",
}

function Title(props) {
  const {children} = props;
  return <h1 style= {style}>{children}</h1>;

}

export default Title;