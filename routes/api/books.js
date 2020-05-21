const router = require("express").Router();
const Controller = require("../../controllers");

// Matches with "/api/books"
router.route("/")
  .get(Controller.findAll)
  .post(Controller.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(Controller.findById)
  .put(Controller.update)
  .delete(Controller.remove);

module.exports = router;
