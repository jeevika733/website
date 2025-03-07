// BookingHistory.js
import React from 'react';
import { useSelector } from 'react-redux';

const BookingHistory = () => {
  const bookingHistory = useSelector(state => state.bookingHistory);

  return (
    <div className="booking-history">
      <h2>Your Booking History</h2>
      {bookingHistory.length === 0 ? (
        <p>No bookings made yet.</p>
      ) : (
        <ul>
          {bookingHistory.map((booking, index) => (
            <li key={index}>Booked Hotel {booking.hotelId} on {booking.date}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookingHistory;
