// Defines a function to handle HTTP requests and responses
const sumRequestHandler = (req, res) => {
  console.log("In Sum Request Handler", req.url);
  // Creates an empty array to store incoming data chunks.
  const body = [];

  // Listens for incoming data and pushes each chunk into the body array.
  req.on("data", (chunk) => body.push(chunk));

  // Waits until all data is received, then starts processing it.
  req.on("end", () => {
    // Joins all chunks into one, converts it to a string (e.g. "first=10&second=20").
    const bodyStr = Buffer.concat(body).toString();

    // Converts the String into a URLSearchParams object, which allows easy access to the parameters.
    // Parses the string into key-value pairs using URLSearchParams
    const params = new URLSearchParams(bodyStr);

    // Converts the parsed parameters into a plain object (e.g. { first: "10", second: "20" }).
    const bodyObj = Object.fromEntries(params);

    // Converts values to numbers and adds them.
    const result = Number(bodyObj.first) + Number(bodyObj.second);
    console.log(result);

    // Tells the browser that the response will be in HTML format
    res.setHeader("Content-Type", "text/html");
    res.write(`
        <html>
          <head><title>Practise Set</title></head>
          <body>
            <h1>Your Sum is ${result}</h1>
            <a href="/">Go To Home</a>
          </body>  
        <html>  
      `);
    //Ends the response and sends it to the browser/client.
    return res.end();
  });
};

exports.sumRequestHandler = sumRequestHandler;
