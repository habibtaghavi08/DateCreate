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
import "./app.css"



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

  //===================================================================================

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (
      <Router>
        <div style={{height: '100%'}}>
          <AuthButton drawerClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer show={this.state.sideDrawerOpen} />
          {backdrop}
          <Switch>
            <Route exact path="/" component={Home} />
            <PrivateRoute exact path="/landing" component={Landing} />
            <Route exact path="/about" component={About} />
            <PrivateRoute exact path="/profile" component={Profile} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/loginredirect" component={LoginRedirect} />
            <Route exact path="/reggie" component={Reggie} />
            <Route exact path="/results" component={Results} />
            <Route exact path="/repo" component={() => {window.location.href = 'https://github.com/habibtaghavi08/DateCreate'; return null;}} />
            <Route exact path="/tos" component={() => {window.location.href = './component/modal'; return null;}} />
            <Route component={NoMatch} />
          </Switch>
          <Footer />
        </div>

      </Router>

    );
  }
}

export default App;
