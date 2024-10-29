// src/components/KAPYServiceInfo.jsx
import React from 'react';

const Service1 = () => {
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    window.location.href = "https://www.myscheme.gov.in/schemes/kapy#details"; // Redirect to the URL
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl w-full">
        <h1 className="text-2xl font-bold text-green-700 mb-4 text-center">
          Krushy Aranya Protsaha Yojane (KAPY)
        </h1>
        <p className="text-gray-700 leading-relaxed mb-6">
          The Krushy Aranya Protsaha Yojane (KAPY) aims to promote sustainable agricultural practices
          by providing incentives for agroforestry and afforestation. This initiative supports farmers in
          increasing their crop yield while maintaining ecological balance.
        </p>
        <h2 className="text-lg font-semibold text-gray-800 mb-3">Benefits of KAPY:</h2>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>Financial assistance for planting trees on farmland</li>
          <li>Support for sustainable agriculture techniques</li>
          <li>Training and workshops on eco-friendly farming practices</li>
          <li>Long-term ecological benefits and soil conservation</li>
        </ul>
        <h2 className="text-lg font-semibold text-gray-800 mb-3">Eligibility:</h2>
        <p className="text-gray-700 mb-6">
          The program is available for small and marginal farmers who are committed to adopting agroforestry
          practices. Farmers must also meet certain eligibility criteria regarding land size and crop type.
        </p>

        {/* Form to handle the submit and redirect */}
        <form onSubmit={handleSubmit}>
          <button 
            type="submit" 
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition duration-200"
          >
            Apply Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Service1;
