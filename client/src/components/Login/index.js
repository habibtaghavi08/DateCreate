import React, { Component } from "react"
import { Button, Form } from "react-bootstrap";
function Login  (props) {
 
return(
<Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" className = "input" />
    <Form.Text className="text-muted"> {props.name}
      We'll never share your email with anyone else. {props.travis}
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" type = "text"
    className = "input"
    inputRef={(input) => this.inputPassword = input}/>
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit" 
  //onClick = {props.checkInformation(this.inputPassword.value, props.password)}
  >
    Submit
  </Button>
</Form>
)
}

export default Login