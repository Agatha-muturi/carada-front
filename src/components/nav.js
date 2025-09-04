// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Car Rada 🚘</div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/maps">Maps</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
