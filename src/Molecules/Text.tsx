import React from "react";
const LightRoast = require("../assets/LightRoast.png");

interface ITextProps {
  title?: string;
  subtitle?: string;
  description?: string;
}

class Text extends React.Component<ITextProps> {

  render () {
    return (<>
    <div id = "margin">
      <h2>{this.props.title}</h2>
      <h4>{this.props.subtitle}</h4>
      <p>{this.props.description}</p>
    </div>
    <div id = "sideImage">
      <img id = "MainRoast" src = {LightRoast} alt = ""></img>
    </div>
    </>
    );
  };
}

export default Text;