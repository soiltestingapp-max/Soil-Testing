import SoilReport from "../models/SoilReport.js";

export const approveReport = async (req, res) => {
  try {
    const report = await SoilReport.findById(req.params.id);
    report.approvedByAdmin = true;
    await report.save();

    res.json({ message: "Report approved" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
