import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ["Investor", "Founder", "General Public"],
    required: true,
  },
});

const UserModel = model("User", UserSchema);
export default UserModel;
