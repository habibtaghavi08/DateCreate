import React, {Component} from "react";
import Jumbotron from "../components/Jumbotron";
//import API from "../utils/API";
import {Col, Row, Container} from "../components/Grid";
import {CompletedBtn, PlannedDateBtn, SaveCompletedBtn, SavePlannedDateBtn, ShuffleBtn} from "../components/Form";
import "./css/results.css"
//import Form from 'react-bootstrap/Form';


class Results extends Component {





    render() {
        return (
            <Container fluid className="results-container">
                <Row>
                    <Col size="md-10">
                        <Jumbotron>
                            <p className="jumboTxt"> Your Selected Date Details </p>
                        </Jumbotron>
                    </Col>
                    <Col size="md-2 sm-12">
                        <Jumbotron>
                            <h4 className="manTxt">Management of your Dates</h4>
                        </Jumbotron>
                    </Col>
                </Row>
                <Row>

                    <Col size="md-5">
                        <div className="resturaunt-container">
                            <h1>Resturaunt Selection:</h1>
                            <h3 className="rest-budget">Date Budget: </h3>
                            <h3 className="rest-name">Resturaunt Name: </h3>
                            <h3 className="rest-type">Cuisine Type: </h3>
                            <h3 className="rest-rating">Rating: </h3>
                            <h3 className="rest-pic"></h3>
                            <h3 className="rest-location">Location: </h3>
                            <h3 className="rest-reviews"></h3>
                        </div>
                    </Col>
                    <Col size="md-5">
                        <div className="activity-container">
                            <h1>Activity Selection:</h1>
                            <h3 className="act-budget">Activity Budget: </h3>
                            <h3 className="act-name">Name: </h3>
                            <h3 className="act-type">Type: </h3>
                            <h3 className="act-rating">Rating: </h3>
                            <h3 className="act-pic"></h3>
                            <h3 className="act-location">Location: </h3>
                            <h3 className="act-reviews"></h3>
                        </div>
                    </Col>
                    <Col size="md-2">
                        <CompletedBtn

                            onClick={this.handleFormSubmit}
                        >
                            Completed Dates
                        </CompletedBtn>
                        <PlannedDateBtn

                            onClick={this.handleFormSubmit}
                        >
                            Planned Dates
                        </PlannedDateBtn>
                    </Col>
                </Row>
                <Row>
                    <Col size="sm-8">
                        <div className="dbinterface">
                            <SavePlannedDateBtn>
                                Save To My Favorites!
                            </SavePlannedDateBtn>
                            <SaveCompletedBtn>
                                I'm Going on This Date!
                            </SaveCompletedBtn>
                            <ShuffleBtn>
                                Show Me A Different Date
                            </ShuffleBtn>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}



export default Results;