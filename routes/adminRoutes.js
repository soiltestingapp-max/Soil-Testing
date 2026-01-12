import express from "express";
import { approveReport } from "../controllers/adminController.js";
import auth from "../middlewares/authMiddleware.js";
import adminOnly from "../middlewares/adminMiddleware.js";

const router = express.Router();

router.put("/approve/:id", auth, adminOnly, approveReport);

export default router;
