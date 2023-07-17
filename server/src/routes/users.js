import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { userModel } from "../models/Users.js";
const router = express.Router();

router.post("/register", async (req, res) => {
  const { username, email, password } = await req.body;
  const user = await userModel.findOne({ $or: [{ username }, { email }] });

  if (user) {
    return res.json({
      message: "User with that username or email already exists",
      userFound: true,
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = userModel({
    username: username,
    email: email,
    password: hashedPassword,
  });
  newUser.save();
  res.json({ message: "User created succesfully" });
  console.log("New user created");
});

router.post("/login", async (req, res) => {
  const { username, email, password } = await req.body;

  const user = await userModel.findOne({ $and: [{ username }, { email }] });
  if (!user) {
    return res.json({ message: "User not found", userFound: false });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.json({
      message: "Password is not valid",
      userFound: true,
      passwordValid: false,
    });
  }

  const secret = process.env.ACCES_TOKEN_SECRET;

  const token = jwt.sign({ id: user._id }, secret, { expiresIn: "1h" });
  res.json({
    token,
    userID: user._id,
    user,
    userFound: true,
    passwordValid: true,
  });
});

export { router as userRouter };
