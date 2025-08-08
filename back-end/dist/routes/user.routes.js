"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const userController = require("../controllers/user.controller");
const router = express.Router();
router.get("/", userController.getAll);
router.get("/:id", userController.getById);
module.exports = router;
//# sourceMappingURL=user.routes.js.map