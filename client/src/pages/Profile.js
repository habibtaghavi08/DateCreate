import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import { render } from "react-dom";
import Jumbotron from "../components/Jumbotron";
import { ProfileBtn, CompletedBtn, PlannedDateBtn } from "../components/Form";

class Profile extends Component {

    componentDidMount() {

    }

    handleProfileClk = () => {
        this.props.history.push('./profile')
    };
    handleCompClk = () => {
        this.props.history.push('./completed')
    };
    handlePlanClk = () => {
        this.props.history.push('./planned')
    };


    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-10">
                        <Jumbotron>
                            <p className="jumboTxt">User's Profile Page</p></Jumbotron>

                    </Col>
                    <Col size="md-2 sm-12">
                        <Jumbotron>
                            <h4 className="manTxt">Management of your Dates</h4></Jumbotron>

                    </Col>
                </Row>
                <Row>
                    <Col size="md-3" >
                    </Col>
                    <Col size="md-4">
                        <form className="form-1">
                            <div>
                                <h4>User Name</h4></div>
                        </form>
                    </Col>
                    <Col size="md-3" >
                    </Col>
                    <Col size="md-2">
                        <ProfileBtn
                            onClick={this.handleProfileClk}>Profile</ProfileBtn>

                    </Col>

                </Row>
                <Row>
                    <Col size="md-3" >
                    </Col>
                    <Col size="md-4">
                        <form  className="form-1">
                            <div>
                                <h4>User Password</h4></div>
                        </form>
                    </Col>
                    <Col size="md-3" >
                    </Col>
                    <Col size="md-2">
                        <CompletedBtn
                            onClick={this.handleCompClk}>Completed Dates</CompletedBtn>
                    </Col>

                </Row>
                <Row>
                    <Col size="md-3" >
                    </Col>
                    <Col size="md-4">
                        <form  className="form-1" >
                            <div>
                                <h4>User PhoneNumber</h4>
                            </div>
                        </form>
                    </Col>
                    <Col size="md-3" >
                    </Col>
                    <Col size="md-2">
                        <PlannedDateBtn
                            onClick={this.handlePlanClk}>Planned Dates</PlannedDateBtn></Col>

                </Row>
            </Container>
        );
    }
}


export default Profile;