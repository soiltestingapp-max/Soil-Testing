import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  items: Array,
  addressId: mongoose.Schema.Types.ObjectId,
  amount: Number,
  paymentStatus: String,
  orderStatus: { type: String, default: "placed" }
});

export default mongoose.model("Order", orderSchema);
