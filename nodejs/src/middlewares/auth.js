import { verifyJWT } from "../utils/jwt.js";

const auth = (req, res, next) => {
  const cookie = req.headers.cookie;

  if (!cookie) return res.status(401).send("User not authenticated");

  const authToken = cookie.split("=")[1];
  // console.log(authToken );

  verifyJWT(authToken)
    .then((data) => {
      req.user = data;
      console.log(req.user);
      next();
    })
    .catch(() => {
      res.status(400).send("Invalid Token");
    });
};

export default auth;
