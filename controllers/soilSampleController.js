import SoilSample from "../models/soilSample.js";

/* 1️⃣ Upload Soil Image */
const createSoilSample = async (req, res) => {
  try {
    const sample = await SoilSample.create({
      sample_id: `SOIL-${Date.now()}`,
      image_url: req.body.image_url,
      location: req.body.location
    });

    res.status(201).json({
      message: "Soil image uploaded successfully",
      sample
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/* 2️⃣ Get All Soil Samples */
const getAllSoilSamples = async (req, res) => {
  try {
    const samples = await SoilSample.find().sort({ createdAt: -1 });
    res.json(samples);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/* 3️⃣ Get Soil Sample by ID */
const getSoilSampleById = async (req, res) => {
  try {
    const sample = await SoilSample.findById(req.params.id);
    if (!sample) {
      return res.status(404).json({ message: "Sample not found" });
    }
    res.json(sample);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/* 4️⃣ Update Soil Analysis */
const updateSoilAnalysis = async (req, res) => {
  try {
    const updated = await SoilSample.findByIdAndUpdate(
      req.params.id,
      {
        soil_type: req.body.soil_type,
        status: "analyzed"
      },
      { new: true }
    );

    res.json({
      message: "Soil analysis updated",
      updated
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default {
  createSoilSample,
  getAllSoilSamples,
  getSoilSampleById,
  updateSoilAnalysis
};
