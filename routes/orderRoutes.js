import express from "express";
import controller from "../controllers/orderController.js";

const router = express.Router();

/* USER */
router.post("/", controller.placeOrder);
router.get("/user/:userId", controller.getOrdersByUser);

/* ADMIN */
router.get("/", controller.getAllOrders);
router.put("/:id/status", controller.updateOrderStatus);

export default router;
