import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import "./App.css";

const App = () => (
  <Router>
    <div className= 'app'>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          {/* Ajoutez d'autres routes ici */}
        </Routes>
      </main>
      <Footer />
      </div>
  </Router>
);

export default App;
