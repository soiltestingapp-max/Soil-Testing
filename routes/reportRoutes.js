import express from "express";
import { getMyReports } from "../controllers/reportController.js";
import auth from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/my", auth, getMyReports);

export default router;
