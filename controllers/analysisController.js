import SoilAnalysis from "../models/SoilAnalysis.js";
import SoilTest from "../models/SoilTest.js";
import SoilReport from "../models/SoilReport.js";
import analyzeSoil from "../services/analysisService.js";

export const analyzeSoilTest = async (req, res) => {
  try {
    const soilTest = await SoilTest.findById(req.params.id);
    if (!soilTest) {
      return res.status(404).json({ message: "Soil test not found" });
    }

    // Run analysis
    const analysisResult = analyzeSoil(soilTest);

    const analysis = await SoilAnalysis.create({
      soilTest: soilTest._id,
      ...analysisResult
    });

    // Create soil report
    const report = await SoilReport.create({
      user: soilTest.user,
      soilTest: soilTest._id,
      analysis: analysis._id,
      recommendedCrops: [],
      fertilizerPlan: [],
      approvedByAdmin: false
    });

    soilTest.status = "analyzed";
    await soilTest.save();

    res.json({
      message: "Soil analysis completed and report generated",
      analysis,
      report
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
