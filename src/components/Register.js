// components/Register.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TextField, Button, Grid, Typography, Paper, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Hook for navigation

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize useNavigate to redirect after registration

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(''); // Reset any previous error messages

    // Input validation
    if (!email || !password || !confirmPassword) {
      setError('All fields are required.');
      setLoading(false);
      return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      setLoading(false);
      return;
    }

    // Check for valid email format (basic regex)
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
      setError('Please enter a valid email address.');
      setLoading(false);
      return;
    }

    // Prepare user data for registration
    const userDetails = { email, password };

    // Dispatch the action to register the user (this should call an API)
    dispatch(Register(userDetails))
      .then(() => {
        setLoading(false);
        navigate('/login'); // Redirect to login page after successful registration
      })
      .catch((err) => {
        setLoading(false);
        setError('Registration failed. Try again.');
      });
  };

  return (
    <div className="register-container" style={{ padding: '50px 20px', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Paper elevation={3} style={{ padding: '30px', maxWidth: '400px', width: '100%' }}>
        <Typography variant="h5" gutterBottom align="center">
          Create an Account
        </Typography>

        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <TextField
            label="Email"
            variant="outlined"
            type="email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ marginBottom: '20px' }}
            required
          />

          {/* Password Input */}
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ marginBottom: '20px' }}
            required
          />

          {/* Confirm Password Input */}
          <TextField
            label="Confirm Password"
            variant="outlined"
            type="password"
            fullWidth
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            style={{ marginBottom: '20px' }}
            required
          />

          {/* Error message */}
          {error && <Typography color="error" style={{ marginBottom: '15px' }}>{error}</Typography>}

          {/* Submit Button */}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={{ padding: '12px', fontSize: '1rem' }}
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : 'Register'}
          </Button>
        </form>

        {/* Link to login page (optional) */}
        <Grid container justifyContent="center" style={{ marginTop: '20px' }}>
          <Typography variant="body2">
            Already have an account?{' '}
            <Button onClick={() => navigate('/login')} color="primary">
              Login
            </Button>
          </Typography>
        </Grid>
      </Paper>
    </div>
  );
};

export default Register;
