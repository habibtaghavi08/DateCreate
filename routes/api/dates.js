const router = require("express").Router();
const Controller = require("../../controllers/datesController");


 
 
// router.post("/api/addUser", function(req,res){
//   res.status(200)
// })
// router.post("/api/addUser",)
// router.route("/api/addUser")
// .post(function(req,res){
//   console.log("ok")
//   //res.status(200)
// })
// Matches with "/api/books/:id"
  router
  .route("/:id")
  .get(Controller.findDateById)
  .put(Controller.updateDate)
  .delete(Controller.removeDate);

  //http://localhost:3001/api/dates
  router
  .route("/")
  .get(Controller.findAll)
  .post(Controller.createDate);
 
module.exports = router;
