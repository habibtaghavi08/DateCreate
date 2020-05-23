import React from "react";
import "./SideDrawer.css"


const sideDrawer = props => {

    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }
    return (

        <nav className={drawerClasses}>
            <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="/landing">Create A Date</a></li>
                <hr />
                <li><a href="/about">About</a></li>
                <li><a href="/tos">Terms of Service</a></li>
                <hr />
                <li><a href="/profile">My Profile</a></li>
                <li><a href="/login">Login</a></li>
                <li><a href="/reggie">Register</a></li>
                <hr />
                <li><a href="/repo">Github Repo</a></li>
            </ul>
        </nav>
    );
}

export default sideDrawer;