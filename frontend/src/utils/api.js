export async function getBackendStatus() {
  try {
    const res = await fetch("http://localhost:8000/");
    const data = await res.json();
    return data.message || "No message from backend.";
  } catch (err) {
    return "Backend not reachable.";
  }
}
