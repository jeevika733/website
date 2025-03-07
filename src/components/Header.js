// components/Header.js
import React from 'react';
import { Link } from 'react-router-dom'; // Ensure you're using Link for navigation

const Header = () => {
  return (
    <header style={{ padding: '10px', backgroundColor: '#333', color: 'white' }}>
      <nav>
        <Link to="/" style={{ marginRight: '20px', color: 'white' }}>Home</Link>
        <Link to="/login" style={{ marginRight: '20px', color: 'white' }}>Login</Link> {/* Navigate to Login */}
        <Link to="/register" style={{ color: 'white' }}>Register</Link>
      </nav>
    </header>
  );
};

export default Header;
