export async function getAlternativeRoute(start, end) {
  const apiKey = process.env.REACT_APP_ORS_API_KEY;

  const response = await fetch(
    `https://api.openrouteservice.org/v2/directions/driving-car?api_key=${apiKey}&start=${start}&end=${end}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch route");
  }

  const data = await response.json();
  return data;
}
