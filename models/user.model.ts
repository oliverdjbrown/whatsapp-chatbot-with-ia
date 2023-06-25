import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, "The name is required"],
  },
  tel: {
    type: String,
    required: [true, "Tel is required"],
  },
});

const User = model('User', UserSchema);

export default User;
