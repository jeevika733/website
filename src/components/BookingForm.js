import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bookHotel } from '../redux/actions';
import { Button, TextField, MenuItem, Select, InputLabel, FormControl, Grid, Typography } from '@mui/material';

const BookingForm = () => {
  const dispatch = useDispatch();
  
  // State for selected hotel and date
  const [selectedHotel, setSelectedHotel] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  
  // Hotels data from Redux store
  const hotels = useSelector(state => state.hotels);

  const handleBooking = () => {
    if (selectedHotel && selectedDate) {
      const bookingDetails = { hotelId: selectedHotel, date: selectedDate };
      dispatch(bookHotel(bookingDetails));
      alert('Booking successful!');
    } else {
      alert('Please select a hotel and date');
    }
  };

  return (
    <div className="booking-form-container">
      <Typography variant="h4" gutterBottom align="center">
        Book Your Hotel
      </Typography>
      
      <Grid container spacing={3} justifyContent="center">
        {/* Hotel Selection */}
        <Grid item xs={12} sm={6} md={4}>
          <FormControl fullWidth>
            <InputLabel id="hotel-select-label">Choose a Hotel</InputLabel>
            <Select
              labelId="hotel-select-label"
              value={selectedHotel}
              onChange={(e) => setSelectedHotel(e.target.value)}
              label="Choose a Hotel"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {hotels.map((hotel) => (
                <MenuItem key={hotel.id} value={hotel.id}>
                  {hotel.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        {/* Date Picker */}
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            label="Choose a Date"
            type="date"
            fullWidth
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>

        {/* Booking Button */}
        <Grid item xs={12} sm={6} md={4}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleBooking}
            fullWidth
            size="large"
          >
            Book Hotel
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default BookingForm;
