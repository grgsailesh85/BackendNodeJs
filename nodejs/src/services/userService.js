import { ROLE_MERCHANT, ROLE_USER } from "../constants/roles.js";
import User from "../models/User.js";
import bcrypt from "bcryptjs";

const createUser = async (data) => {
  const user = await User.create(data);
  // await User.syncIndexes();
  return user;
};

const createMerchant = async (data) => {
  const user = await User.findOne({
    $or: [{ email: data.email }, { phone: data.phone }],
  });
  if (user)
    throw {
      statusCode: 409,
      message: "User already exists",
    };
  // hash password
  const hashedPassword = bcrypt.hashSync(data.password);

  return await User.create({
    address: data.address,
    name: data.name,
    phone: data.phone,
    email: data.email,
    password: hashedPassword,
    //when merchant is created then user role and mechant role is set by default
    roles: [ROLE_USER, ROLE_MERCHANT],
  });
};

const updateUser = async (id, data) => {
  const updateData = {
    address: data.address,
    name: data.name,
    phone: data.phone,
  };

  if (data.password) updateData.password = bcrypt.hashSync(data.password);
  
  return await User.findByIdAndUpdate(id, updateData, { new: true });
};

const deleteUser = async (id) => {
  await User.findByIdAndDelete(id);
};

const getAllUsers = async () => {
  const users = await User.find();
  return users;
};

const getUserById = async (id) => {
  const user = await User.findById(id);
  return user;
};

export default {
  createUser,
  createMerchant,
  updateUser,
  deleteUser,
  getAllUsers,
  getUserById,
};
