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




class App extends Component {
  state = {
    sideDrawerOpen: false
  };


  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
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
            <Route exact path="/login" component={Login} />
            <Route exact path="/reggie" component={Reggie} />
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
