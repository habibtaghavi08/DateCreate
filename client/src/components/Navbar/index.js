import React from "react";
import { Link } from "react-router-dom";
import Logo from "./DateCreateLogo.png"
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="Logo">
                <img src={Logo} alt="Date Create" />
            </div>
            <div className="navigation-links">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link
                            to="/"
                            className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
                        >
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/landing"
                            className={window.location.pathname === "/landing" ? "nav-link active" : "nav-link"}
                        >
                            Create A Date
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/profile"
                            className={window.location.pathname === "/profile" ? "nav-link active" : "nav-link"}
                        >
                            My Profile
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/login"
                            className={window.location.pathname === "/login" ? "nav-link active" : "nav-link"}
                        >
                           login
                        </Link>
                    </li>
                </ul>
            </div>
            <div clasName="header-name">
                <div className="date">Date Create</div>
                <div className="slogan">Let Every Date Be An Adventure</div>
            </div>
            <div>
            
                <ul className="user-nav">
                    <li className="nav-item">
                        <Link
                            to="/login"
                            className={window.location.pathname === "/login" ? "nav-link active" : "nav-link"}
                        >
                            Login
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/register"
                            className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
                        >
                            Register
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
