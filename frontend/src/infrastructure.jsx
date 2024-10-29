import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Papa from 'papaparse';
import './infra.css';

function Infrastructure() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const block = "Mandya"; // Set default block value

  useEffect(() => {
    const csvUrl = 'https://raw.githubusercontent.com/pratapvardhan/rural-facilities-pmgsy/refs/heads/master/pmgsy_facilities_karnataka.csv';

    axios.get(csvUrl)
      .then((response) => {
        Papa.parse(response.data, {
          header: true,
          skipEmptyLines: true,
          complete: (result) => {
            console.log("Parsed CSV Data:", result.data); // Log data structure for verification
            setData(result.data);
            // Filter data immediately after setting it
            const filtered = result.data.filter((item) => 
              item.Block && item.Block.trim().toLowerCase() === block.trim().toLowerCase()
            );
            setFilteredData(filtered);
          },
        });
      })
      .catch((error) => {
        console.error("Error fetching the CSV data:", error);
      });
  }, []);

  return (
    <div className="App">
      <h1 className="text-center text-primary">Facilities in Block: {block}</h1>
  
      {filteredData.length > 0 ? (
        <table className="table table-bordered table-striped mt-4">
          <thead className="thead-dark">
            <tr>
              {Object.keys(filteredData[0]).map((header) => (
                <th key={header}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row, index) => (
              <tr key={index}>
                {Object.values(row).map((value, idx) => (
                  <td key={idx}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center text-muted">No data found for the specified block.</p>
      )}
    </div>
  );
}

export default Infrastructure;