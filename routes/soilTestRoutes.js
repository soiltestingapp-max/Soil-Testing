import express from "express";
import {
  createSoilTest,
  getMySoilTests
} from "../controllers/soilTestController.js";
import auth from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/", auth, createSoilTest);
router.get("/my", auth, getMySoilTests);

export default router;
