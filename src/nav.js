import React from "react";
import {Link} from "react-router-dom";
import "./style.scss";
class Nav extends React.Component {
    constructor(props){
        super(props)
    this.state = {
        isHidden: false
    }
}

    render(){
        return(
        <div> 
            <ul>
                <li><Link to="/home">       Home Page           </Link> </li>
                <li><Link to="/search">     Search Page         </Link> </li>
                <li><Link to="/login">      Login Page          </Link> </li>
                <li><Link to="/register">   Register Page       </Link> </li>
                <li><Link to="/profile">    User Profile Page   </Link> </li>
                <li><Link to="/report">     Report Page         </Link> </li>
            </ul>
        </div>
        )
    }
}

export default Nav;