// core modules
const http = require("http");

// external module
const express = require("express");

//local modules
// const requestHandler = require("./user");

const app = express();
const server = http.createServer(app);

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
