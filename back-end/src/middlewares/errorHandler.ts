import type { Request, Response, NextFunction } from "express";
import zod = require("zod");

function errorHandler(
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  console.error(err);
  if (err instanceof zod.ZodError) {
    return res.status(400).json({ errors: err.issues });
  }
  const status = err.status || 500;
  res.status(status).json({ message: err.message || "Internal Server Error" });
}

module.exports = errorHandler;
