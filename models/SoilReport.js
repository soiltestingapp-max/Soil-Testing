import mongoose from "mongoose";

const soilReportSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },

    soilTest: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SoilTest"
    },

    analysis: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SoilAnalysis"
    },

    recommendedCrops: [String],

    fertilizerPlan: [
      {
        nutrient: String,
        suggestion: String
      }
    ],

    approvedByAdmin: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

export default mongoose.model("SoilReport", soilReportSchema);
