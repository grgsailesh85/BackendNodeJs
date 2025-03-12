// request and response related task are done in controller

import productService from "../services/productService.js";

const getAllProducts = (req, res) => {
  const products = productService.getAllProducts();
  res.json(products);
};

const getProductById = (req, res) => {
  const id = req.params.id;
  const product = productService.getProductById(id);
  if (!product) res.status(404).send("Product Not Found");
  res.json(product);
};

const createProduct = (req, res) => {
  const data = productService.createProduct(req.body);
  res.send(data);
};

const updateProduct = (req, res) => {
  res.send("Update Products");
};

const deleteProduct = (req, res) => {
  res.send("Delete Products");
};

export {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
