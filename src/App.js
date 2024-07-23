// src/App.js
import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';

const App = () => (
  <Router>
    <Header />
    <div style={{ paddingTop: '64px', paddingBottom: '64px' }}>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Ajoutez d'autres routes ici */}
      </Routes>
    </div>
    <Footer />
  </Router>
);

export default App;
