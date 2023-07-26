import dotenv from "dotenv";
dotenv.config();
import express, { Express, Request, Response } from "express";
import cors from "cors";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { validationResult } from "express-validator";

import { registerValidation } from "./validations/auth";
import checkAuth from "./utils/checkAuth";
import { RequestType } from "./types/express";
import * as UserController from "./controllers/UserController";

mongoose
  .connect(
    "mongodb+srv://Almazbek:wwwwww@cluster0.62i5xjd.mongodb.net/mono?retryWrites=true&w=majority"
  )
  .then(() => console.log("DB ok"))
  .catch((err) => console.log("DB error", err));

const app: Express = express();

app.use(express.json());
app.use(cors());

app.post("/auth/login", UserController.login);

app.post("/auth/register", registerValidation, UserController.register);

app.get("/auth/me", checkAuth, UserController.getMe);

app.listen(process.env.PORT, () => {
  console.log(`liste port ${process.env.PORT}`);
});