// components/Login.js
import React, { useState } from 'react';
import { TextField, Button, Typography, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Make sure this is imported

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const navigate = useNavigate(); // Hook to navigate to other pages

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Simulate API call or authentication logic
    setTimeout(() => {
      if (email === 'test@example.com' && password === 'password') {
        // If login successful, navigate to dashboard
        setLoading(false);
        navigate('/dashboard');
      } else {
        setLoading(false);
        setError('Invalid credentials');
      }
    }, 1000);
  };

  return (
    <div style={{ padding: '50px' }}>
      <Typography variant="h4" gutterBottom align="center">
        Login
      </Typography>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '400px', margin: '0 auto' }}>
        <TextField
          label="Email"
          variant="outlined"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ marginBottom: '15px' }}
          required
        />
        
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ marginBottom: '15px' }}
          required
        />
        
        {error && <Typography color="error" style={{ marginBottom: '15px' }}>{error}</Typography>}
        
        <Button
          variant="contained"
          color="primary"
          type="submit"
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} color="inherit" /> : 'Login'}
        </Button>
      </form>
    </div>
  );
};

export default Login;
