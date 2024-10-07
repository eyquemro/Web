//src/App.js
import React from "react";
import {
  HashRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Header from "./components/header";
import Home from "./components/home";
import Skills from "./components/skills";
import Contact from "./components/contact";
import Links from "./components/links";

import AnimatedPage from "./styles/animatedPage";
import "./App.css";

const AppContent = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <AnimatedPage key="home">
              <Home />
            </AnimatedPage>
          }
        />
        <Route
          path="/skills"
          element={
            <AnimatedPage key="skills">
              <Skills />
            </AnimatedPage>
          }
        />

        <Route
          path="/contact"
          element={
            <AnimatedPage key="contact">
              <Contact />
            </AnimatedPage>
          }
        />
          <Route
          path="/links"
          element={
            <AnimatedPage key="links">
              <Links />
            </AnimatedPage>
          }
        />
        {/*Ajoutez d'autres routes ici*/}
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <Router>
    <Header />
    <main>
      <AppContent />
    </main>
  </Router>
);

export default App;
