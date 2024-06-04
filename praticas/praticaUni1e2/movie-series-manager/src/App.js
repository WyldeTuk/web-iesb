import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; // Importe Navigate
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Watched from './pages/Watched';
import LoginPage from './pages/LoginPage';
import MovieProvider from './context/MovieContext';
import './App.css';

const App = () => {

    const handleLogin = (userData) => {
      setIsLoggedIn(true);
    };
  
    const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <MovieProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />
          <Route path="/watched" element={isLoggedIn ? <Watched /> : <Navigate to="/login" />} />
          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
        </Routes>
      </Router>
    </MovieProvider>
  );
};

export default App;
