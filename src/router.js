import React, { Component } from 'react';
import App from "./App.js"
import OurNavbar from "./nav.js"
import Home from "./home.js"
import Login from "./login.js"
import Register from "./register.js"
import Search from "./search.js"
import Profile from "./profile.js"
import Report from "./report.js"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

class RouterPage extends Component {
    render(){

        return(
          <div className="wholePage">
            <Router>
                <OurNavbar />
                <div className="container-fluid h-100 d-flex justify-content-center align-items-center">
                <Switch>
                    <Route exact path="/" component={Home}><Home /></Route>
                    <Route path="/login" >    <Login />     </Route>
                    <Route path="/profile">   <Profile/>    </Route>
                    <Route path="/register">  <Register/>   </Route>
                    <Route path="/report">    <Report />    </Route>
                    <Route path="/search">    <Search />    </Route>
                </Switch>
                </div>
            </Router>
          </div>
        )
      }
}

export default RouterPage;

