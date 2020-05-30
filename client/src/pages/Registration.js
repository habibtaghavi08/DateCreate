import React from "react"
import "./registration.css"
import API from "../utils/API"
const path = require("path");

class Registration extends React.Component {

    state = {
        userName:"",
        password:"",
        repeatPassword:"",
        email:"",
        phoneNumber:"",
        age:"",
        
    }
    handleFormSubmit= event => {
        event.preventDefault()
        
         console.log("this function is working")
        var newUser = {
          userName: this.state.userName,//unsure how to grab username from input box at this moment
          password: this.state.password, //get password from input box,
          email: this.state.email, //get email from input box
          phoneNumber: this.state.phoneNumber, //get phoneNumber from input box
          age: this.state.age //get age from input
        };

        //console.log(newUser);
        //console.log(API)
        if (this.state.userName && this.state.password){
            API.createUser(newUser)

        }
        alert("User account created successfully!");
        window.location.replace((path.join(__dirname, "/landing")))
        console.log(this.userName)
           //}
           }

        handleInputChange = event =>{
            //console.log(event.target.name)
            this.setState({[event.target.name]:event.target.value})
            

        }
      
    
    render() {
        console.log(this.state)
        return (<div className="card bg-light">

        <article className="card-body mx-auto">
            <h4 className="card-title mt-3 text-center">Create Account</h4>
            <p className="text-center">Get started with your free account</p>
            <p className="divider-text">
                <span className="bg-light">OR</span>
            </p>
            <form>
            <div className="form-group input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text"> <i className="fa fa-user"></i> </span>
                 </div>
                <input name="userName" className="form-control" id = "name" placeholder="username" onChange = {this.handleInputChange.bind(this)} type="text"/>
            </div>
            <div className="form-group input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text"> <i className="fa fa-envelope"></i> </span>
                 </div>
                <input name="email" id = "email" className="form-control" placeholder="Email address" type="email" onChange = {this.handleInputChange.bind(this)}/>
            </div>
            <div className="form-group input-group">
                <div className="input-group-prepend">
                    {/* <span className="input-group-text"> <i className="fa fa-phone"></i> </span> */}
                </div>
                <select className="custom-select">
                    <option value="1">+1</option>
                    <option value="2">+971</option>
                    <option value="3">+972</option>
                    <option value="4">+198</option>
                    <option value="5">+701</option>
                </select>
                <input name="phoneNumber" className="form-control" id = "phoneNumber" placeholder="Phone number" type="text" onChange = {this.handleInputChange.bind(this)}/>
            </div>

            <div className="form-group input-group">
                <div className="input-group-prepend">
                    {/* <span className="input-group-text"> <i className="fa fa-building"></i> </span> */}
                </div>
                <select name = "age" className="form-control" id = "age" onChange = {this.handleInputChange.bind(this)}>
                    <option defaultValue=""> Select age</option>
                    <option>18</option>
                    <option>19</option>
                    <option>20</option>
                    <option>20+</option>
                </select>
                
            </div>

            <div className="form-group input-group">
                <div className="input-group-prepend">
                    {/* <span className="input-group-text"> <i className="fa fa-lock"></i> </span> */}
                </div>
                <input name = "password" className="form-control" id = "password" placeholder="Create password" type="password" onChange = {this.handleInputChange.bind(this)}/>
            </div>
            <div className="form-group input-group">
                <div className="input-group-prepend">
                    {/* <span className="input-group-text"> <i className="fa fa-lock"></i> </span> */}
                </div>
                <input name = "repeatPassword" className="form-control" placeholder="Repeat password" type="password" onChange = {this.handleInputChange.bind(this)}/>
            </div>                                      
            <div className="form-group">
                <button type="submit" className="btn btn-primary btn-block" onClick = {this.handleFormSubmit}> Create Account  </button>
            </div>      
            <p className="text-center">Have an account? <a href="">Log In</a> </p>                                                                 
        </form>
        </article>
       
        
        </div>) 


    }
}
export default Registration;