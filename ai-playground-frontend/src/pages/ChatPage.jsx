import { useState } from "react";

function ChatPage() {
  const [mode, setMode] = useState("conversation");
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input && !file) return;

    const userMessage = {
      role: "user",
      content: mode === "conversation" ? input : file?.name,
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setFile(null);

    setLoading(true);

    try {
      if (mode === "conversation") {
        const formData = new FormData();
        if (file) {
          formData.append("audio", file);
        } else {
          formData.append("text", input);
        }

        const response = await fetch("https://pilvo.onrender.com/conversation", {
          method: "POST",
          body: formData,
        });

        if (!response.ok) throw new Error(`Server error: ${response.status}`);

        const data = await response.json();
        const aiMessage = {
          role: "assistant",
          content: data.transcript_and_diarization
            ? `Transcript:\n${data.transcript_and_diarization}\n\nSummary:\n${data.summary}`
            : "No response from AI.",
        };
        setMessages((prev) => [...prev, aiMessage]);
      } else if (mode === "image") {
        const formData = new FormData();
        formData.append("image", file);

        const response = await fetch("https://pilvo.onrender.com/image", {
          method: "POST",
          body: formData,
        });

        if (!response.ok) throw new Error(`Server error: ${response.status}`);

        const data = await response.json();
        const aiMessage = {
          role: "assistant",
          content: data.description || "No description received.",
        };
        setMessages((prev) => [...prev, aiMessage]);
      }
    } catch (error) {
      console.error("Error calling AI backend:", error);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Sorry, something went wrong. Please try again." },
      ]);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#191a1a] via-[#222223] to-[#302f30] flex flex-col text-white transition-all">

      <div className="w-full max-w-5xl mx-auto py-6 px-4 sm:px-8 text-center space-y-3">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold pt-20 md:pt-40 tracking-tight drop-shadow-lg">
          OmniMind
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-300">
          one AI, many capabilities <br />
          Analyze conversations, interpret images, and summarize documents <br />
          all in one place.
        </p>
      </div>

<div className="flex-1 overflow-y-auto px-4 py-20 sm:px-8 w-full  max-w-5xl mx-auto space-y-4 pb-28 sm:pb-36">        {messages.map((m, idx) => (
          <div
            key={idx}
            className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`px-4 py-3 pb-10 rounded-[2rem] shadow-md max-w-[85%] sm:max-w-4xl text-[14px] sm:text-[15px] break-words whitespace-pre-wrap ${
                m.role === "user"
                  ? "bg-gradient-to-l from-[#2b2b2b] to-[#1a1a1a]"
                  : "bg-gradient-to-r from-[#1f1f1f] to-[#0f0f0f]"
              }`}
            >
              {m.content}
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex justify-start">
            <div className="px-4 py-3 rounded-[2rem] bg-gradient-to-r from-[#1f1f1f] to-[#0f0f0f] max-w-[85%] sm:max-w-md text-[14px] sm:text-[15px] shadow-md">
              AI is typing...
            </div>
          </div>
        )}
      </div>

      {/* Input Section */}
      <div className="fixed bottom-0 left-0 w-full bg-black/70 backdrop-blur-md border-t border-white/10 py-4">
        <div className="flex flex-col gap-3 px-4 sm:px-8 max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-2">
            <select
              value={mode}
              onChange={(e) => setMode(e.target.value)}
              className="border-none outline-none rounded-full px-4 py-2 ring-1 ring-gray-200 bg-[#303030] text-white focus:ring-2 focus:ring-[#313232] transition-all"
            >
              <option value="conversation">Conversation</option>
              <option value="image">Image</option>
            </select>

            <input
              type="file"
              accept={mode === "conversation" ? "audio/*" : "image/*"}
              onChange={(e) => setFile(e.target.files[0])}
              className="rounded-full px-4 py-2 bg-[#303030] text-gray-400 text-sm border-none focus:ring-2 focus:ring-[#313232] transition-all"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 rounded-full px-5 py-3 bg-[#303030] text-white placeholder-gray-400 shadow focus:outline-none focus:ring-2 focus:ring-[#313232] transition-all text-sm sm:text-base"
              disabled={loading}
            />
            <button
              onClick={sendMessage}
              className="rounded-full bg-gradient-to-tr from-[#232424] to-black/90 text-white px-6 py-3 font-semibold shadow-md hover:scale-105 transition-all"
              disabled={loading}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatPage;
