import { useEffect, useState } from "react";
import { getBackendStatus } from "../utils/api";

export default function Home() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    getBackendStatus().then(setMsg);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center space-y-6">
      <h1 className="text-4xl font-bold">
        🎉 Tailwind CSS is Working in{" "}
        <span className="text-yellow-300">ToolNest</span>
      </h1>
      <p className="text-lg bg-black/30 px-4 py-2 rounded-lg">
        Backend says: <span className="text-green-300">{msg}</span>
      </p>
    </div>
  );
}
