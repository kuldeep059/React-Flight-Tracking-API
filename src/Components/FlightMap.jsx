import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FlightMap() {
  const [flightData, setFlightData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFlightData = async () => {
      try {
        const response = await axios.get('http://api.aviationstack.com/v1/flights', {
          params: {
            access_key: 'YOUR_CORRECT_API_KEY', // Replace with your actual key
            limit: 10 
          }
        });

        setFlightData(response.data);
        setError(null); // Clear any previous errors
      } catch (error) {
        setError(error);
        console.error('Error fetching flight data:', error.response ? error.response.status : error.message);
      } finally {
        setIsLoading(false); // Data fetching is complete
      }
    };

    fetchFlightData();
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div>
      {isLoading ? (
        <p>Loading flight data...</p>
      ) : error ? (
        <p>Error fetching flight data. Please try again.</p>
      ) : flightData && flightData.data.length > 0 ? (
        <div>
          <h2>Flight Data</h2>
          <ul>
            {flightData.data.map(flight => (
              <li key={flight.flight_date + flight.flight_status}>
                <h3>Flight {flight.flight.number}</h3>
                <p>Departure Airport: {flight.departure.airport}</p>
                <p>Arrival Airport: {flight.arrival.airport}</p>
                <p>Departure Time: {flight.departure.scheduled}</p>
                <p>Arrival Time: {flight.arrival.scheduled}</p>
                <p>Status: {flight.flight_status}</p>
                {/* Add more flight details as needed */}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No flight data found.</p>
      )}
    </div>
  );
}

export default FlightMap;
