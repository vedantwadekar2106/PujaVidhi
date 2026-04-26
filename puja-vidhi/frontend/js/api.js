const API_BASE = "http://localhost:5000/api";

async function apiRequest(endpoint, method = "GET", data = null) {
  try {
    const res = await fetch(API_BASE + endpoint, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: data ? JSON.stringify(data) : null,
    });

    return await res.json();
  } catch (err) {
    console.error("API Error:", err);
  }
}