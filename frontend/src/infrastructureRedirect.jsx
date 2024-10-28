import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import {dotenv} from 'dotenv'
dotenv.config()

const VillageRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");

    if (!token) {
      navigate('/login'); // Redirect to login if no token found
      return;
    }

    const { email } = jwtDecode(token); // Decode the token to get the email

    const fetchPincode = async () => {
      try {
        const response = await fetch(`${process.env.BACKEND_URL}/api/getPincodeByEmail/${email}`, {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error('Failed to retrieve pincode.');
        }

        const { pincode } = await response.json();
        navigate(`/village/${pincode}`); // Redirect to village with pincode
      } catch (error) {
        console.error("Error fetching pincode:", error);
        navigate('/error'); // Optional: navigate to an error page
      }
    };

    fetchPincode();
  }, [navigate]);

  return <p>Loading...</p>; // Show a loading message while fetching
};
export default VillageRedirect;
