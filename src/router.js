import React, { Component } from 'react';
import Nav from "./nav.js"
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
          <div>
            <Router>
                <Nav />
                <Switch>
                    <Route exact path="/" component={Home}>Home</Route>
                    <Route path="/login" >    <Login />     </Route>
                    <Route path="/profile">   <Profile/>    </Route>
                    <Route path="/register">  <Register/>   </Route>
                    <Route path="/report">    <Report />    </Route>
                    <Route path="/search">    <Search />    </Route>
                </Switch>
            </Router>
          </div>
        )
      }
}

export default RouterPage;

