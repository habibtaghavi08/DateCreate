const router = require("express").Router();
const userRoutes = require("./users");
const dateRoutes = require("./dates");

// Book routes
router.use("/users", userRoutes);
router.use("/dates", dateRoutes);

module.exports = router;
