import { useState } from "react";

const snippets = [
  {
    title: "Email Address",
    description: "Validate standard email format",
    pattern: `^[\\w.-]+@[\\w.-]+\\.\\w+$`,
  },
  {
    title: "Phone Number (10 digits)",
    description: "Validates exactly 10 digits",
    pattern: `^\\d{10}$`,
  },
  {
    title: "URL",
    description: "Matches http/https URLs",
    pattern: `https?://[^\\s]+`,
  },
  {
    title: "Strong Password",
    description:
      "At least 8 characters, with uppercase, lowercase, number, and symbol",
    pattern:
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*])[A-Za-z\\d!@#$%^&*]{8,}$",
  },
  {
    title: "IPv4 Address",
    description: "Validates an IPv4 address",
    pattern:
      "^(25[0-5]|2[0-4]\\d|[01]?\\d\\d?)\\.(25[0-5]|2[0-4]\\d|[01]?\\d\\d?)\\.(25[0-5]|2[0-4]\\d|[01]?\\d\\d?)\\.(25[0-5]|2[0-4]\\d|[01]?\\d\\d?)$",
  },
  {
    title: "US ZIP Code",
    description: "Validates 5-digit or ZIP+4 code",
    pattern: "^\\d{5}(-\\d{4})?$",
  },
  {
    title: "Username",
    description: "Alphanumeric, 3–16 characters",
    pattern: "^[a-zA-Z0-9_]{3,16}$",
  },
  {
    title: "Credit Card Number",
    description: "Validates a 16-digit credit card number",
    pattern: "^\\d{4}[- ]?\\d{4}[- ]?\\d{4}[- ]?\\d{4}$",
  },
  {
    title: "Remove Extra Spaces",
    description: "Matches multiple spaces",
    pattern: "\\s{2,}",
  },
  {
    title: "Remove All Whitespace",
    description: "Matches all whitespace characters",
    pattern: "\\s+",
  },
  {
    title: "Remove Non-Alphanumeric",
    description: "Strips out anything except letters, numbers, and spaces",
    pattern: "[^a-zA-Z0-9 ]",
  },
  {
    title: "Remove HTML Tags",
    description: "Removes basic HTML tags",
    pattern: "<[^>]+>",
  },
  {
    title: "Remove Punctuation",
    description: "Matches punctuation characters",
    pattern: "[.,\\/#!$%\\^&\\*;:{}=\\-_~()]",
  },
  {
    title: "Extract All Words",
    description: "Matches individual words",
    pattern: "\\b\\w+\\b",
  },
  {
    title: "Extract Hashtags",
    description: "Finds hashtags like #example",
    pattern: "#\\w+",
  },
  {
    title: "Extract Mentions",
    description: "Finds mentions like @username",
    pattern: "@\\w+",
  },
  {
    title: "Extract Numbers",
    description: "Finds whole numbers",
    pattern: "\\d+",
  },
  {
    title: "Extract Decimal Numbers",
    description: "Finds decimal values",
    pattern: "\\d+\\.\\d+",
  },
  {
    title: "Extract Dates (dd/mm/yyyy)",
    description: "Matches date format dd/mm/yyyy",
    pattern: "\\b\\d{2}/\\d{2}/\\d{4}\\b",
  },
  {
    title: "Extract Hex Colors",
    description: "Finds hex color codes like #FF00FF",
    pattern: "#(?:[0-9a-fA-F]{3}){1,2}",
  },
  {
    title: "Extract File Extensions",
    description: "Matches file extensions like .jpg, .pdf",
    pattern: "\\.\\w{2,4}$",
  },
  {
    title: "Date (YYYY-MM-DD)",
    description: "Validates ISO date format",
    pattern: "^\\d{4}-\\d{2}-\\d{2}$",
  },
  {
    title: "Date (DD/MM/YYYY)",
    description: "Matches common date format",
    pattern: "^\\d{2}/\\d{2}/\\d{4}$",
  },
  {
    title: "Time (HH:MM, 24hr)",
    description: "Validates 24-hour time format",
    pattern: "^([01]\\d|2[0-3]):[0-5]\\d$",
  },
  {
    title: "JavaScript Comment",
    description: "Matches single and multi-line JS comments",
    pattern: "//.*|/\\*[\\s\\S]*?\\*/",
  },
  {
    title: "HTML Tag Name",
    description: "Extracts tag name from HTML",
    pattern: "(?<=<)\\w+",
  },
  {
    title: "JSON Key",
    description: "Finds keys in JSON format",
    pattern: '"(\\w+)":',
  },
  {
    title: "Environment Variable",
    description: "Matches shell-style variables like $USER or ${HOME}",
    pattern: "\\$\\{?\\w+\\}?",
  },
];

export default function RegexSnippets() {
  const [copied, setCopied] = useState("");

  const handleCopy = (pattern) => {
    navigator.clipboard.writeText(pattern);
    setCopied(pattern);
    setTimeout(() => setCopied(""), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6 pt-20">
      <h2 className="text-3xl font-bold text-white">📌 Regex Snippets</h2>

      {snippets.map((s, index) => (
        <div
          key={index}
          className="bg-black/70 text-white rounded-md p-4 shadow-md border border-gray-600"
        >
          <h3 className="text-xl font-semibold">{s.title}</h3>
          <p className="text-sm text-gray-300 mb-2">{s.description}</p>
          <div className="flex items-center justify-between bg-gray-900 px-3 py-2 rounded">
            <code className="text-green-300 break-all">{s.pattern}</code>
            <button
              onClick={() => handleCopy(s.pattern)}
              className="ml-4 bg-yellow-400 text-black px-3 py-1 rounded hover:bg-yellow-300"
            >
              {copied === s.pattern ? "✅ Copied" : "Copy"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
