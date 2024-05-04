import express from "express";
import * as dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
const app = express();

app.get("/server", (req, res) => {
  res.send("Hello from server!!!");
});

const port = process.env.PORT || 8000;

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Database connected...");
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log("Database not connected");
    console.log(error.message);
  }
};

start();
