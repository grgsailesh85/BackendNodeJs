// HTTP module - create server
// npm install -D nodemon

import http from "http";

const PORT = 5000;

// Request - user sends / request to server
// Response - Server sends to user
const app = http.createServer(function (request, response) {
  //content-type : text/plain
  //content-type : text/html
  response.writeHead(200, { "content-type": "text/html" });
  if ((request.url == "/")) {
    return response.end("<h1>Hello World</h1>");
  } else if (request.url == "/about") {
    response.end("<h1>About Page</h1>");
  } else if (request.url == "/posts") {
    return response.end("<h1>Post Page</h1>");
  } else {
    return response.end("<h1>Page not Found</h1>")
  }
});

app.listen(PORT, () => {
  console.log("Server is runnning at port 5000...");
});
