import Order from "../models/Order.js";

const getAllOrders = async (req, res) => {
  return await Order.find();
};

export default {
  getAllOrders,
};
