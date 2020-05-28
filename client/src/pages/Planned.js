import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn, ProfileBtn, CompletedBtn, PlannedDateBtn } from "../components/Form";
import "../components/Jumbotron/style.css";
import ReactDom from "react-dom";
import { Redirect, NavLink } from "react-router-dom";


// just making a change // 
class PlanDates extends Component {

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


    //   deleteDate = id => {
    //     API.deleteDate(id)
    //       .then(res => this.loadDate())
    //       .catch(err => console.log(err));
    //   };

    //   handleInputChange = event => {
    //     const { name, value } = event.target;
    //     this.setState({
    //       [name]: value
    //     });
    //   };





    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-10">
                        <Jumbotron>
                            <p className="jumboTxt">List of Planned dates </p>
                        </Jumbotron>
                    </Col>
                    <Col size="md-2 sm-12">
                        <Jumbotron>
                            <h4 className="manTxt">Management of your Dates</h4>
                        </Jumbotron>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-4" >
                        <form>
                            <Jumbotron className="titleBlk">
                            <p className="rDates">Name of Date </p></Jumbotron>

                        </form>
                    </Col>
                    <Col size="md-1">
                        <form >
                            <Jumbotron>
                           <h4>Avg Score of Date</h4></Jumbotron>
                        </form>
                    </Col>
                    <Col size="md-5">
                        <form >
                            <Jumbotron>
                            <h3>User Comments</h3></Jumbotron>

                        </form>
                    </Col>
                    <Col size="md-2">
                        <ProfileBtn
                            onClick={this.handleProfileClk}>Profile</ProfileBtn>
                        <CompletedBtn
                            onClick={this.handleCompClk}>Completed Dates</CompletedBtn>
                        <PlannedDateBtn
                            onClick={this.handlePlanClk}>Planned Dates</PlannedDateBtn>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default PlanDates;