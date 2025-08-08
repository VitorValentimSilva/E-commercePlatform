"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function errorHandler(err, _req, res, _next) {
    console.error(err);
    const status = err.status || 500;
    res.status(status).json({ message: err.message || "Internal Server Error" });
}
module.exports = errorHandler;
//# sourceMappingURL=error.handler.js.map