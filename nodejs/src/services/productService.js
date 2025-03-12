// Database related Task
import fs from "fs";
const rawProducts = fs.readFileSync("./data/products.json", "utf8");

//convert string data into json data
const products = JSON.parse(rawProducts);

const getAllProducts = () => {
  return products;
};

const getProductById = (id) => {
  const product = products.find((p) => p.id == id);
  return product;
};

const createProduct = (data) => {
  products.push(data);
  fs.writeFileSync("./data/products.json", JSON.stringify(products));
  return "Data added successfully";
};

export default { getAllProducts, getProductById, createProduct };
