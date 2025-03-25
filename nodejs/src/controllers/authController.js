import authService from "../services/authService.js";
import { PASSWORD_REGEX } from "../constants/regex.js";
import { formatUserData } from "../helpers/dataFormatter.js";
import { createJWT } from "../utils/jwt.js";

const login = async (req, res) => {
  try {
    const { email, phone, password } = req.body;

    if (!email && !phone)
      return res.status(400).send("Email or Phone is required");

    if (!password) return res.status(400).send("Password is required");

    const data = await authService.login(req.body);

    const formattedData = formatUserData(data);

    const token = createJWT(formattedData);
    // console.log(token);

    res.cookie("authToken", token);

    res.json(formattedData);
  } catch (error) {
    res.status(error.statusCode || 500).send(error.message);
  }
};

const register = async (req, res) => {
  try {
    const { address, email, name, phone, password, confirmPassword } = req.body;

    if (!address?.city) return res.status(422).send("Address City is required");
    if (!email) return res.status(422).send("Email is required");
    if (!name) return res.status(422).send("Name is required");
    if (!phone) return res.status(422).send("Phone is required");
    if (!password) return res.status(422).send("Password is required");
    if (!confirmPassword)
      return res.status(422).send("Confirm password is required");

    if (password !== confirmPassword)
      return res
        .status(422)
        .send("Password and Confirm Password does not match");

    if (!PASSWORD_REGEX.test(password))
      return res
        .status(422)
        .send(
          "Password must contain uppercase, lowercase, number and special character"
        );

    const data = await authService.register(req.body);

    const formattedData = formatUserData(data);

    const token = createJWT(formattedData);
    // console.log(token);

    res.cookie("authToken", token);

    res.json(formatUserData(data));
  } catch (error) {
    res.status(error.statusCode || 500).send(error.message);
  }
};

export { login, register };
