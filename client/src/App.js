import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Landing from "./pages/Filter";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop"
import Reggie from "./pages/Registration";
import Footer from "./components/Footer";
import { ThemeProvider } from "react-bootstrap";




class App extends Component {
  state = {
    sideDrawerOpen: false,
    userName: "user",
    password: "password1"
    
  };


  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  }
 
  checkInformation = (input, pw)=>{
    // if username's password does not equal the input show does not match
    //else show landing page
  if (input ==! pw ){
    alert("The password is not correct")
     }
   
   else{
    window.location.replace("http://localhost/3000/landing")
    }
  }

  validateRegistration = () => {
    console.log("this function is working")
    // var newUser = {
    //   userName: //unsure how to grab username from input box at this moment
    //   password: //get password from input box,
    //   email: //get email from input box
    //   phoneNumber: //get phoneNumber from input box
    //   age: //get age from input
    // };
    // console.log(newUser);

    // $.post("/user/new", newUser)
    //   // On success, run the following code
    //   .then(function () {
    //     console.log("user created");

    //     $("#userName").val("");
    //     $("#password").val("");
    //     $("#email").val("");
    //     $("#phoneNumber").val("");
    //     $("age").val("")

    //     alert("User account created successfully!");
    
  }



  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (
      <Router>
        <div style={{ height: '100%' }}>
          <Nav drawerClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer show={this.state.sideDrawerOpen} />
          {backdrop}

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/landing" component={Landing} />
            <Route exact path="/about" component={About} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/login" component={Login} 
            userName = {this.state.userName} 
            password = {this.state.password} 
            checkInformation = {this.checkInformation} />
            <Route exact path="/reggie" component={Reggie} 
            validateRegistration = {this.validateRegistration} />
            <Route exact path="/repo" component={() => { window.location.href = 'https://github.com/habibtaghavi08/DateCreate'; return null; }} />
            <Route exact path="/tos" component={() => { window.location.href = './component/modal'; return null; }} />
            <Route component={NoMatch} />
          </Switch>
          <Footer />
        </div>

      </Router>

    );
  }
}

export default App;
