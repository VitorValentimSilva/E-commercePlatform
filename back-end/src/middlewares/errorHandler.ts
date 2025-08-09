import type { Request, Response, NextFunction } from "express";
import zod = require("zod");
import prisma = require("../generated/prisma");

function errorHandler(
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  console.error(err);

  if (err instanceof zod.ZodError) {
    const errors: Record<string, string> = {};
    err.issues.forEach((issue) => {
      if (issue.path.length > 0) {
        errors[issue.path[0] as string] = issue.message;
      }
    });
    return res.status(400).json({ errors });
  }

  if (err instanceof prisma.Prisma.PrismaClientKnownRequestError) {
    if (err.code === "P2002") {
      const target = (err.meta?.target ?? []) as string[];

      const fieldMessages: Record<string, string> = {
        namePlace: "Já existe esse nome de loja cadastrado.",
        email: "Já existe esse e-mail cadastrado.",
      };

      const errors: Record<string, string> = {};
      target.forEach((field) => {
        errors[field] =
          fieldMessages[field] ||
          `Já existe um registro com esse valor no campo "${field}".`;
      });

      return res.status(400).json({ errors });
    }
  }

  const status = (err as any).status || 500;
  return res.status(status).json({
    message: (err as any).message || "Ocorreu um erro interno no servidor.",
  });
}

module.exports = errorHandler;
