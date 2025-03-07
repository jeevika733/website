// HotelList.js
import React from 'react';
import { useSelector } from 'react-redux';

const HotelList = () => {
  const hotels = useSelector(state => state.hotels);

  return (
    <div className="hotel-list">
      {hotels.map((hotel, index) => (
        <div key={index} className="hotel-card">
          <h3>{hotel.name}</h3>
          <p>{hotel.location}</p>
          <button>Book Now</button>
        </div>
      ))}
    </div>
  );
};

export default HotelList;
