import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
  updateProduct,
} from "../controllers/productController.js";

const router = express.Router();

/**
 * URL: /api/products
 * Method: GET
 * Get all Products
 */
router.get("/", getAllProducts);


/**
 * URL: /api/products/:id
 * Method: GET
 * Get products by id
 */
router.get("/:id", getProductById);

/**
 * URL: /api/products
 * Method: POST
 * Create product
 */
router.post("/", createProduct);

/**
 * URL: /api/products/:id
 * Method: PUT
 * Update Products
 */
router.put("/:id", updateProduct);

/**
 * URL: /api/products/:id
 * Method: DELETE
 * Delete Products
 */
router.delete("/:id", deleteProduct);

export default router;
