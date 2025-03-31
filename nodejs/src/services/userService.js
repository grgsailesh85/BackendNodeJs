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

const updateMerchant = async (id, data) => {
  const updateData = {
    address: data.address,
    name:data.name,
    phone: data.phone, 
  }
  if (data.password) updateData.password = bcrypt.hashSync(data.password)
  return await User.findByIdAndUpdate(
    id,
    updateData,
    { new: true }
  );
};

export default { createUser, createMerchant, updateMerchant };
