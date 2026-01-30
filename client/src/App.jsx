import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Reservation from './pages/Reservation';
import Review from './pages/Review';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/reservations" element={<Reservation />} />
        <Route path="/reviews" element={<Review />} />
      </Routes>
    </Router>
  );
}

export default App;
