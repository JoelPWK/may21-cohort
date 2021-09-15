import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

function Login() {
    return (
        <Container>
            <div className="d-flex justify-content-center">
                <Card>
                    <Card.Title className="mt-3 mb-3 ms-1 me-1">Enter your email address and password below:</Card.Title>
                    <Form>
                        <Form.Group className="mb-3 ms-1 me-1" controlId="formBasicEmail">
                            <Form.Label>Email Address:</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3 ms-1 me-1" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <div className="text-center">
                            <Button variant="warning" type="submit" className="text-center mb-3">
                                Login
                            </Button>
                        </div>
                    </Form>
                </Card>
            </div>
        </Container>
    )
}

export default Login;