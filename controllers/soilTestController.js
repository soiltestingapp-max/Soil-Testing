import SoilTest from "../models/SoilTest.js";

export const createSoilTest = async (req, res) => {
  try {
    const soilTest = await SoilTest.create({
      user: req.user.id,
      ...req.body
    });

    res.status(201).json(soilTest);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getMySoilTests = async (req, res) => {
  try {
    const tests = await SoilTest.find({ user: req.user.id });
    res.json(tests);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
