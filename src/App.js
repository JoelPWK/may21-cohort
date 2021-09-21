import logo from './logo.svg';
import SplashPage from './splashPage.js';
import './App.css';
import React from "react";
import './style.scss';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        isHidden: true
    }
  }
  
  toggleHidden(){
    this.setState({
        isHidden: !this.state.isHidden
    })
  }

  splashTimer(){

  }
  
  render(){
    return(
    <div className="App">
      { this.state.isHidden ? <SplashPage /> : null }
      <button onClick={this.toggleHidden.bind(this)}>Hide/Show</button>  
    </div>
    )
  }
}

export default App;