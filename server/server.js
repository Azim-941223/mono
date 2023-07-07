import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import mongoose from "mongoose";

mongoose
  .connect(
    "mongodb+srv://Almazbek:wwwwww@cluster0.62i5xjd.mongodb.net/mono?retryWrites=true&w=majority"
  )
  .then(() => console.log("DB ok"))
  .catch((err) => console.log("DB error", err));

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!")
});

app.listen(process.env.PORT, () => {
  console.log(`liste port ${process.env.PORT}`);
});