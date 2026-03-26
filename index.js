import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./connect.js";
import aiRoutes from "./routes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// DB connect
connectDB();

// Routes
app.use("/api", aiRoutes);

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});