import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn, ProfileBtn, CompletedBtn, PlannedDateBtn } from "../components/Form";
import Form from 'react-bootstrap/Form';
import "../components/Jumbotron/style.css";
import ReactDom from "react-dom";
import { Redirect, NavLink} from "react-router-dom";


// just making a change // 
class Dates extends Component {
  state = {
    datecost: "",
    restaurantType: [],
    restRating: "",
    distance: [],
    zipcode: "",
    redirect: false,
  };
  constructor(props) {
    super(props);
    this.state = {
      value: "Chop House",
      restaurants: [{ id: "1", rest: "Afghan" }, { id: "2", rest: "African" }, { id: "3", rest: "American(Traditional)" }, { id: "4", rest: "Armenian" }, { id: "5", rest: "Beer Hall" }, { id: "6", rest: "Beer Garden" }, { id: "7", rest: "Bistro" }, { id: "8", rest: "Brazilian" }, { id: "9", rest: "Breakfast & Brunch" }, { id: "10", rest: "Canadian" }, { id: "11", rest: "Cafe" }, { id: "12", rest: "Coffee House" }, { id: "13", rest: "Caribbean" }, { id: "14", rest: "Dinner Theater" }, { id: "15", rest: "Food Court" }, { id: "16", rest: "French" }, { id: "17", rest: "Ethiopian" }, { id: "18", rest: "German" }, { id: "19", rest: "Italian" }, { id: "20", rest: "Japanese" }, { id: "21", rest: "Mexican" }, { id: "22", rest: "Middle Eastern" }, { id: "23", rest: "Pizza" }, { id: "24", rest: "Persian/Iranian" }, { id: "25", rest: "Chop House" }, { id: "26", rest: "SteakHouse" }, { id: "27", rest: "Sushi Bar" }, { id: "28", rest: "Thai" }, { id: "29", rest: "Not Vegetarian" }, { id: "30", rest: "Ok Vegetarian" }, { id: "31", rest: "Waffles" }]
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }




  componentDidMount() {
    // this.loadBooks();
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



  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.zipcode && this.state.author) {
      API.save({
        zipcode: this.state.zipcode,
        author: this.state.author,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };

  // plan() {
  //   this.props.planned.push("/")
  // };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-10">
            <Jumbotron>
              <p className="jumboTxt">Filter your Date Criteria </p>
            </Jumbotron>
          </Col>
          <Col size="md-2 sm-12">
            <Jumbotron>
              <h4 className="manTxt">Management of your Dates</h4>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-5" >
            <form className= "block-example border border-dark">
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Select your Date Budget</Form.Label>
                <Form.Control as="select">
                  <option>Free</option>
                  <option>$</option>
                  <option>$$</option>
                  <option>$$$</option>
                  <option>$$$$</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Pick the Distance to Search</Form.Label>
                <Form.Control as="select">
                  <option>5 miles</option>
                  <option>10 miles</option>
                  <option>20 miles</option>
                  <option>30 miles</option>
                  <option>40 miles</option>
                </Form.Control>
              </Form.Group>
              {['checkbox',].map((type) => (
                <div key={`default-${type}`} className="mb-3">
                  <Form.Check
                    type={type}
                    id={`default-${type}`}
                    label={`Day Time Date ${type}`}
                  />

                  <Form.Check
                    // disabled
                    type={type}
                    label={`Night Time Date ${type}`}
                    id={`disabled-default-${type}`}
                  />
                </div>
              ))}
              <label>Pick your Restaurant Food Style  </label>
              <br></br>
              <select>
                {this.state.restaurants.map(rest => (<option key={rest.id} value={rest.rest}>
                  {rest.rest}
                </option>))}
              </select>
              {/* 
              </Form.Group> */}

            </form>
          </Col>
          <Col size="md-5">

            <form className= "block-example border border-dark">

              <Input
                value={this.state.zipcode}
                onChange={this.handleInputChange}
                name="zipCode"
                placeholder="Enter your Zip Code (required)"
              />
              {['checkbox',].map((type) => (
                <div key={`default-${type}`} className="mb-3">
                  <Form.Check
                    type={type}
                    id={`default-${type}`}
                    label={`Indoor Activity ${type}`}
                  />

                  <Form.Check
                    // disabled
                    type={type}
                    label={`Out Door Activity ${type}`}
                    id={`default-${type}`}
                  />
                </div>
              ))}
              <TextArea
                value={this.state.synopsis}
                onChange={this.handleInputChange}
                name="synopsis"
                placeholder="Synopsis (Optional)"
              />
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Rating Type of Restaurant</Form.Label>
                <Form.Control as="select">
                  <option>1 Star Rating</option>
                  <option>2 Star Rating</option>
                  <option>3 Star Rating</option>
                  <option>4 Star Rating</option>
                  <option>5 Star Rating</option>
                </Form.Control>
              </Form.Group>
              <FormBtn className="button"
                // disabled={!(this.state.author && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Submit
              </FormBtn>
            </form>
          </Col>
          <Col size="md-2">
            <ProfileBtn
              onClick={this.handleProfileClk}
            >
              Profile
              </ProfileBtn>
            <CompletedBtn 
              onClick={this.handleCompClk}
            >
              Completed Dates
              </CompletedBtn> 
            <PlannedDateBtn                
              onClick={this.handlePlanClk}
            >
              Planned Dates
              </PlannedDateBtn>

          </Col>

        </Row>
      </Container>
    );
  }
}

export default Dates;


