const router = require("express").Router();
const Controller = require("../../controllers");


// router.route("/api/addUser")
//   .post(Controller.create);
// // Matches with "/api/books"
//  router.route("/api/findAllUsers")
//   .get(Controller.findAll)
//   // .post(Controller.create);
//     res.send("ok")
//   })
router.get("/findUserName/:userName", Controller.User.findUserByUserName)

router.post("/addUser", Controller.User.createUser)
  console.log(Controller)
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
  //router
  // .route("/:id")
  // .get(Controller.findById)
  // .put(Controller.update)
  // .delete(Controller.remove);

module.exports = router;
