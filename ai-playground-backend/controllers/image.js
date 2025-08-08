// controllers/image.js
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const handleImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No image uploaded" });
    }

    const imageBase64 = req.file.buffer.toString("base64");

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent([
      {
        inlineData: {
          mimeType: req.file.mimetype,
          data: imageBase64
        }
      },
      {
        text: "Describe this image in detail."
      }
    ]);

    res.json({
      description: result.response.text()
    });
  } catch (error) {
    console.error("Error in image analysis:", error);
    res.status(500).json({ error: "Error processing image analysis" });
  }
};
