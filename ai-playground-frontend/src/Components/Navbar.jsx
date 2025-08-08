import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full fixed bg-[#191a1a] text-white shadow-sm flex items-center justify-between px-8 py-4 border-b border-gray-800 z-20">
      <Link to="/" className="font-extrabold text-2xl tracking-tight text-white">
        Playground
      </Link>
      <div className="flex gap-8">
        <Link
          to="/"
          className="text-gray-300 hover:text-white transition-colors font-medium"
        >
          Home
        </Link>
        <Link
          to="/chat"
          className="text-gray-300 hover:text-white transition-colors font-medium"
        >
          Chat
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
