import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const handleConversation = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No audio file uploaded" });
    }

  
    const audioBase64 = req.file.buffer.toString("base64");

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent([
      {
        inlineData: {
          mimeType: req.file.mimetype || "audio/wav",
          data: audioBase64
        }
      },
      {
        text: `Please:
        1. Transcribe this audio accurately.
        2. Identify different speakers and label them as Speaker 1, Speaker 2, etc.
        3. Provide timestamps for each speaker change if possible.
        4. At the end, write a clear 3-4 sentence summary of the conversation.
        
        Output format:
        === TRANSCRIPT ===
        Speaker X [start - end]: text...
        ...
        
        === SUMMARY ===
        [Your summary here]`
      }
    ]);

    const outputText = result.response.text();

    const transcriptMatch = outputText.match(/=== TRANSCRIPT ===([\s\S]*?)=== SUMMARY ===/);
    const summaryMatch = outputText.match(/=== SUMMARY ===([\s\S]*)/);

    const transcript = transcriptMatch ? transcriptMatch[1].trim() : "";
    const summary = summaryMatch ? summaryMatch[1].trim() : "";

    res.json({
      transcript_and_diarization: transcript,
      summary
    });

  } catch (error) {
    console.error("Error in conversation analysis:", error);
    res.status(500).json({ error: "Error processing conversation analysis" });
  }
};
