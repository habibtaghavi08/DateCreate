const router = required("express").Router();
const Schema = mongoose.Schema;

const dateSearchSchema = new Schema({
    dateTime: {type: Integer, required: false},
    dateName: {type: String, required: false},
    dateBudget: {type: Integer, required: false},
    dateRating: {type: Integer, required: false},
    dateReview: {type: Integer, required: false},
    dateRestaurantLocation: {type: String, required: false},
    dateEventName: {type: String, required: false}
});

const DateSearch = mongoose.model("Date", dateSearchSchema);

module.exports = DateSearch;