import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import WordTools from "./pages/WordTools";
import PDFTools from "./pages/PDFTools";
import RegexTester from "./tools/RegexTester";
import RegexSnippets from "./tools/RegexSnippets";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tools/word" element={<WordTools />} />
          <Route path="/tools/pdf" element={<PDFTools />} />
          <Route path="/tools/regex" element={<RegexTester />} />
          <Route path="/tools/regex_snippets" element={<RegexSnippets />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
