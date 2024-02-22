import { useState } from "react";

/* eslint-disable react/prop-types */
function Flex({ children, title, color,backgroundColor }) {

  const [colorTitle , setColorTitle] = useState(color);
  const [colorBackground , setColorBackground] = useState(backgroundColor);

  const styleTitle = {
    color: colorTitle,
    paddingLeft:"10px",
    backgroundColor:colorBackground
  }
  const flexStyle = {
    display: "flex",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    backgroundColor:colorBackground,
  };
  
    return (
      <div>
        <h1 style={styleTitle}>{title}</h1>
        <div style={flexStyle}>{children}</div>
      </div>
    );
  }
  
  export default Flex;