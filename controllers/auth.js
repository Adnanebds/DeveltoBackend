import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";

//Register user
export const register = async (req, res, next) => {
  try {
    // Hash the password
    const hash = bcrypt.hashSync(req.body.password);
    // Create object to store user in
    const newUser = new User({
      ...req.body,
      password: hash,
    });
    // Create a new token
    const token = jwt.sign({ id: newUser._id }, process.env.JWT);
    // Save the token to an new user
    newUser.tokens = [...newUser.tokens, { token }];
    // Save user
    await newUser.save();
    res.status(200).send("User has been created.");
  } catch (err) {
    next(err);
  }
};

// login function
export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    // If user not found, return error
    if (!user) return next(createError(404, "User not found!"));
    // Compare password with hashed password
    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    // If the password is incorrect, return error(pay attention to the !)
    if (!isPasswordCorrect)
      return next(createError(400, "Wrong password!"));
    // Create a new token
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT);
    // Displays user details in Insomnia
    const { password, ...otherDetails } = user._doc;
    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({ details: { ...otherDetails, role:user.role }});
  } catch (err) {
    next(err);
  }
};

// Clear the access_token cookie
export const logout = async (req, res, next) => {
  try {
    res.cookie('access_token', '', {maxAge: 0})
    res.send({
        message: 'success'
    })
  } catch (err) {
    next(err);
  }
};