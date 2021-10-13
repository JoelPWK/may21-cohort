import React from "react";
import {Link} from "react-router-dom";
import "./style.scss";
import homeImage from "./images/home.png";
import searchImage from "./images/search.png";
import profileImage from "./images/profile.png";
import reportImage from "./images/report.png";

class Nav extends React.Component {
    constructor(props){
        super(props)
    this.state = {
        isHidden: false
    }
}
    render(){
        return(
        <div className="nav">
            <Link to="/">       <img className="nav_image" src={homeImage}      alt="Home"/>   </Link>
            <Link to="/search"> <img className="nav_image" src={searchImage}    alt="Search"/> </Link>
            <Link to="/report"> <img className="nav_image" src={reportImage}    alt="Report"/> </Link>
            <Link to="/profile"><img className="nav_image" src={profileImage}   alt="Profile"/></Link>
            <Link to="/login">      Login          </Link><p> | </p>
            <Link to="/register">   Register       </Link>
        </div>
        )
    }
}

export default Nav;
