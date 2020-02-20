import React from "react";
//import ReactDOM from "react-dom";
import MenuItem from "../Atom/MenuItem";
import MyBrand from "../Atom/MyBrand";

class Navigation extends React.Component {



  render () {
    return (
      <div id = "navigationWrap">
       <MenuItem text = "shop"/>
       <MenuItem text = "our coffee"/>
       <MyBrand/>
       <MenuItem text = "our story"/>
       <MenuItem text = "contact"/>
      </div>
    );
  }

}

export default Navigation;