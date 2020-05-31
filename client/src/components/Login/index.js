import React, { Component } from "react"
import { Button, Form } from "react-bootstrap";
import API from "../../utils/API"
const path = require("path");
class Login extends React.Component {
 
  state = {
   userName:"",
   password:""
 }
handleInputChange = event =>{
  //console.log(event.target.name)
this.setState({[event.target.name]:event.target.value})
}

checkInformation = (userName, pw)=>{
  // if username's password does not equal the input show does not match
  //else show landing page
  if (pw !== "password1" ){
    alert("Your login is not correct")
  }
  else if (userName !== "user"){
    alert("Your username is not correct")
  }
 else{
  window.location.replace(path.join(__dirname, "/landing"))
  }
}

render(){
console.log(this.state)
return(
<Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Username</Form.Label>
    <Form.Control name = "userName" type="text" placeholder="Enter username" className = "input" 
    onChange = {this.handleInputChange.bind(this)} />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control name = "password" type="password" placeholder="Password" type = "password"
    className = "input" onChange = {this.handleInputChange.bind(this)}/>
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit" 
  onClick = {event=> { event.preventDefault();this.checkInformation(this.state.userName, this.state.password)}}
  >
    Submit
  </Button>
</Form>
)
}
}

export default Login