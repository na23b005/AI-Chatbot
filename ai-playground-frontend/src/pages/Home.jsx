import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#191a1a] via-[#222223] to-[#302f30] text-white flex flex-col">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-8 py-5 border-b border-white/10 backdrop-blur-md bg-black/40 sticky top-0 z-50">
        <h1 className="text-2xl font-extrabold tracking-tight text-white drop-shadow-lg">
          OmniMind
        </h1>
        <div className="md:flex hidden gap-6 text-gray-300 font-medium align-center ">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
         <a> <Link
            to="/chat"
            className="px-5 py-2 rounded-full bg-gradient-to-tr from-[#232424] to-black/90 hover:scale-105 transition-all duration-200 shadow-md"
          >
            Launch App
          </Link>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="flex-1 flex flex-col items-center justify-center text-center px-6 pt-20 md:pt-32">
        <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg leading-tight">
          One AI, Many Skills  All in One Place
        </h2>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl">
          Analyze conversations, interpret images, and summarize documents effortlessly.  
          OmniMind is your all-in-one multi-modal AI playground.
        </p>
        <Link
          to="/chat"
          className="mt-8 px-8 py-4 text-lg rounded-full bg-gradient-to-tr from-[#232424] to-black/90 hover:scale-105 transition-all duration-200 shadow-md"
        >
          Get Started
        </Link>
      </header>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        <div className="bg-black/60 p-6 rounded-2xl shadow-lg border border-white/10 hover:scale-105 transition-transform duration-300">
          <h3 className="text-xl font-bold mb-3">🎙 Conversation Analysis</h3>
          <p className="text-gray-300">
            Upload audio to transcribe speech and perform speaker diarization (up to 2 speakers) — all without relying on vendor diarization.
          </p>
        </div>
        <div className="bg-black/60 p-6 rounded-2xl shadow-lg border border-white/10 hover:scale-105 transition-transform duration-300">
          <h3 className="text-xl font-bold mb-3">🖼 Image Analysis</h3>
          <p className="text-gray-300">
            Upload images to get detailed, AI-generated descriptions for visual understanding and analysis.
          </p>
        </div>
        <div className="bg-black/60 p-6 rounded-2xl shadow-lg border border-white/10 hover:scale-105 transition-transform duration-300">
          <h3 className="text-xl font-bold mb-3">📄 Document & URL Summarization</h3>
          <p className="text-gray-300">
            Upload PDFs, DOCs, or provide a URL to receive concise and clear summaries of the content.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500 border-t border-white/10">
        © {new Date().getFullYear()} OmniMind. All rights reserved.
      </footer>
    </div>
  );
}

export default HomePage;
