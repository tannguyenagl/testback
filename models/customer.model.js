import mongoose from "mongoose";
import timestamps from "mongoose-timestamp2";

const Schema = mongoose.Schema;

const customerSchema = new Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  gender: { type: String, required: true, enum: ["M", "F"] },
  email: { type: String, required: true },
  email: { type: String, required: true },
  description: { type: String, default: "" },
});

customerSchema.plugin(timestamps);

export default mongoose.model("Customer", customerSchema);
