const logger = (req, res, next) => {
  const method = req.method;
  console.log(`Method: ${method} & Url: ${req.originalUrl}`);
  if (req.method === "PATCH")
    return res.status(405).send("Patch method not allowed");
  next();
};

export default logger;
