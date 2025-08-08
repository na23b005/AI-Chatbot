import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home.jsx'
import ChatPage from './pages/ChatPage.jsx'


function App() {
  return (
    <div className="min-h-screen bg-gray-100">
     

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<ChatPage />} />
      </Routes>
    </div>
  )
}

export default App
