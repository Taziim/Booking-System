import express from "express";
import jwt from "jsonwebtoken";
import UserModel from "../model/registreModel.js";
import bcrypt from "bcrypt";
import { check, validationResult } from "express-validator";
const router = express.Router();

router.post("/login", [
   check("username","Username is required").isString(),
      check("email","Email is Required").isEmail(),
      check("password","Password is minimum 6 required").isLength({min:6})
] , async (req, res) => {
  const { username, email, password } = req.body;
  const errors = validationResult(req)
      if(!errors.isEmpty()) {
          return res.status(400).json({mesaage:errors.array()})
      }

  try {
    const user = await UserModel.findOne({ email });
    
    if (!user) {
      res.status(400).json({ message: "Invalid Credential" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      res.status(400).json({ message: "Invalid Credential" });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "1d",
    });

    res.cookie("auth_Token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });

    res.status(200).json({ userId: user._id , username: user.username});
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "invalid Credentila" });
  }
});

export default router;