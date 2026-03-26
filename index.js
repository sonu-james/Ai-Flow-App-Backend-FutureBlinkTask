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

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

