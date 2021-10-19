import React from "react";
import {Link} from "react-router-dom";
import * as Icon from 'react-bootstrap-icons';
import { IconContext } from "react-icons";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.scss";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logoImage from "./images/SSGLogo.png";

class OurNavbar extends React.Component {
    constructor(props){
        super(props)
    this.state = {
        isHidden: false
    }
}
    render(){
        return(
            <Navbar expand="lg" className="nav">
                <Container>
                    <Navbar.Brand href="#home"><img 
                        alt=""
                        src={logoImage}
                        width="30"
                        height="30"
                        className="d-inline-block align-top" 
                    />{' '}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" id="custom-toggler" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <IconContext.Provider value={{ className: "nav-bar-icons"}}>
                                <Link to="/" id="homeLink">       <Icon.HouseDoor id="homeIcon"/>   </Link>
                                <Link to="/search" id="searchLink"> <Icon.Search  id="searchIcon"/> </Link>
                                <Link to="/report" id="reportLink"> <Icon.ClipboardPlus id="reportIcon"/> </Link>
                                <Link to="/profile" id="profileLink"><Icon.PersonCircle  id="profileIcon"/></Link>
                            </IconContext.Provider>
                        </Nav>
                        <Nav>
                            <Link to="/login" id="loginLink">      Login          </Link>
                            <Link to="/register" id="registerLink">   Register       </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        
        )
    }
}

export default OurNavbar;
