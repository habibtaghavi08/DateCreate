import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn, ProfileBtn, CompletedBtn,PlannedDateBtn } from "../components/Form";
import Form from 'react-bootstrap/Form';


class Books extends Component {
  state = {
    datecost: "",
    books: [],
    title: "",
    author: "",
    synopsis: ""
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, title: "", author: "", synopsis: "" })
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.saveBook({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-10">
            <Jumbotron>
              <h1>Filter your Date Criteria </h1>
            </Jumbotron>
          </Col>
          <Col size="md-2 sm-12">
            <Jumbotron>
              <h1>Date Create sub area</h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-5">
            <form>
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

              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <Input
                value={this.state.author}
                onChange={this.handleInputChange}
                name="author"
                placeholder="Author (required)"
              />
              <TextArea
                value={this.state.synopsis}
                onChange={this.handleInputChange}
                name="synopsis"
                placeholder="Synopsis (Optional)"
              />

            </form>
          </Col>
          <Col size="md-5">

            <form>

              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <Input
                value={this.state.author}
                onChange={this.handleInputChange}
                name="author"
                placeholder="Author (required)"
              />
              <TextArea
                value={this.state.synopsis}
                onChange={this.handleInputChange}
                name="synopsis"
                placeholder="Synopsis (Optional)"
              />
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Type Of Restaurant</Form.Label>
                <Form.Control as="select">
                  <option>Hibachi</option>
                  <option>Chop House</option>
                  <option>Bar-b-que</option>
                  <option>Burger</option>
                  <option>Mexican</option>
                </Form.Control>
              </Form.Group>
              <FormBtn
                disabled={!(this.state.author && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Submit
              </FormBtn>
            </form>
          </Col>
          <Col size="md-2">
            <ProfileBtn
              disabled={!(this.state.author && this.state.title)}
              onClick={this.handleFormSubmit}
            >
             Profile 
              </ProfileBtn>
              <CompletedBtn
              disabled={!(this.state.author && this.state.title)}
              onClick={this.handleFormSubmit}
            >
             Completed Dates
              </CompletedBtn>
              <PlannedDateBtn
              disabled={!(this.state.author && this.state.title)}
              onClick={this.handleFormSubmit}
            >
             Completed Dates
              </PlannedDateBtn>

          </Col>

        </Row>
      </Container>
    );
  }
}

export default Books;
