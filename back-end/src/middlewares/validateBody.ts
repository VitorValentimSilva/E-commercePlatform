import type { Request, Response, NextFunction } from "express";
import zod = require("zod");

function validateBody(schema: zod.ZodTypeAny) {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      next();
    } catch (err) {
      if (err instanceof zod.ZodError) {
        return res.status(400).json({ errors: err.issues });
      }
      next(err);
    }
  };
}

module.exports = validateBody;
