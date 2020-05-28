import React from "react"
import "./registration.css"

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
        // var newUser = {
        //     userName: "Celeste",//unsure how to grab username from input box at this moment
        //     password:1234, //get password from input box,
        //     email: "thisisafakeemail@gmail.com", //get email from input box
        //     phoneNumber:"44444444", //get phoneNumber from input box
        //     age:23 //get age from input
        //   };
        console.log(newUser);
    
        //  $.post("/user/new", newUser)
        //    // On success, run the following code
        //    .then(function () {
        //      console.log("user created");
    
        //      $("#userName").val("");
        //      $("#password").val("");
        //      $("#email").val("");
        //      $("#phoneNumber").val("");
        //      $("age").val("");
    
            alert("User account created successfully!");
            window.location.replace("http://localhost:3000/reggie")
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
                    <option>6</option>
                    <option>72</option>
                    <option>112</option>
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