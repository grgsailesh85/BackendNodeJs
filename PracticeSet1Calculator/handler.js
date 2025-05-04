const requestHandler = (req, res) => {
  console.log(req.url, req.method);
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
      <html>
        <head><title>Hello, My name is Sailesh Gurung</title></head>
        <body>
          <h1>Welcome to my Calculator</h1>
          <a href="/calculator">Go To Calculator</a>
        </body>  
      <html>  
    `);
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write(`
    <html>
      <head><title>Hello, My name is Sailesh Gurung</title></head>
      <body>
        <h1>404 Page Does not Exist</h1>
        <a href="/">Go To Home</a>
      </body>  
    <html>  
  `);
  return res.end();
};

exports.requestHandler = requestHandler;
