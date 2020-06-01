import axios from "axios";

export default {
  // Creates new User
  createUser: function(newUser) {
    console.log(newUser)
    return axios.post("/api/users/addUser", newUser);
  },
  findUserName: function(userName){
    console.log(userName)
    return axios.get("api/user/findUserName/" + userName)
  },
  // Gets the Date with the given id
  getDate: function(id) {
    return axios.get("/" + id);
  },
  // Deletes the Date with the given id
  deleteDate: function(id) {
    return axios.delete("/api/date/" + id);
  },
  // Saves a Date to the database
  saveDate: function(dateData) {
    return axios.post("/api/date/", dateData);
  }
  
};
