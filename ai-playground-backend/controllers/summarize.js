
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const handleSummarize = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }


    const fileText = req.file.buffer.toString("utf-8");

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `
      Summarize the following text in a clear and concise way:
      ---
      ${fileText}
    `;

    const result = await model.generateContent(prompt);

    res.json({
      summary: result.response.text()
    });
  } catch (error) {
    console.error("Error in summarization:", error);
    res.status(500).json({ error: "Error processing summarization" });
  }
};
