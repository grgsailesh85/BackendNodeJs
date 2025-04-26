import express from "express";
import {
  aboutPage,
  contactPage,
  homePage,
  productByIdPage,
  productsPage,
} from "../controllers/viewController.js";

const router = express.Router();

router.get("/home", homePage);

router.get("/products", productsPage);

router.get("/about", aboutPage);

router.get("/contact", contactPage);

router.get("/products/:id", productByIdPage);

export default router;
