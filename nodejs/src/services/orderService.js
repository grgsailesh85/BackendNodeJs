import { ORDER_STATUS_PENDING } from "../constants/orderStatus.js";
import { ROLE_ADMIN } from "../constants/roles.js";
import Order from "../models/Order.js";

const getAllOrders = async (query) => {
  return await Order.find({
    status: query.status || ORDER_STATUS_PENDING,
  })
    .sort({ createdAt: -1 })
    .populate("orderItems.product")
    .populate("user", ["name", "email", "phone", "address"]);
};

const getOrdersByUser = async (query, userId) => {
  return await Order.find({
    user: userId,
    status: query.status || ORDER_STATUS_PENDING,
  })
    .sort({ createdAt: -1 })
    .populate("orderItems.product")
    .populate("user", ["name", "email", "phone", "address"]);
};

const getOrderById = async (id) => {
  const order = await Order.findById(id)
    .populate("orderItems.product")
    .populate("user", ["name", "email", "phone", "address"]);

  if (!order) {
    throw {
      statusCode: 404,
      message: "Order Not Found.",
    };
  }

  return order;
};

const createOrder = async (data) => {
  data.orderNumber = crypto.randomUUID();

  return await Order.create(data);
};

const updateOrderStatus = async (id, status) => {
  return await Order.findByIdAndUpdate(
    id,
    {
      status,
    },
    { new: true }
  );
};

const deleteOrder = async (id) => {
  return await Order.findByIdAndDelete(id);
};

export default {
  getAllOrders,
  createOrder,
  getOrdersByUser,
  getOrderById,
  updateOrderStatus,
  deleteOrder,
};
