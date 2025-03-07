import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Import React Router for page routing
import store from './redux/store';
import Header from './components/Header';
import BookingForm from './components/BookingForm';
import Login from './components/Login'; 
import Register from './components/Register';
// import Dashboard from './components/Dashboard'; // You can create a Dashboard page after login
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>  {/* Wrap everything in Router to manage routing */}
        <div className="App">
          <Header /> {/* Header for navigation */}
          
          <Routes>
            {/* Define Routes for different pages */}
            <Route path="/" element={<BookingForm />} />  {/* Default route */}
            <Route path="/login" element={<Login />} />
            <Route path="/Register" element={<Register/>} />
            {/* <Route path="/Register" element={<Register />}  />{/* Login page */}
        
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
