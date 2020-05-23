import React from "react";
import Logo from "./DateCreateLogo.png"
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton"
import "./style.css";


const Nav = props => (


  <header className="navbar_navigation">
    <div>
      <DrawerToggleButton click={props.drawerClickHandler} />
    </div>
    <div className="navbar_logo"><a href="/"><img src={Logo} alt="Date Create"></img></a></div>
    <div className="spacer" />
    <div className="nav_items">
      <ul>
        <li><a href="/">Home |</a></li>
        <li><a href="/landing">Create A Date |</a></li>
        <li><a href="/profile">My Profile |</a></li>
      </ul>
    </div>

    <div className="brand-name">
      <span className="name">Date Create</span>
      <span className="slogan">Let every date be an adventure</span>
    </div>


    <div className="user_nav">
      <ul>
        <li><a href="/login">Login |</a></li>
        <li><a href="/reggie">Register |</a></li>
      </ul>
    </div>
  </header>


)

export default Nav;
