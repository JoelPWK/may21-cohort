import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.scss";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Search from "./search";

export default class Dashboard extends Component {
  render() {
    return (
      <Container>
        <div>
          <div>
            <Card id="dashboardOptions">
              <Card.Body className="d-grid gap-2">
                <Button id="myJourneysButton" size="lg">
                  My journeys
                </Button>
                <br />
                <Button id="makeAReportButton" size="lg">
                  Make a report
                </Button>
              </Card.Body>
            </Card>
            <br />
            <Search />
          </div>
        </div>
      </Container>
    );
  }
}
