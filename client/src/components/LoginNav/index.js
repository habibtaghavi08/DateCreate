import React from "react";
import Logo from "./DateCreateLogo.png"
import Branding from "./DateCreateBranding.png"
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton"
import "./style.css";


const Nav = props => (


  <div className="navbar_navigation">
    <div>
      <DrawerToggleButton click={props.drawerClickHandler} />
    </div>
    <div className="navbar_logo"><img src={Logo} alt="Date Create" className="responsive"></img></div>

    <div className="nav_items">
      <ul>
        <li><a href="/">Home |</a></li>
        <li><a href="/landing">Create A Date |</a></li>
        <li><a href="/profile">My Profile |</a></li>
      </ul>
    </div>

    <div className="branding"><img src={Branding} alt="Date Create" className="responsive-1"></img></div>

    <div className="user_nav">
      <ul>
        <li><button type="button" className="link-button" onClick={() => {props.loginAuth.signout((props.isAuthenticated = false))}}>Logout |</button></li>

      </ul>
    </div>
  </div >


)

export default Nav;
