import express = require("express");
import userSchema = require("../schemas/user.schema");

const userController = require("../controllers/user.controller");
const validateBody = require("../middlewares/validateBody");

const router = express.Router();

router.get("/", userController.getAll);
router.get("/:id", userController.getById);
router.post("/", validateBody(userSchema), userController.create);
router.put("/:id", validateBody(userSchema), userController.update);
router.delete("/:id", userController.delete);
router.post("/login", userController.login);

module.exports = router;
