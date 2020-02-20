import React  from 'react';
import "./App.css";
import Text from "./Molecules/Text";
import Navigation from "./Molecules/Navigation";
import CSSTransitionGroup from "react-addons-css-transition-group";
//import TransitionGroup from "react-addons-transition-group";
const logo = require('./assets/Emerald.png');


//type visibility  = { visible: boolean; }


class App extends React.Component/* <visibility> */{
  
  /* constructor (props : any) {
    super(props);
    this.state = { visible: true};
    this.handleLoad = this.handleLoad.bind(this);
  } 

  handleLoad () {
    this.setState({ visible: !this.state.visible });
  } */

  render () {
    return (
      <>
        <CSSTransitionGroup transitionName = "try-out">
        <div id = "overDiv" >
          <img id = 'emerald' src ={logo} alt = ""></img>
        </div>
        </CSSTransitionGroup>
        <div id = "underDiv">
          <div id = "background">
          <Text 
          title = "We love coffee" 
          subtitle = "chapter 02"
          description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nam placerat ultricies quam sit amet varius. Duis venenatis viverra leo, vitae tristique enim. "
            ></Text>
          </div>
        </div> 
        <Navigation/>       
      </>
    );
  }
}

export default App;

