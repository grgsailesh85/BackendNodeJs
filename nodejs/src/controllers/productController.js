// request and response related task are done in controller

import productService from "../services/productService.js";

const getAllProducts = async (req, res) => {
  const products = await productService.getAllProducts();
  res.json(products);
};

const getProductById = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await productService.getProductById(id);
    if (!product) return res.status(404).send("Product Not Found");
    res.json(product);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const createProduct = async (req, res) => {
  const userId = req.user.id;
  try {
    const data = await productService.createProduct(req.body, userId);
    res.json(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateProduct = async (req, res) => {
  const id = req.params.id;
  const userId = req.user.id
  try {
    const product = await productService.getProductById(id);

    if (!product) return res.status(404).send("Product Not Found");

    if(product.createdBy != userId) {
      return res.status(403).send("Access Denied")
    }

    const data = await productService.updateProduct(id, req.body);
    
    res.send(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const deleteProduct = async (req, res) => {
  const id = req.params.id;
  try {
    await productService.deleteProduct(id);
    res.send(`Product deleted successfully of id: ${id}`);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getCategories = async (req, res) => {
  const categories = await productService.getCategories();
  res.json(categories);
};

export {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  getCategories,
};
