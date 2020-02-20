import React from "react";



interface IMenuProps
{
  text: string;
}

class MenuItem extends React.Component<IMenuProps> {


  render () {
    
    return (
      <div id = "itemWrap">
        <button id = "menu-button">
        {this.props.text}
        </button>
      </div>
    );
    
  }
}

export default MenuItem;