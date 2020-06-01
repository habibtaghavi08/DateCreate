import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import Completed from "../components/Completed"
import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
import { ProfileBtn, CompletedBtn, PlannedDateBtn } from "../components/Form";
import "../components/Jumbotron/style.css";
import ReactDom from "react-dom";
// import { Redirect, NavLink } from "react-router-dom";


// just making a change // 
class CompDates extends React.Component {

    state= {
        dateName:[],
        score: "",
        comment:"",

    };

    componentDidMount() {

        this.loadCompDates();


    };

    loadCompDates = () => {
                // need to route the .getCompDates().then(res =>this.setState({dateName: res.data, score: "", comment:""})).catch(err => console.log(err));

    };

    deleteDate = id => {
        //console.log(id), route to deleteDate(id).then(res => this.loadCompDates()).catch(err => console.log(err)))
    };

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
                            <p className="jumboTxt">List of your Completed Dates </p>
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
                            <Jumbotron>
                            <p className="rDates">Most recent dates </p></Jumbotron>

                        </form>
                    </Col>
                    <Col size="md-2">
                        <form >
                            <Jumbotron>
                           <h3 className="scoreTxt">Score of Date</h3></Jumbotron>
                        </form>
                    </Col>
                    <Col size="md-4">
                        <form >
                            <Jumbotron>
                            <p className="rDates">User Comments</p></Jumbotron>

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
                <Row>
                    <Col size="md-12" className= "plResults">
                        {this.state.dateName.map(date => (
                            <div className="row" key={date._id}>

                        <Completed >


                        </Completed></div>
                        ))}
           
                    </Col>
                </Row>








            </Container>
        );
    }
}

export default CompDates;