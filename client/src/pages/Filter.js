import React, {Component} from "react";
// import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import {Link} from "react-router-dom";
import {Col, Row, Container} from "../components/Grid";
import {
  Input,
  TextArea,
  FormBtn,
  ProfileBtn,
  CompletedBtn,
  PlannedDateBtn,
} from "../components/Form";
import Form from "react-bootstrap/Form";
import "../components/Jumbotron/style.css";
import ReactDom from "react-dom";
import {Redirect, NavLink} from "react-router-dom";

// just making a change //
class Dates extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Chop House",

      restaurants: [{ id: "1", rest: "Afghan" }, { id: "2", rest: "African" }, { id: "3", rest: "American(Traditional)" }, { id: "4", rest: "Armenian" }, { id: "5", rest: "Beer Hall" }, { id: "6", rest: "Beer Garden" }, { id: "7", rest: "Bistro" }, { id: "8", rest: "Brazilian" }, { id: "9", rest: "Breakfast & Brunch" }, { id: "10", rest: "Canadian" }, { id: "11", rest: "Cafe" }, { id: "12", rest: "Coffee House" }, { id: "13", rest: "Caribbean" }, { id: "14", rest: "Dinner Theater" }, { id: "15", rest: "Food Court" }, { id: "16", rest: "French" }, { id: "17", rest: "Ethiopian" }, { id: "18", rest: "German" }, { id: "19", rest: "Italian" }, { id: "20", rest: "Japanese" }, { id: "21", rest: "Mexican" }, { id: "22", rest: "Middle Eastern" }, { id: "23", rest: "Pizza" }, { id: "24", rest: "Persian/Iranian" }, { id: "25", rest: "Chop House" }, { id: "26", rest: "SteakHouse" }, { id: "27", rest: "Sushi Bar" }, { id: "28", rest: "Thai" }, { id: "29", rest: "Not Vegetarian" }, { id: "30", rest: "Ok Vegetarian" }, { id: "31", rest: "Waffles" }],
      dateCost: "",
      restaurantType: "",
      day: false,
      night: false,
      restRating: "",
      distance: "",
      zipCode: "",
      dateOut: false,
      dateIn: false,
      dateType:"",
      redirect: false,
\
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  componentDidMount() {
    // this.loadBooks();
  }

  handleProfileClk = () => {
    this.props.history.push("./profile");
  };
  handleCompClk = () => {
    this.props.history.push("./completed");
  };
  handlePlanClk = () => {
    this.props.history.push("./planned");
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
    console.log(value)
    console.log(name)
  };

  handleClick(e) {
    console.log("value of check : ", e.target.name);
    this.setState({[e.target.name]: !this.state[e.target.name]})
  }
 
  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.zipcode && this.state.distance) {
      API.save({
        zipCode: this.state.zipCode,
        eventTime: this.state.eventTime,
        restaurantType: this.state.restaurantType,
        distance: this.state.distance,
        restRating: this.state.restRating,
        dateCost: this.state.dateCost,
        dateLoc: this.state.dateLoc,
        dateType: this.state.dateType

      })
        .then((res) => this.loadDates())
        .catch((err) => console.log(err));
    }
  };

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
            <form  className="form-1">
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label className="filterText">Select your Date Budget</Form.Label>
                <Form.Control as="select" name="dateCost" onChange={this.handleInputChange}>
                  <option value="1">Free</option>
                  <option value="2">$</option>
                  <option value="3">$$</option>
                  <option value="4">$$$</option>
                  <option value="5">$$$$</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label className="filterText">Pick the Distance to Search</Form.Label>
                <Form.Control name="distance" as="select" onChange={this.handleInputChange.bind(this)}>
                  <option value="8046">5 miles</option>
                  <option value="16093">10 miles</option>
                  <option value="32186">20 miles</option>
                  <option value="4000">25 miles</option>
                </Form.Control>
              </Form.Group>

              <div className="btn-group-toggle, checkBox" data-toggle="buttons">
                <label className="btn btn-secondary">
                  <input type="checkbox" name="day" value="daytime" checked={this.state.day} onChange={this.handleClick.bind(this)} /> Day Time
                </label>
              </div>
              <div className="btn-group-toggle, checkBox" data-toggle="buttons" >
                <label className="btn btn-secondary">
                  <input type="checkbox" name="night" autocomplete="off" checked={this.state.night} onChange={this.handleClick.bind(this)} /> Night Time </label>
              </div>


              <Input
                value={this.state.zipcode}
                onChange={this.handleInputChange}
                name="zipCode"
                placeholder="Enter your Zip Code (required)"
              />
            </form>
            <br/>    
            <br/>
          </Col>

          <Col size="md-5">
            <form  className="form-1" >
              <label className="filterText">Pick your Restaurant Food Style  </label>
              <br></br>
              <select onChange={this.handleInputChange.bind(this)}>
                {this.state.restaurants.map(rest => (<option key={rest.id} value={rest.rest}>
                  {rest.rest} 
                </option>))}
              </select>
              <div className="btn-group-toggle, checkBox" data-toggle="buttons">
                <label className="btn btn-secondary active">
                  <input type="checkbox"  autocomplete="off" checked={this.state.dateIn} onChange={this.handleClick.bind(this)} /> In Door
                </label>
              </div>
              <div className="btn-group-toggle, checkBox" data-toggle="buttons">
                <label className="btn btn-secondary active">
                  <input type="checkbox"  autocomplete="off" checked={this.state.dateOut} onChange={this.handleClick.bind(this)} /> Out door
                </label>
              </div>
              <div className="btn-group btn-group-toggle checkBox" data-toggle="buttons">
                <label className="btn btn-secondary ">
                  <input type="radio" name="options" id="option2" onChange={this.handleInputChange} />Event</label>
                <label className="btn btn-secondary">
                  <input type="radio" name="options" id="option3" onChange={this.handleInputChange} />Dinning</label>
                  </div>
              <br></br>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label className="filterText">Rating Type of Restaurant</Form.Label>

                <Form.Control as="select" onChange={this.handleInputChange}>
                  <option>1 Star Rating</option>
                  <option>2 Star Rating</option>
                  <option>3 Star Rating</option>
                  <option>4 Star Rating</option>
                  <option>5 Star Rating</option>
                </Form.Control>
              </Form.Group>
              <br/>
              <FormBtn
                className="button"
                // disabled={!(this.state.author && this.state.title)}
                onClick={this.handleFormSubmit}>Submit
              </FormBtn>
          
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

export default Dates;
