import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Service from "./Services";
import "./Navbar.css";

const Navbar = () => {
  return (
    <Router>
      <div>
        {/* Navbar links */}
        <nav className="NavBar">
          <div className="logo">
            <h1>Master</h1>
          </div>
          <ul>
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
              <Link to="/service">Service</Link>
            </li>
          </ul>
        </nav>

        {/* Route configuration */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Navbar;
