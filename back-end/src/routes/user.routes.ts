import express = require("express");

const userController = require("../controllers/user.controller");
const validateBody = require("../middlewares/validateBody");
const { userSchema, userUpdate } = require("../schemas/user.schema");

const router = express.Router();

router.get("/", userController.getAll);
router.get("/:id", userController.getById);
router.post("/", validateBody(userSchema), userController.create);
router.put("/:id", validateBody(userUpdate), userController.update);
router.delete("/:id", userController.delete);
router.post("/login", userController.login);

module.exports = router;
