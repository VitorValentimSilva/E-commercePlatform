import express = require("express");
import productSchema = require("../schemas/product.schema");

const productController = require("../controllers/product.controller");
const validateBody = require("../middlewares/validateBody");

const router = express.Router();

router.get("/", productController.getAll);
router.get("/:id", productController.getById);
router.post("/", validateBody(productSchema), productController.create);
router.put("/:id", validateBody(productSchema), productController.update);
router.delete("/:id", productController.delete);

module.exports = router;
