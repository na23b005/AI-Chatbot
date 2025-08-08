import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/home.jsx'
import ChatPage from './pages/ChatPage.jsx'
import Navbar from './Components/Navbar.jsx'

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Simple Navbar */}
      {/* <Navbar /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<ChatPage />} />
      </Routes>
    </div>
  )
}

export default App
