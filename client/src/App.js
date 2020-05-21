import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Landing from "./pages/Books";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Navbar";
import Reggie from "./pages/Registration";
function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/landing" component={Landing} />
          <Route exact path="/about" component={About} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/reggie" component={Reggie} />        
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
