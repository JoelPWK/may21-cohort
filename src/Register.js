import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

function Register() {
  return (
    <Container className="Register">
      <div className="container-fluid h-100 d-flex justify-content-center align-items-center">
        <Card>
          <Card.Title className="mt-3 mb-3 ms-1 me-1">
            Enter your registration details below:
          </Card.Title>
          <Form>
            <Form.Group
              className="mb-3 ms-1 me-1"
              controlId="formBasicUsername"
            >
              <Form.Label>Username:</Form.Label>
              <Form.Control type="text" placeholder="Enter username" />
            </Form.Group>

            <Form.Group className="mb-3 ms-1 me-1" controlId="formBasicEmail">
              <Form.Label>Email Address:</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group
              className="mb-3 ms-1 me-1"
              controlId="formBasicPassword"
            >
              <Form.Label>Password:</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group
              className="mb-3 ms-1 me-1"
              controlId="formBasicConfirmPassword"
            >
              <Form.Label>Confirm Password:</Form.Label>
              <Form.Control type="password" placeholder="Confirm Password" />
            </Form.Group>
            <div className="text-center">
              <Button
                variant="warning"
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

export default Register;
