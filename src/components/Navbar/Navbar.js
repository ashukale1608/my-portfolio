import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">Ashwini Kale</div>
      <div
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>
      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li><a href="#home" onClick={closeMenu}>Home</a></li>
        <li><a href="#about" onClick={closeMenu}>About</a></li>
        <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
        <li><a href="#experience" onClick={closeMenu}>Experience</a></li>
        <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
        <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;