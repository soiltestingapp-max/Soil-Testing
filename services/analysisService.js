const analyzeSoil = (soilTest) => {
  const result = {};

  // Nitrogen analysis
  if (soilTest.nitrogen < 280) result.nitrogenStatus = "Low";
  else if (soilTest.nitrogen > 560) result.nitrogenStatus = "High";
  else result.nitrogenStatus = "Optimal";

  // Phosphorus analysis
  if (soilTest.phosphorus < 10) result.phosphorusStatus = "Low";
  else if (soilTest.phosphorus > 25) result.phosphorusStatus = "High";
  else result.phosphorusStatus = "Optimal";

  // Potassium analysis
  if (soilTest.potassium < 110) result.potassiumStatus = "Low";
  else if (soilTest.potassium > 280) result.potassiumStatus = "High";
  else result.potassiumStatus = "Optimal";

  // pH analysis
  if (soilTest.ph < 6) result.phStatus = "Acidic";
  else if (soilTest.ph > 7.5) result.phStatus = "Alkaline";
  else result.phStatus = "Neutral";

  // Overall health logic
  const lowCount = Object.values(result).filter(v => v === "Low").length;

  if (lowCount >= 3) result.overallHealth = "Poor";
  else if (lowCount === 2) result.overallHealth = "Moderate";
  else result.overallHealth = "Good";

  return result;
};

export default analyzeSoil;
