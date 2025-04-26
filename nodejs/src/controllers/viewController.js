const homePage = (req, res) => {
  res.render("home", {
    username: "Sailesh Gurung",
  });
};

const productsPage = (req, res) => {
  res.render("products");
};

export { homePage, productsPage };
