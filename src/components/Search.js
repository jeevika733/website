// components/Search.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchItems } from '../redux/actions'; // Action to handle search
import { TextField, Button, Grid, Typography, MenuItem, Select, FormControl, InputLabel, CircularProgress } from '@mui/material';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('hotels');
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const handleSearch = () => {
    if (searchTerm.trim()) {
      setLoading(true);
      const searchParams = { searchTerm, category };
      dispatch(searchItems(searchParams))
        .then(() => setLoading(false))
        .catch(() => setLoading(false));
    }
  };

  return (
    <div className="search-container" style={{ padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <Typography variant="h5" gutterBottom align="center">
        Search Hotels, Events, or Movies
      </Typography>

      <Grid container spacing={2} style={{ marginBottom: '20px' }}>
        <Grid item xs={12} md={6}>
          <TextField
            label="Search Term"
            variant="outlined"
            fullWidth
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <FormControl fullWidth variant="outlined">
            <InputLabel>Category</InputLabel>
            <Select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              label="Category"
            >
              <MenuItem value="hotels">Hotels</MenuItem>
              <MenuItem value="events">Events</MenuItem>
              <MenuItem value="movies">Movies</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} md={2}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleSearch}
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : 'Search'}
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Search;
