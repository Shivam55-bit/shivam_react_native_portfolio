import React from "react";
import profilePic from "../assets/Profile.png";
import {
  FaMobileAlt,
  FaDownload,
  FaGithub,
  FaLinkedinIn,
  FaCode,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container hero-grid-container">

        {/* Left Content */}
        <div className="hero-content-wrapper">
          {/* Role Badge */}
          <p className="hero-tagline-pill">
            <FaMobileAlt className="pill-icon" /> React Native Full Stack Developer
          </p>

          {/* Greeting */}
          <h1 className="hero-greeting">
            Hi, I'm <span className="highlight-name">Shivam Shishodia</span>
          </h1>

          {/* Main Title */}
          <h2 className="hero-main-title">
            I craft high-performance mobile apps with clean, scalable code.
          </h2>

          {/* Description */}
          <p className="hero-description">
            I'm a <strong>React Native Full Stack Developer</strong> passionate about
            building modern, cross-platform mobile experiences using React Native,
            Node.js, Firebase, and MongoDB. I focus on creating apps that are fast,
            secure, and delightful to use — from frontend UI to backend architecture.
          </p>

          {/* Action Buttons + Social Links */}
          <div className="hero-actions-group">
            <div className="hero-buttons">
              <a href="#projects" className="hero-btn primary-btn pulse-effect">
                <FaCode className="hero-icon" /> View My Projects
              </a>

              <a
                href="https://drive.google.com/uc?export=download&id=1Hb95I3Ja8r3wHznCok3-j-p55BxMS4wg"
                download="Shivam_Shishodia_CV.pdf"
                className="hero-btn secondary-btn"
              >
                <FaDownload className="hero-icon" /> Download CV
              </a>
            </div>

            {/* Social Links */}
            <div className="hero-social-links">
              <a
                href="https://github.com/Shivam55-bit"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="social-icon-btn"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/shivam-shishodia-6664431b1/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="social-icon-btn"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Profile Image */}
        <div className="hero-image-container">
          <div className="image-background-shape"></div>
          <img
            src={profilePic}
            alt="Shivam Shishodia - React Native Full Stack Developer"
            className="hero-profile-pic"
          />
        </div>

      </div>
    </section>
  );
}
