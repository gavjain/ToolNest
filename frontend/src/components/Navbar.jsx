import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-black/30 px-6 py-4 flex justify-between items-center text-white fixed top-0 left-0 w-full backdrop-blur-md shadow-lg z-50">
      <Link to="/" className="text-2xl font-bold text-yellow-300">
        ToolNest
      </Link>

      <div className="flex items-center gap-6 text-lg relative">
        <Link to="/tools/word" className="hover:underline">
          Word Tools
        </Link>

        <Link to="/tools/pdf" className="hover:underline">
          PDF Tools
        </Link>

        <div className="relative group">
          <span className="hover:underline cursor-pointer">Regex Tools</span>

          <div className="absolute top-full -left-16 mt-1 bg-black text-white rounded-md shadow-lg w-40 z-50 invisible opacity-0 group-hover:visible group-hover:opacity-100 duration-200">
            <Link
              to="/tools/regex"
              className="block px-4 py-2 hover:bg-gray-800"
            >
              Regex Tester
            </Link>
            <Link
              to="/tools/regex_snippets"
              className="block px-4 py-2 hover:bg-gray-800"
            >
              Regex Snippets
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
