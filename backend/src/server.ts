/** @format */
import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import foodRouter from "./router/food";
import userRouter from "./router/user";
import orderRouter from "./router/order";
import { dbConnect } from "./configs/database.config";
dbConnect();
const app = express();
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:4200"],
  })
);
app.get("/", (req, res) => {
  res.send("Welcome To Foodmine API");
});
app.use("/api/foods", foodRouter);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);
const port = 8000;
app.listen(port, () => {
  console.log(`Server Running on port ${port}`);
});
