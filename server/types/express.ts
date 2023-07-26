import { Request } from "express";
import { FilterQuery } from "mongoose";
import { User } from "../models/User";

export interface RequestType extends Request {
  userId?: FilterQuery<User>;
}
