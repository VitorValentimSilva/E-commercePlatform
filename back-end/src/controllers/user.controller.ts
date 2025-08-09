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

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const p = await service.create(req.body);
      res.json({ message: "Usuário criado com sucesso", user: p });
    } catch (err) {
      next(err);
    }
  },

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const p = await service.update(req.params.id, req.body);
      if (!p)
        return res.status(404).json({ message: "Usuário não encontrado" });

      res.json({ message: "Usuário atualizado com sucesso", user: p });
    } catch (err) {
      next(err);
    }
  },

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const p = await service.delete(req.params.id);
      if (!p)
        return res.status(404).json({ message: "Usuário não encontrado" });

      res.json({ message: "Usuário removido com sucesso" });
    } catch (err) {
      next(err);
    }
  },

  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;
      const user = await service.login(email, password);
      res.json({ message: "Login realizado com sucesso", user });
    } catch (err) {
      next(err);
    }
  },
};

module.exports = userController;
