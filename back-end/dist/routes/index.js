"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const userRoutes = require("./user.routes");
const router = express.Router();
router.use("/user", userRoutes);
module.exports = router;
//# sourceMappingURL=index.js.map