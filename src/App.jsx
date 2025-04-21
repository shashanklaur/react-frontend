import { useEffect, useState } from "react";

function App() {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); //  New: track errors

  useEffect(() => {
    fetch("http://localhost:3000/api/cities")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.text().then(text => {
          try {
            return JSON.parse(text);
          } catch {
            throw new Error("Invalid JSON response");
          }
        });
      })
      .then((data) => {
        console.log("Fetched cities:", data);
        setCities(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching cities:", err.message || err);
        setError("Sorry, cities couldn’t load. Please try again in a few seconds.");
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1>🌍 Travel Buddy (React Frontend)</h1>

      {/*  Show error message if present */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {loading ? (
        <p>Loading cities...</p>
      ) : (
        <ul>
          {cities.map((city) => (
            <li key={city.id}>
              <a
                href={`http://localhost:3000/city/${encodeURIComponent(city.city)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {city.city}, {city.country}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
