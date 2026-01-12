import mongoose from "mongoose";

const soilTestSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    nitrogen: Number,
    phosphorus: Number,
    potassium: Number,
    ph: Number,
    moisture: Number,
    organicCarbon: Number,

    status: {
      type: String,
      enum: ["pending", "analyzed"],
      default: "pending"
    }
  },
  { timestamps: true }
);

export default mongoose.model("SoilTest", soilTestSchema);
