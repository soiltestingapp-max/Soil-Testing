import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

import authRoutes from "./routes/authRoutes.js";
import soilTestRoutes from "./routes/soilTestRoutes.js";
import analysisRoutes from "./routes/analysisRoutes.js";
import reportRoutes from "./routes/reportRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";

dotenv.config();

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/soil-tests", soilTestRoutes);
app.use("/api/analysis", analysisRoutes);
app.use("/api/reports", reportRoutes);
app.use("/api/admin", adminRoutes);

app.get("/", (req, res) => {
  res.send("Server is working properly");
});

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected with Database!");
    app.listen(PORT, () =>
      console.log(`Server listening at port ${PORT}`)
    );
  })
  .catch((err) => console.error(err.message));
