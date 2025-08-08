# AI Playground
OmniMind
one AI, many capabilities
Analyze conversations, interpret images, and summarize documents
all in one place.
## Objective

The **AI Playground** is a multi-modal application that allows authenticated users to explore and interact with various AI-powered skills in a single platform.

The core capabilities include:

1. **Conversation Analysis**

   * Upload audio files.
   * Convert speech to text (STT).
   * Perform **speaker diarization** (up to 2 speakers) without relying on STT vendor diarization.

2. **Image Analysis**

   * Upload images.
   * Generate **detailed textual descriptions** for the content of the image.

3. **Document/URL Summarization** (IN backend code not integrated due to time constraints)

   * Upload documents (PDF, DOC).
   * Provide URLs.
   * Obtain **concise summaries** of the content.

---

## Live Demo

* **Frontend:** [https://pilvotask.netlify.app/](https://pilvotask.netlify.app/)
* **Backend API:** [https://pilvo.onrender.com](https://pilvo.onrender.com)

---

## Tech Stack

* **Frontend:** React + Vite (or chosen framework)
* **Backend:** Node.js + Express
* **AI Models:** Google Gemini API (via `GEMINI_API_KEY`)
* **Hosting:**

  * Frontend → Netlify
  * Backend → Render

---

## Features

✅ Speech-to-text transcription
✅ Speaker diarization (max 2 speakers) without vendor diarization APIs
✅ AI-powered image description


---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/vijaykrishna483-cms/PILVO.git
cd PILVO
```

---

### 2. Backend Setup

```bash
cd ai-playground-backend
npm install
```

* Create a `.env` file in `ai-playground-backend` and add:

  ```
  GEMINI_API_KEY=your_gemini_api_key_here
  ```

* Start the backend server:

  ```bash
  nodemon index.js
  ```

---

### 3. Frontend Setup

```bash
cd ../ai-playground-frontend
npm install
npm run dev
```

---

## Usage

1. **Login** to the application.
2. Select a skill:

   * **Conversation Analysis**: Upload an audio file → get transcription + diarization.
   * **Image Analysis**: Upload an image → get AI-generated description.
   * **Document/URL Summarization**: Upload a PDF/DOC or paste a URL → get summary.
3. View results directly in the app interface.

---

## API Hosting

* Backend is deployed at: **`https://pilvo.onrender.com`**
* Make sure your frontend `.env` (if applicable) points API calls to this URL.

---

## Submission Instructions

This repository contains both the frontend and backend code for the AI Playground project. Follow the above steps to run locally or visit the live demo links to explore.

---

I can also make this README **visually richer** with badges, screenshots, and quick-start commands so it looks professional like an open-source portfolio project.

Do you want me to do that next? That’ll make it look great for GitHub reviewers.
