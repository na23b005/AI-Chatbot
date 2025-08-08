import express from "express";
import multer from "multer";
import { handleSummarize } from "../controllers/summarize.js";

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post("/", upload.single("file"), handleSummarize);

export default router;
