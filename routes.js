import express from "express";
import { askAI } from "./controller/aiController.js";
import { savePrompt, getHistory } from "./controller/saveController.js";

const router = express.Router();

router.post("/ask-ai", askAI);
router.post("/save", savePrompt);
router.get("/history", getHistory);

export default router;