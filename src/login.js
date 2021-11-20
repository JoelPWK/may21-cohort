import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.scss";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { connect } from "react-redux";
import { setLoggedInStatus, LoggedInOptions } from "./redux/actions";

export class Login extends Component {
  constructor(props){
    super(props)
    // this.state = {
    //     isLoggedIn: false
    // }
  }

  OnLogin = (event) => {
    event.preventDefault();
    //collect form inputs - email, password
    var email = event.target.email.value;
    var password = event.target.password.value;
    console.log(email);
    console.log(password);

    //check details with database

    //Set logged in state in redux
    // this.setState = {
    //   isLoggedIn: true
    // }

    //Send value to store
    this.props.dispatch(setLoggedInStatus(LoggedInOptions.LOGGED_OUT));
    this.props.storeLoggedInStatus(LoggedInOptions.LOGGED_OUT);

    console.log('status', this.props.status);
  };

  render(){
    return (
      <Container >
        <Row>
          <Col sm={1}></Col>
          <Col sm={10}>
            <Card id="loginCard">
              <Card.Title className="mt-3 mb-3 ms-1 me-1">
                Enter your email address and password below:
              </Card.Title>
              <Form onSubmit={this.OnLogin}>
                <Form.Group className="mb-3 ms-1 me-1" controlId="formBasicEmail">
                  <Form.Label>Email Address:</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" name="email" />
                </Form.Group>

                <Form.Group
                  className="mb-3 ms-1 me-1"
                  controlId="formBasicPassword"
                >
                  <Form.Label>Password:</Form.Label>
                  <Form.Control type="password" placeholder="Password" name="password" />
                </Form.Group>
                <div className="text-center">
                  <Button
                    id="loginButton"
                    type="submit"
                    className="text-center mb-3"
                  >
                    Login
                  </Button>
                </div>
              </Form>
            </Card>
          </Col>
          <Col sm={1}></Col>
        </Row>
      </Container>
    );
  }
}

//Connect component to redux and map state to props
export default connect((state)=>{
  //Set props data
  return {
    status: state.loggedIn,
  };
}, (dispatch)=>{
  //Map dispatch actions to props
  return {
    storeLoggedInStatus: (value)=>{
      dispatch(setLoggedInStatus(value));
    }
  }
})(Login);
