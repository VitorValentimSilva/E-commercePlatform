import type { Request, Response, NextFunction } from "express";

const ProductService = require("../services/product.service");

const service = new ProductService();

const productController = {
  async getAll(_req: Request, res: Response, next: NextFunction) {
    try {
      res.json(await service.getAll());
    } catch (err) {
      next(err);
    }
  },

  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const product = await service.getById(req.params.id);
      if (!product)
        return res.status(404).json({ message: "Produto não encontrada" });
      res.json(product);
    } catch (err) {
      next(err);
    }
  },

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const product = await service.create(req.body);
      res.json({ message: "Produto criada com sucesso", product });
    } catch (err) {
      next(err);
    }
  },

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const product = await service.update(req.params.id, req.body);
      if (!product)
        return res.status(404).json({ message: "Produto não encontrada" });

      res.json({ message: "Produto atualizada com sucesso", product });
    } catch (err) {
      next(err);
    }
  },

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const product = await service.delete(req.params.id);
      if (!product)
        return res.status(404).json({ message: "Produto não encontrada" });

      res.json({ message: "Produto removida com sucesso" });
    } catch (err) {
      next(err);
    }
  },
};

module.exports = productController;
