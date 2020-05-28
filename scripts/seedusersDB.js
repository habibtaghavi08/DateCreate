const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/datecreate"
);

const userSeed = [
    {
        userName: "guestUser",
        password: "Psswrd#1",
        email: "guestuser@gmail.com",
        phoneNumber: 6155223992,
        Age: 36,
        datesList: []
    },
    {
        userName: "guestUser2",
        password: "Psswrd#2",
        email: "guestuser2@gmail.com",
        phoneNumber: 6156680547,
        Age: 40,
        datesList: []
    }
];

db.User
    .remove({})
    .then(() => db.User.collection.insertMany(userSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
