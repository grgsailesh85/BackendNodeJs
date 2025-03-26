import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getCategories,
  getProductById,
  updateProduct,
} from "../controllers/productController.js";
import auth from "../middlewares/auth.js";
import roleBasedAuth from "../middlewares/roleBasedAuth.js";
import { ROLE_ADMIN } from "../constants/roles.js";

const router = express.Router();

/**
 * URL: /api/products
 * Method: GET
 * Get all Products
 */
router.get("/", getAllProducts);

router.get("/categories", getCategories);

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
router.post("/", auth, createProduct);

/**
 * URL: /api/products/:id
 * Method: PUT
 * Update Products
 */
router.put("/:id", auth, updateProduct);

/**
 * URL: /api/products/:id
 * Method: DELETE
 * Delete Products
 */
router.delete("/:id", [auth, roleBasedAuth(ROLE_ADMIN)], deleteProduct);

export default router;
