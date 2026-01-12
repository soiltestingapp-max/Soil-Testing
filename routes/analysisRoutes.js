import express from "express";
import { analyzeSoilTest } from "../controllers/analysisController.js";
import auth from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/:id", auth, analyzeSoilTest);

export default router;
