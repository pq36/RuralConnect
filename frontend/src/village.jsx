import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
function Village() {
  const { villageId } = useParams(); // Get villageId from URL
  const [villageData, setVillageData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");

    if (!token) {
      setError("Please log in to access village data.");
      setLoading(false);
      return;
    }

    const fetchVillage = async () => {
      try {
        const response = await fetch(`${process.env.BACKEND_URL}/api/village/${villageId}`, {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`, // Added Bearer prefix
            "Content-Type": "application/json",
          }
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Failed to retrieve village data.");
        }

        const data = await response.json();
        setVillageData(data); // Set the whole response object
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchVillage();
  }, [villageId]); // <-- Added closing bracket for useEffect

  return (
    <div>
      {loading ? (
        <p>Loading village data...</p>
      ) : error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : (
        villageData && (
          <div>
            <h2>{villageData.name || 'Village Name Not Available'}</h2>
            <p>District: {villageData.district || 'Not Available'}</p>
            <p>Division: {villageData.division || 'Not Available'}</p>
            <p>Region: {villageData.region || 'Not Available'}</p>
            <p>Block: {villageData.block || 'Not Available'}</p>
            <p>State: {villageData.state || 'Not Available'}</p>
            <p>Pincode: {villageData.pincode || 'Not Available'}</p>
            {/* Add other fields as necessary */}
          </div>
        )
      )}
    </div>
  );
}

export default Village;
