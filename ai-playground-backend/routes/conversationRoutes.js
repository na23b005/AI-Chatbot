import express from "express";
import multer from "multer";
import { handleConversation } from "../controllers/conversation.js";

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post("/", upload.single("audio"), handleConversation);

export default router;
