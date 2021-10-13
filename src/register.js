import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import { PasswordValidation } from "./PasswordValidation";

export class Register extends Component {


  OnSubmitRegister = async (event) => {
    event.preventDefault();

    //collect form inputs - username, email, password
    var username = event.target.username.value;
    var email = event.target.email.value;
    var password = event.target.password.value;
    var confirmationPassword = event.target.confirmPassword.value;
  
    //check password strength
    //check password strength
    if (PasswordValidation(password) === false) {
      alert(
        "Password should be at least 8 characters using upper and lower case characters."
      );

      return;
    }
    //check username unique

    //check password matches confirmation password
    if (password !== confirmationPassword) {
      alert("These passwords do not match!");

      return;
    }
  
    //send registration to backend

  };

  render(){
    return (
      <Container className="Register">
        <div className="container-fluid h-100 d-flex justify-content-center align-items-center">
          <Card id="registerCard">
            <Card.Title className="mt-3 mb-3 ms-1 me-1">
              Enter your registration details below:
            </Card.Title>
            <Form onSubmit={this.OnSubmitRegister}>
              <Form.Group
                className="mb-3 ms-1 me-1"
                controlId="formBasicUsername"
              >
                <Form.Label>Username:</Form.Label>
                <Form.Control type="text" placeholder="Enter username" name="username" />
              </Form.Group>
  
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
  
              <Form.Group
                className="mb-3 ms-1 me-1"
                controlId="formBasicConfirmPassword"
              >
                <Form.Label>Confirm Password:</Form.Label>
                <Form.Control type="password" placeholder="Confirm Password" name="confirmPassword" />
              </Form.Group>
              <div className="text-center">
                <Button
                  id="submitButton"
                  type="submit"
                  className="text-center mb-3"
                  
                  
                >
                  Register
                </Button>
              </div>
            </Form>
          </Card>
        </div>
      </Container>
    );
  }
}

export default Register;
