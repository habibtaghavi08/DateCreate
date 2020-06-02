const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/datecreateDB"
);

const dateSeed = [
    {
        dateName: "Romantic Sushi",
        dateTime: "Night",
        dateLocation: "Nashville",
        dateBudget: "$$$",
        dateRestaurant: "MoriMori Sushi and Grill",
        dateEvent: "Bob's Mini Golf",
        dateRating: 4.5,
        dateReview: "The sushi was excellent and the drinks were wonderful. So much fun playing mini golf!",
    },
    {
        dateName: "Fire and Ice",
        dateTime: "Day",
        dateLocation: "Nashville",
        dateBudget: "$$",
        dateRestaurant: "Sweet CeCe's",
        dateEvent: "The Armory Gun Range",
        dateRating: 5,
        dateReview: "Great idea for shooting at the range followed by Ice Cream! My girl loved it.",
    },
    {
        dateName: "Sips and Stroke",
        dateTime: "Day",
        dateLocation: "Nashville",
        dateBudget: "$",
        dateRestaurant: "Bella Napoli Pizza",
        dateEvent: "Kesha Concert",
        dateRating: 5,
        dateReview: "Loved their pizza. Best in Nashville",
    }
];

db.Date
    .remove({})
    .then(() => db.Date.collection.insertMany(dateSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
