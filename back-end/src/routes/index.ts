import express = require("express");

const userRoutes = require("./user.routes");
const categoryRoutes = require("./category.routes");

const router = express.Router();

router.use("/user", userRoutes);
router.use("/category", categoryRoutes);

module.exports = router;
