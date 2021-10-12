import SplashPage from './splashPage.js';
import './App.css';
import React, { useState, Component, useEffect } from 'react';
import RouterPage from "./router";
import './style.scss';
import Login from "./login.js";

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

  handleChange = (data) => {
    console.log(data);
      this.setState({
        isHidden: data
      })
  }

  splashTimer(){
    if (Login.isLoggedIn == false){
      setTimeout(this.toggleHidden, 3000)
    }
  }
  
  render(){
    this.splashTimer();
    return(
      <div>
        <div className="container">
          { this.state.isHidden ? <SplashPage closeSplash={(e)=>{ this.handleChange(e) }}/> : <RouterPage/>}
        </div>
      </div>
    )
  }
}
export default App;