import mongoose from "mongoose";

interface DocumentResult<T> {
  _doc: T;
}

export interface User extends DocumentResult<User> {
  phone: string;
  name: string;
  passwordHash: string;
}

const UserSchema = new mongoose.Schema(
  {
    phone: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    passwordHash: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<User>("User", UserSchema);
