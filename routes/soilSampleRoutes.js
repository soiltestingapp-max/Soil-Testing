import express from "express";
import controller from "../controllers/soilSampleController.js";

const router = express.Router();

/* Upload soil image */
router.post("/", controller.createSoilSample);

/* Get all samples */
router.get("/", controller.getAllSoilSamples);

/* Get single sample */
router.get("/:id", controller.getSoilSampleById);

/* Update soil analysis (ML/Admin) */
router.put("/:id/analyze", controller.updateSoilAnalysis);

export default router;
