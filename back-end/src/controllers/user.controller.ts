import type { Request, Response, NextFunction } from "express";

const UserService = require("../services/user.service");

const service = new UserService();

const userController = {
  async getAll(_req: Request, res: Response, next: NextFunction) {
    try {
      res.json(await service.getAll());
    } catch (err) {
      next(err);
    }
  },

  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const p = await service.getById(req.params.id);
      if (!p)
        return res.status(404).json({ message: "Usuário não encontrado" });
      res.json(p);
    } catch (err) {
      next(err);
    }
  },
};

module.exports = userController;
