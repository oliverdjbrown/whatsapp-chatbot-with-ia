import { Schema, model } from "mongoose";

const GroupSchema = new Schema({
  name: {
    type: String,
    required: [true, "The name is required"],
  },
});

const Group = model('Group', GroupSchema);

export default Group;
