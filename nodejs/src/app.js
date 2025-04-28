import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import productRoutes from "./routes/productRoute.js";
import userRoutes from "./routes/userRoute.js";
import authRoutes from "./routes/authRoute.js";
import orderRoutes from "./routes/orderRoute.js";
import viewRoutes from "./routes/viewRoute.js";
import connectDB from "./config/database.js";
import logger from "./middlewares/logger.js";
import connectCloudinary from "./config/cloudinary.js";
import multer from "multer";

dotenv.config(); // set up dotenv package to import the variable from .env file

const port = process.env.PORT || 5000; // import the variable PORT from .env file

const app = express();

connectDB();
connectCloudinary(); //connect to cloudinary

const upload = multer({
  storage: multer.memoryStorage(), // store image in memory
});

app.use(logger); // global scope middleware

// parse application/x-www-form-urlencoded:- for data send from form by user
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json :- for data from postman
app.use(bodyParser.json());

app.set("view engine", "hbs"); //set view engine to hbs

//create route with express
app.get("/", (req, res) => {
  // res.send("<h1>hello sailesh</h1>")
  // res.send({message: "Hello Sailesh"})
  // res.json({message: "Hello Sailesh"})
  // res.status(500).json({message: "Hello Sailesh"})
  // If no any status is send then by default 200 status is send
  // res.send("HomePage");
  res.json({
    name: "nodejs",
    status: "OK",
    verison: "1.0.0",
    url : "https://backend-node-js-eta.vercel.app/",
    port: port,
  });
});

// /api/products
app.use("/api/products", upload.array("images", 5), productRoutes);

// /api/users
app.use("/api/users", upload.single("image"), userRoutes);

app.use("/api/auth", authRoutes);

app.use("/api/orders", orderRoutes);

app.use("/page", viewRoutes);

//
app.get("/about", (req, res) => {
  res.send("About Page");
});

// renders hbs file from views folder
app.get("/home", (req, res) => {
  res.render("home", {
    username: "Sailesh",
  });
});

app.post("/about", (req, res) => {
  res.send("create data on about page");
});
app.get("/products", (req, res) => {
  res.send("Products");
});
app.get("/products/:id", (req, res) => {
  const id = req.params.id;
  const query = req.query;
  console.log(query);
  res.send(`Product's id: ${id}`);
});

// create server with express
app.listen(port, () => {
  console.log(`server started at port ${port}.....`);
});
