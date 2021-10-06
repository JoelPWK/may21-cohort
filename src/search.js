import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Dropdown from "react-bootstrap/Dropdown"
import DropdownButton from "react-bootstrap/DropdownButton"
import FloatingLabel from "react-bootstrap/FloatingLabel"
class Search extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            displayHour: "Hour",
            displayMinute: "Minute"
        // For some reason, this doesn't work. 
        }
    }
    
    render(){
        return(            
        <div> 
            <Card >
            <Card.Body>
            <Card.Title>Enter your journey details here:</Card.Title>
            <Card.Text>Insert as many details as possible to narrow your search down.</Card.Text>
            <Form>
            <Row className="g-2">
                <Col>
                    <FloatingLabel controlId="floatingInputGrid" label="From">
                        <Form.Control type="email" placeholder="Enter Starting Point" />
                    </FloatingLabel>
                </Col>
                <Col>
                    <FloatingLabel controlId="floatingInputGrid" label="To">
                        <Form.Control type="password" placeholder="Enter your Destination" />
                    </FloatingLabel>
                </Col><br/><br/><br/>
                </Row>
                    <DropdownButton 
                        className="d-inline" 
                        title={this.displayHour ? this.displayHour : "Hour"}
                        onSelect={(e) => {
                                console.log(typeof(e),e); 
                                console.log(this.displayHour);
                                this.setState({
                                    displayHour: e
                                })
                                console.log(this.displayHour)
                            }}>
                        
                        {["00","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23"].map(
                            (hour) => {
                                return (
                                    <Dropdown.Item 
                                        className="d-flex" 
                                        eventKey={hour}> 
                                        {hour} 
                                    </Dropdown.Item>
                                )
                            }
                        )}
                    </DropdownButton>   
                    <DropdownButton 
                        className="d-inline" 
                        title={this.displayMinute ? this.displayMinute : "Minute"}>
                        {["00","05","10","15","20","25","30","35","40","45","50","55"].map(
                            (minute) => {
                                return (
                                    <Dropdown.Item 
                                        className="d-flex" 
                                        eventKey={minute} > 
                                            {minute}
                                    </Dropdown.Item>
                                )
                            }
                        )}
                    </DropdownButton>
                <Col>
                
                </Col>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox"  label="Buses" />
                    <Form.Check type="checkbox" label="Coaches" />
                    <Form.Check type="checkbox" label="Trains" />
                    <Form.Check type="checkbox" label="Underground" />
                    <Form.Check type="checkbox" label="Trams" />
                </Form.Group>
                <Button variant="primary" type="submit">Search</Button>
                </Form>
                </Card.Body>
            </Card>        
        </div>
        )
    }
}

export default Search;