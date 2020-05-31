import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch, Redirect, withRouter} from "react-router-dom";
import Home from "./pages/Home";
import Landing from "./pages/Filter";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import LoginNav from "./components/LoginNav"
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop"
import Reggie from "./pages/Registration";
import Results from "./pages/Results";
import Footer from "./components/Footer";
import {ThemeProvider} from "react-bootstrap";
import "./app.css"
import Planned from './pages/Planned';
import Completed from "./pages/Completed";

 





//==========================Login/Logout Check=============================
const loginAuth = {
  isAuthenticated: true,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100)
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
}


const AuthButton = withRouter(({history}) => (
  loginAuth.isAuthenticated === true
    ? <LoginNav />
    : <Nav />
))
//=========================================================================


//==========Redirect Funtionality based on loginAuth status================

class LoginRedirect extends React.Component {
  state = {
    rediretToReferrer: false
  }
  login = () => {
    loginAuth.authenticate(() => {
      this.setState(() => ({
        rediretToReferrer: true
      }))
    })
  }
  render() {
    const {rediretToReferrer} = this.state
    const {from} = this.props.location.state || {from: {pathname: "/"}}

    if (rediretToReferrer === true) {
      return (
        <Redirect to={from} />
      )
    }
    return (
      <div className="alert alert-info" role="alert">
        <p>Oh so sorry, you have reached a restricted page. You must log in to view this page</p>
      </div>
    )
  }
}

const PrivateRoute = ({component: Component, ...rest}) => (
  <Route {...rest} render={(props) => (
    loginAuth.isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to={{
        pathname: "/loginredirect",
        state: {from: props.location}
      }} />
  )} />
)
//==================================================================================


//=============Sidedrawer Functionality for moible dispaly==========================

class App extends Component {
  state = {
    sideDrawerOpen: false
  };


  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  }


  validateLogin = () => {
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



  //===================================================================================

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (

      <div className="page-container">
        <div className="content-wrap">
          <Router>
            <div style={{height: '100%'}}>
              <Nav drawerClickHandler={this.drawerToggleClickHandler} />
              <SideDrawer show={this.state.sideDrawerOpen} />
              {backdrop}

              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/landing" component={Landing} />
                <Route exact path="/about" component={About} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/login" component={Login}
                  userName={this.state.userName}
                  password={this.state.password}
                  checkInformation={this.checkInformation} />
                <Route exact path="/planned" component={Planned} />
                <Route exact path="/completed" component={Completed} />
                <Route exact path="/results" component={Results} />
                <Route exact path="/reggie" component={Reggie}
                  validateRegistration={this.validateRegistration} />
                <Route exact path="/repo" component={() => {window.location.href = 'https://github.com/habibtaghavi08/DateCreate'; return null;}} />
                <Route exact path="/tos" component={() => {window.location.href = './component/modal'; return null;}} />
                <Route component={NoMatch} />


              </Switch>
            </div>
          </Router>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
