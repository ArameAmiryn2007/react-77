import "./App.css";
import React from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Work from "./pages/Work";
import Bloge from "./pages/Bloge";

function App() {
  return (
    <Router>
      <nav className="rowrow">
        <ul className="ul-li-2">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/work">Work</Link>
          </li>
          <li>
            <Link to="/bloge">Bloge</Link>
          </li>
        </ul>
      </nav>

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/work" element={<Work />} />
          <Route path="/bloge" element={<Bloge />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
