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
  }
  // // Gets the book with the given id
  // getBook: function(id) {
  //   return axios.get("/api/books/" + id);
  // },
  // // Deletes the book with the given id
  // deleteBook: function(id) {
  //   return axios.delete("/api/books/" + id);
  // },
  // // Saves a book to the database
  // saveBook: function(bookData) {
  //   return axios.post("/api/books", bookData);
  // }
};
