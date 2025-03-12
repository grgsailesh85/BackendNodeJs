import express from "express";
import dotenv from "dotenv";
import productRoutes from "./routes/productRoute.js";
import bodyParser from "body-parser";

const port = process.env.PORT || 5000; // import the variable PORT from .env file

const app = express();

// parse application/x-www-form-urlencoded:- for data send from form by user 
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json :- for data from postman
app.use(bodyParser.json());

dotenv.config(); // set up dotenv package to import the variable from .env file

//create route with express
app.get("/", (req, res) => {
  // res.send("<h1>hello sailesh</h1>")
  // res.send({message: "Hello Sailesh"})
  // res.json({message: "Hello Sailesh"})
  // res.status(500).json({message: "Hello Sailesh"})
  // If no any status is send then by default 200 status is send
  // res.send("HomePage");
  res.json({
    status: "OK",
    verison: "1.0.0",
    port: port,
  });
});

// /api/products
app.use("/api/products", productRoutes);

app.get("/about", (req, res) => {
  res.send("About Page");
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
