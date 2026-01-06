import { model, models, Schema } from "mongoose";
import { User } from "../types/user";

const userSchema = new Schema<User>({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
});

export const UserModel = models.User || model<User>("User", userSchema);
