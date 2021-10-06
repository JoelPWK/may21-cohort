import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

export class Dashboard extends Component {
    render(){
        return (
            <Container className="Dashboard">
                <div className="container-fluid h-100 d-flex justify-content-center align-items-center">
                    <div>
                    <Card id="dashboardOptions">
                        <Card.Body className="d-grid gap-2">
                            <Button id="myJourneysButton" size="lg">My journeys</Button>
                            <br />
                            <Button id="makeAReportButton" size="lg">Make a report</Button>
                        </Card.Body>
                    </Card>
                    <br />
                    

                    <Card>
                        <Card.Body>
                            <Card.Title>Where are you travelling today?</Card.Title>
                            <Card.Text>This won't be this card but the reusable component.</Card.Text>
                        </Card.Body>
                    </Card>
                    </div>
                </div>
            </Container>
        )
    }
}