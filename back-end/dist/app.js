"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const routes = require("./routes");
const errorHandler = require("./middlewares/error.handler");
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", routes);
app.use(errorHandler);
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
module.exports = app;
//# sourceMappingURL=app.js.map