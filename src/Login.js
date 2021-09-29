import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

export class Login extends Component {

  OnLogin(event) {
    event.preventDefault();
    //collect form inputs - email, password
    var email = event.target.email.value;
    var password = event.target.password.value;
    console.log(email);
    console.log(password);

    //check details with database
  }

  render(){
    return (
      <Container className="Login">
        <div className="container-fluid h-100 d-flex justify-content-center align-items-center">
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
        </div>
      </Container>
    );
  }
}

export default Login;