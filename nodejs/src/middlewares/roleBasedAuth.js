const roleBasedAuth = (role) => {
  return (req, res, next) => {
    // const user = req.user;
    if (req.user.roles.includes(role)) return next();

    res.status(403).send("Access Denied.");
  };
};
export default roleBasedAuth;
