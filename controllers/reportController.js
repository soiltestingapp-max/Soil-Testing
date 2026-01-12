import SoilReport from "../models/SoilReport.js";

export const getMyReports = async (req, res) => {
  try {
    const reports = await SoilReport.find({ user: req.user.id })
      .populate("soilTest")
      .populate("analysis");

    res.json(reports);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
