import SplashPage from './splashPage.js';
import './App.css';
import React from "react";
import './style.scss';
import Home from "./home.js"
import Nav from "./nav.js"
import Login from "./login.js"
import Register from "./register.js"
import Search from "./search.js"
import Profile from "./profile.js"
import Report from "./report.js"
import {HashRouter as Router, Switch, Route, Link} from "react-router-dom"

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
    <Router>
      <Switch>
      <Nav />
        <Route path="/home" >     <Home />      </Route>
        <Route path="/login" >    <Login />     </Route>
        <Route path="/register">  <Register/>   </Route>
        <Route path="/search">    <Search />    </Route>
        <Route path="/profile">   <Profile/>    </Route>
        <Route path="/report">    <Report />    </Route>
      </Switch>
    </Router>  
        { this.state.isHidden ? <SplashPage /> : null }
        <button onClick={this.toggleHidden.bind(this)}>Hide/Show</button>
      </div>
    )
  }
}
export default App;