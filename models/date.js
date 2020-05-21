const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dateSchema = new Schema({
  dateName: { type: String, required: true },
  //10-5 5:01-3am
  dateTime:{type: String, required: true},
  dateLocation:{type: String, required: true},
  dateBudget:{type: String},
  dateRestaurant:{type: String},
  dateEvent: {type: String, required: true},
  dateRating: {type: Number},
  dateReview: {type: String},
  usersGoingOnDate: [Number]
});

const Date = mongoose.model("Date", dateSchema);

module.exports = Date;
