import express from "express";
import {
  login,
  register,
  logout,
  forgetPassword,
  resetPassword,
} from "../controllers/authController.js";

const router = express.Router();

router.post("/login", login);

router.post("/register", register);

router.post("/logout", logout);

router.post("/forget-password", forgetPassword);

router.post("/reset-password/:userId", resetPassword);

export default router;
