import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Village() {
  const { villageId } = useParams();
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
        const response = await fetch(`http://localhost:7000/api/village/${villageId}`, {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Failed to retrieve village data.");
        }

        const data = await response.json();
        setVillageData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchVillage();
  }, [villageId]);

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      {loading ? (
        <p className="text-lg text-gray-700">Loading village data...</p>
      ) : error ? (
        <p className="text-red-500 text-lg">{error}</p>
      ) : (
        villageData && (
          <div className="max-w-xl w-full bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">
              {villageData.name || 'Village Name Not Available'}
            </h2>
            <div className="space-y-2 text-gray-700 mb-6">
              <p><strong>District:</strong> {villageData.district || 'Not Available'}</p>
              <p><strong>Division:</strong> {villageData.division || 'Not Available'}</p>
              <p><strong>Region:</strong> {villageData.region || 'Not Available'}</p>
              <p><strong>Block:</strong> {villageData.block || 'Not Available'}</p>
              <p><strong>State:</strong> {villageData.state || 'Not Available'}</p>
              <p><strong>Pincode:</strong> {villageData.pincode || 'Not Available'}</p>
            </div>

            <h3 className="text-xl font-semibold text-green-700 mb-4">Recommended Government Schemes</h3>
            <div className="space-y-4">
              {/* Scheme 1 */}
              <div className="p-4 bg-green-50 rounded-lg shadow-sm">
                <h4 className="text-lg font-bold text-green-800">Pradhan Mantri Jan Dhan Yojana</h4>
                <p className="text-sm text-gray-600">A national mission for financial inclusion to ensure access to financial services like banking, savings, and credit.</p>
                <a href="https://www.pmjdy.gov.in" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800 text-sm underline">
                  Learn more
                </a>
              </div>

              {/* Scheme 2 */}
              <div className="p-4 bg-green-50 rounded-lg shadow-sm">
                <h4 className="text-lg font-bold text-green-800">Pradhan Mantri Awas Yojana - Gramin</h4>
                <p className="text-sm text-gray-600">A scheme to provide affordable housing to rural poor with a focus on sustainable development.</p>
                <a href="https://pmayg.nic.in" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800 text-sm underline">
                  Learn more
                </a>
              </div>

              {/* Scheme 3 */}
              <div className="p-4 bg-green-50 rounded-lg shadow-sm">
                <h4 className="text-lg font-bold text-green-800">Swachh Bharat Mission - Gramin</h4>
                <p className="text-sm text-gray-600">An initiative aimed at improving sanitation in rural areas to create a cleaner, healthier environment.</p>
                <a href="https://swachhbharatmission.gov.in/SBMCMS" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800 text-sm underline">
                  Learn more
                </a>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default Village;
