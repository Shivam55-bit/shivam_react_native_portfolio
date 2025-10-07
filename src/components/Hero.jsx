import React from "react";
// Assuming profilePic is correctly imported from your assets folder
import profilePic from "../assets/Profile.png"; 
// Import more icons for a richer UI
import { 
  FaMobileAlt, 
  FaDownload, 
  FaGithub, 
  FaLinkedinIn 
} from "react-icons/fa"; 
// You may need to install react-icons/si for specific tech logos
// import { SiReact } from "react-icons/si"; // Example for a tech stack icon

export default function Hero() {
  return (
    // 1. Full-height section with center alignment (or near top-center)
    <section className="hero-section"> 
      <div className="container hero-grid-container">

        {/* Left: Text Content */}
        <div className="hero-content-wrapper">

          {/* New: Small "Pill" or Badge for main tech */}
          <p className="hero-tagline-pill">
            <FaMobileAlt className="pill-icon" /> React Native Full Stack
          </p>
          
          <h1 className="hero-greeting">
            Hi, I'm <span className="highlight-name">Shivam Shishodia</span>
          </h1>
          
          {/* Main value proposition/Title - Big and Bold */}
          <h2 className="hero-main-title">
            I build performant mobile experiences.
          </h2>
          
          {/* Updated description: Succinct and impactful */}
          <p className="hero-description">
            A **Full Stack Developer** specializing in modern, cross-platform 
            mobile applications (iOS/Android) and scalable Node.js backends. 
            Let's create something robust and engaging.
          </p>

          <div className="hero-actions-group">
            {/* Primary & Secondary CTAs */}
            <div className="hero-buttons">
              {/* Primary CTA: Guide users directly to your most relevant work */}
              <a href="#projects" className="hero-btn primary-btn pulse-effect">
                <FaMobileAlt className="hero-icon" /> View My Apps
              </a>
              
              {/* Secondary CTA: Download CV (Styled as an outline) */}
              <a href="https://drive.google.com/file/d/1Hb95I3Ja8r3wHznCok3-j-p55BxMS4wg/view?usp=drivesdk" download className="hero-btn secondary-btn">
                <FaDownload className="hero-icon" /> Download CV
              </a>
            </div>

            {/* Social Links for immediate connection */}
            <div className="hero-social-links">
              <a href="YOUR_GITHUB_URL" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="social-icon-btn">
                <FaGithub />
              </a>
              <a href="YOUR_LINKEDIN_URL" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="social-icon-btn">
                <FaLinkedinIn />
              </a>
              {/* Add more links like X/Twitter, personal site, etc. */}
            </div>
          </div>
        </div>

        {/* Right: Profile Image with Modern Styling */}
        <div className="hero-image-container">
          {/* Add a decorative element like a simple background shape */}
          <div className="image-background-shape"></div>
          <img 
            src={profilePic} 
            alt="Shivam Shishodia Professional Profile" 
            className="hero-profile-pic"
          />
        </div>

      </div>
    </section>
  );
}