import mongoose from "mongoose";

const soilAnalysisSchema = new mongoose.Schema(
  {
    soilTest: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SoilTest",
      required: true
    },

    nitrogenStatus: String,
    phosphorusStatus: String,
    potassiumStatus: String,
    phStatus: String,

    overallHealth: {
      type: String,
      enum: ["Poor", "Moderate", "Good"]
    }
  },
  { timestamps: true }
);

export default mongoose.model("SoilAnalysis", soilAnalysisSchema);
