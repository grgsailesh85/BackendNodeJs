import userService from "../services/userService.js";

const createUser = async (req, res) => {
  try {
    const user = await userService.createUser(req.body);
    res.json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const createMerchant = async (req, res) => {
  try {
    const user = await userService.createMerchant(req.body);
    res.json(user);
  } catch (error) {
    res.status(error.statusCode || 500).send(error.message);
  }
};

const updateMerchant = async (req, res) => {
  try {
    const user = await userService.updateMerchant(req.params.id,  req.body);
    res.json(user);
  } catch (error) {
    res.status(error.statusCode || 500).send(error.message);
  }
};


export { createUser, createMerchant, updateMerchant };
