import express from "express";
import { createUser  } from "../controllers/userController.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

// /api/users
router.post("/", createUser);

router.post("/test", auth  , (req, res) => {
    res.send("Test Route Auth")
})

export default router;
