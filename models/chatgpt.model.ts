import { Schema, model } from "mongoose";

const ChatgptSchema = new Schema({
    prompt: {
    type: String,
    required: [true, "prompt is required"],
  },
});

const Chatgpt = model('Chatgpt', ChatgptSchema);

export default Chatgpt;
