import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { userRouter } from "./routes/users.js";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/auth", userRouter);

//connect to mongodb
const DB_URI = process.env.DATABASE_URI;
async function connectToDB() {
  try {
    mongoose.connect(DB_URI);
    console.log("Conected to databse");
  } catch (error) {
    console.log(error);
  }
}
connectToDB();

app.listen(5000, () => {
  console.log("Server started");
});
