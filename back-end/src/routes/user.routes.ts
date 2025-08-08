import express = require("express");

const userController = require("../controllers/user.controller");

const router = express.Router();

router.get("/", userController.getAll);
router.get("/:id", userController.getById);

module.exports = router;
