import React from "react";
const esmeralda = require("../assets/esmeralda.png")

class MyBrand extends React.Component{

  render() {
    return (
      <div id = "brand">
        <img id = "esmeraldaBrand" src={esmeralda} alt = ""></img>
      </div>
    );
  }
}

export default MyBrand;