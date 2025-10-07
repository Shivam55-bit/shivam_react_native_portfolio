import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-inner">
        {/* Left Logo or Name */}
        <div className="nav-left">
          <a href="#hero" className="nav-logo">Shivam Shishodia</a>
        </div>

        {/* Middle Links */}
        <ul className="nav-center">
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#services">Services</a></li>
        </ul>

        {/* Right Social Icons */}
        <div className="nav-right">
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </nav>
  );
}
