import User from "../models/User.js";
import bcrypt from "bcryptjs";
import ResetPassword from "../models/ResetPassword.js";

const login = async (data) => {
  const user = await User.findOne({
    $or: [{ email: data.email }, { phone: data.phone }], // login can be done either using phone number or email number so we use $or operator
  });
  if (!user)
    throw {
      statusCode: 404,
      message: "User not found",
    };
  const isPasswordMatch = bcrypt.compareSync(data.password, user.password); // compare password;
  if (!isPasswordMatch) {
    throw {
      statusCode: 400,
      message: "Incorrect email or Password",
    };
  }

  return user;
};

const register = async (data) => {
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
    password: hashedPassword, // store hashed password in database table
    roles: data.roles,
  });
};

const forgetPassword = async (email) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw {
      statusCode: 404,
      message: "User not found",
    };
  }

  const otp = Math.floor(Math.random() * 1000000); // generate random 6 digit otp
  await ResetPassword.create({
    userId: user?._id,
    token: otp,
  });

  // send email to user
  // {{apiUrl}}/api/auth/reset-password/:userId?Token=<otp>

  return { message: "Reset Password Link has been sent to yor email" };
};

const resetPassword = async (userId, token, password) => {
  const data = await ResetPassword.findOne({
    userId,
    expiresAt: { $gt: Date.now() },
  });
  if (!data || data.token !== token) {
    throw {
      statusCode: 400,
      message: "Invalide Token",
    };
  }
  if (data.isUsed) {
    throw {
      statusCode: 400,
      message: "Token has already been used",
    };
  }

  const hashedPassword = bcrypt.hashSync(password);
  await User.findByIdAndUpdate(userId, {
    password: hashedPassword,
  });

  await ResetPassword.findByIdAndUpdate(data._id, {
    isUsed: true,
  });

  return { message: "Password reset successfully" };
};

export default { login, register, forgetPassword, resetPassword };
