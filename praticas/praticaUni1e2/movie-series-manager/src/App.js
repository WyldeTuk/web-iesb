import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Watched from './pages/Watched';
import MovieProvider from './context/MovieContext';
import './App.css';

const App = () => {
  return (
    <MovieProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/watched" element={<Watched />} />
        </Routes>
      </Router>
    </MovieProvider>
  );
};

export default App;
