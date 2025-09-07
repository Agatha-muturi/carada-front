// src/api/ors.js
const API_BASE = 'https://carada-back.onrender.com';

// ✅ function to check traffic and get alternative routes
export default async function getAlternativeRoute({ currentLocation, destination }) {
  try {
    const res = await fetch(`${API_BASE}/api/traffic/check`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ currentLocation, destination }),
    });

    if (!res.ok) {
      throw new Error("Failed to fetch alternative route");
    }

    return await res.json();
  } catch (err) {
    console.error("Error in getAlternativeRoute:", err);
    throw err;
  }
}

// export default {
//   getAlternativeRoute,
// };
