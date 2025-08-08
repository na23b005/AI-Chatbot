import express from "express";
import cors from "cors";


import conversationRoutes from "./routes/conversationRoutes.js";
import imageRoutes from "./routes/imageRoutes.js";
import summarizeRoutes from "./routes/summarizeRoutes.js";


import dotenv from "dotenv";
dotenv.config();


const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

app.use("/conversation", conversationRoutes);
app.use("/image", imageRoutes);
app.use("/summarize", summarizeRoutes);

app.get("/", (req, res) => {
  res.send("AI Playground Backend is running 🚀");
});

app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
