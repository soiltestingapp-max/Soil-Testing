import mongoose from "mongoose";

const soilSampleSchema = new mongoose.Schema({
  sample_id: {
    type: String,
    required: true,
    unique: true
  },
  sample_date: {
    type: Date,
    default: Date.now
  },
  soil_type: {
    type: String,
    enum: ["Sandy", "Clay", "Loamy", "Silty", "Peaty", "Chalky", "Unknown"],
    default: "Unknown"
  },
  status: {
    type: String,
    enum: ["uploaded", "processing", "analyzed", "completed"],
    default: "uploaded"
  },
  location: {
    village: String,
    district: String,
    state: String
  },
  image_url: {
    type: String,
    required: true
  }
}, { timestamps: true });

export default mongoose.model("SoilSample", soilSampleSchema);
