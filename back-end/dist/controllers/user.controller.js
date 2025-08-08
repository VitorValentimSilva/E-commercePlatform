"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserService = require("../services/user.service");
const service = new UserService();
const userController = {
    async getAll(_req, res, next) {
        try {
            res.json(await service.getAll());
        }
        catch (err) {
            next(err);
        }
    },
    async getById(req, res, next) {
        try {
            const p = await service.getById(req.params.id);
            if (!p)
                return res.status(404).json({ message: "Not found" });
            res.json(p);
        }
        catch (err) {
            next(err);
        }
    },
};
module.exports = userController;
//# sourceMappingURL=user.controller.js.map