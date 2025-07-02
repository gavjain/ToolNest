import { useState } from "react";

export default function RegexTester() {
  const [pattern, setPattern] = useState("");
  const [flags, setFlags] = useState("g");
  const [inputText, setInputText] = useState("");
  const [matches, setMatches] = useState([]);
  const [error, setError] = useState(null);

  const runRegex = () => {
    try {
      const regex = new RegExp(pattern, flags);
      const result = [...inputText.matchAll(regex)];
      setMatches(result);
      setError(null);
    } catch (err) {
      setMatches([]);
      setError(
        "Invalid regex pattern or flags. Please check your input or fill all the fields."
      );
      console.error("Regex error:", err);
    }
  };

  const tryExample = () => {
    setPattern("\\b\\w+\\b");
    setFlags("g");
    setInputText("Welcome to ToolNest. We build cool tools!");
    setMatches([]);
    setError(null);
  };

  const clearAll = () => {
    setPattern("");
    setFlags("g");
    setInputText("");
    setMatches([]);
    setError(null);
  };

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6 pt-20">
      <h2 className="text-3xl font-bold text-white">🔍 Regex Tester</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="inline-block mb-1 text-white relative group">
            🔠 Regex Pattern
            <span className="absolute w-80 left-32 mt-1 bg-black text-white text-xs p-2 rounded shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none transition duration-200 z-10">
              A Regular Expression (or Regex) is a pattern (or filter) that
              describes a set of strings that matches the pattern.
            </span>
          </label>
          <input
            type="text"
            className="w-full p-2 rounded border border-gray-400 text-black"
            value={pattern}
            onChange={(e) => setPattern(e.target.value)}
            placeholder="e.g. \\d+, \\b\\w+\\b, [a-z]{3,}"
          />
        </div>

        <div>
          <label className="mb-1 inline-block text-white relative group">
            🏳️ Flags
            <span className="absolute w-96 left-[72px] mt-1 bg-black text-white text-xs p-2 rounded shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none transition duration-200 z-10">
              Regex flags are optional parameters that you can add to the regex
              pattern to modify how the pattern matching is performed.
            </span>
          </label>
          <input
            type="text"
            className="w-full p-2 rounded border border-gray-400 text-black"
            value={flags}
            onChange={(e) => setFlags(e.target.value)}
            placeholder="e.g. g, gi, gm"
          />
        </div>
      </div>

      <div>
        <label className="block mb-1 text-white">📝 Input Text</label>
        <textarea
          className="w-full p-2 h-40 rounded border border-gray-400 text-black"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Paste or type your test text here..."
        />
      </div>

      <div className="flex gap-4 flex-wrap">
        <button
          onClick={runRegex}
          className="px-5 py-2 bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-300"
        >
          🚀 Test Regex
        </button>
        <button
          onClick={tryExample}
          className="px-5 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-400"
        >
          🎯 Try Example
        </button>
        <button
          onClick={clearAll}
          className="px-5 py-2 bg-red-500 text-white font-semibold rounded hover:bg-red-400"
        >
          🧼 Clear
        </button>
      </div>

      {error && (
        <p className="inline-block px-2 text-red-400 font-semibold bg-black py-2 mt-4">
          ❌ {error}
        </p>
      )}

      {!error && matches.length > 0 && (
        <div className="text-white mt-6">
          <p className="text-green-300 font-medium">
            ✅ {matches.length} match{matches.length > 1 ? "es" : ""} found:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            {matches.map((m, i) => (
              <li key={i}>{m[0]}</li>
            ))}
          </ul>
        </div>
      )}
      {!error && matches.length === 0 && inputText && (
        <p className="text-yellow-300 mt-4">
          No matches found. Try a different pattern or input text.
        </p>
      )}
    </div>
  );
}
