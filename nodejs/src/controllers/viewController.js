import productService from "../services/productService.js";

const homePage = (req, res) => {
  res.render("home", { username: "James" });
};

const productsPage = async (req, res) => {
  const products = await productService.getAllProducts(req.query);

  res.render("products", { products });
};

const aboutPage = (req, res) => {
  res.render("about", { username: "Sailesh Gurung" });
};

const contactPage = (req, res) => {
  res.render("contact", { username: "Sailesh Gurung" });
};

const productByIdPage = async (req, res) => {
  const product = await productService.getProductById(req.params.id);

  res.render("product", { product });
};

export { homePage, productsPage,aboutPage, contactPage , productByIdPage };
