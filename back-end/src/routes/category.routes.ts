import express = require("express");
import categorySchema = require("../schemas/category.schema");

const categoryController = require("../controllers/category.controller");
const validateBody = require("../middlewares/validateBody");

const router = express.Router();

router.get("/", categoryController.getAll);
router.get("/:id", categoryController.getById);
router.post("/", validateBody(categorySchema), categoryController.create);
router.put("/:id", validateBody(categorySchema), categoryController.update);
router.delete("/:id", categoryController.delete);

module.exports = router;
