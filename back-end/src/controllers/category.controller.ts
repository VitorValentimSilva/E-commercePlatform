import type { Request, Response, NextFunction } from "express";

const CategoryService = require("../services/category.service");

const service = new CategoryService();

const categoryController = {
  async getAll(_req: Request, res: Response, next: NextFunction) {
    try {
      res.json(await service.getAll());
    } catch (err) {
      next(err);
    }
  },

  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const category = await service.getById(req.params.id);
      if (!category)
        return res.status(404).json({ message: "Categoria não encontrada" });
      res.json(category);
    } catch (err) {
      next(err);
    }
  },

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const category = await service.create(req.body);
      res.json({ message: "Categoria criada com sucesso", category });
    } catch (err) {
      next(err);
    }
  },

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const category = await service.update(req.params.id, req.body);
      if (!category)
        return res.status(404).json({ message: "Categoria não encontrada" });

      res.json({ message: "Categoria atualizada com sucesso", category });
    } catch (err) {
      next(err);
    }
  },

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const category = await service.delete(req.params.id);
      if (!category)
        return res.status(404).json({ message: "Categoria não encontrada" });

      res.json({ message: "Categoria removida com sucesso" });
    } catch (err) {
      next(err);
    }
  },
};

module.exports = categoryController;
