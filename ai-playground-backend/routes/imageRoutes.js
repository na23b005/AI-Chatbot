// routes/image.js
import express from "express";
import multer from "multer";
import { handleImage } from "../controllers/image.js";

const router = express.Router();

// Simple multer setup that stores files in memory
const upload = multer({ storage: multer.memoryStorage() });

router.post("/", upload.single("image"), handleImage);

export default router;
