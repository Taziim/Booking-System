import express from "express";
import jwt from "jsonwebtoken";
import UserModel from "../model/registreModel.js";
import { check, validationResult } from "express-validator";

const router = express.Router();

router.post("/register", [
    check("username","Username is required").isString(),
    check("email","Email is Required").isEmail(),
    check("password","Password is minimum 6 required").isLength({min:6})

],async (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        return res.status(400).json({mesaage:errors.array()})
    }
  try {
    const { username, email, password } = req.body;

    // Check if user already exists
    let user = await UserModel.findOne({ email });

    if (user) {
      return res.status(400).json({
        message: "User Already Exists",
      });
    }

    // Create new user
    user = new UserModel({
      username,
      email,
      password,
    });

    await user.save();

    // Generate JWT Token
    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1d" }
    );

    // Set Cookie
    res.cookie("auth_Token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });

    // Send response
    return res.status(201).json({
      message: "Registration successful",
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Registration Error:", error);

    return res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
});

export default router;