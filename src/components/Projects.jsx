import React from "react";
// Import icons for GitHub and Live Demo links
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"; 

// --- 🎯 STEP 1: IMPORT ALL IMAGE FILES HERE ---
// Ensure these image files exist in your src/assets folder
// and the filenames (including extension) match exactly.
import evsmartImage from "../assets/project-evsmart.webp"; 
import ecommerceImage from "../assets/project-ecommerce.png"; 
import chatImage from "../assets/project-chat.png"; 
// You can add more image imports here for future projects
// ---------------------------------------------

// --- ENHANCED PROJECT DATA FOR A FULL STACK MOBILE PORTFOLIO ---
const projectData = [
  {
    title: "E-commerce Mobile App (RN & Node.js)",
    tagline: "Full-stack, cross-platform shopping experience with integrated payment mockups.",
    description: "Developed an end-to-end e-commerce solution featuring secure user authentication (JWT), dynamic product catalog, and a seamless checkout flow. The app utilizes Redux Toolkit for state management.",
    // --- 🎯 STEP 2: Use the imported variable for the image source ---
    image: ecommerceImage, 
    techs: ["React Native", "Node.js", "Express", "MongoDB", "Redux Toolkit", "JWT"],
    github: "https://github.com/yourusername/ecommerce-mobile-frontend",
    live: "https://expo.dev/@yourusername/ecommerce-app" // Use an Expo link or App Store/Play Store link
  },
  {
    title: "Real-time Chat Application",
    tagline: "Bi-directional communication powered by WebSockets.",
    description: "Built a chat application allowing instant messaging between users. Features include room creation, message history storage, and real-time notifications, showcasing proficiency in full-stack real-time communication.",
    // --- 🎯 STEP 2: Use the imported variable for the image source ---
    image: chatImage, 
    techs: ["React", "Socket.IO", "Node.js", "PostgreSQL", "React Native (Client)"],
    github: "https://github.com/yourusername/realtime-chat-backend",
    live: "https://chat-live-demo.netlify.app" 
  },
  {
    title: "EvSmart Ride App",
    tagline: "Real-time EV charging station locator and route planner (React Native).",
    description: "A location-based service application for electric vehicle (EV) users. Implemented real-time map integration (Mapbox/Google Maps) to display charging stations, calculate optimal routes, and manage user reviews/ratings.",
    // --- 🎯 STEP 2: Use the imported variable for the image source ---
    image: evsmartImage, 
    techs: ["React Native", "Firebase/Supabase", "Geolocation API", "Node.js (for microservices)", "Redux"],
    github: "https://github.com/yourusername/evsmart-app-repo",
    live: "https://expo.dev/@yourusername/evsmart-ride" 
  },
  // Add more projects here following the same structure
];

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container mx-auto px-6"> 
        {/* Section Header */}
        <h2 className="projects-header-main">My Projects</h2>
        <p className="projects-subtitle">Full Stack Solutions & Mobile Applications</p>

        <div className="project-grid">
          {projectData.map((project, index) => (
            <div 
              key={index} 
              className="project-card"
            >
              
              {/* Project Image */}
              <img 
                src={project.image} 
                alt={`${project.title} screenshot`} 
                className="project-card-image"
              />

              <div className="project-content">
                <h3 className="project-title">
                  {project.title}
                </h3>
                <p className="tagline">
                  {project.tagline}
                </p>
                
                <p className="project-description">
                  {project.description}
                </p>

                {/* Technologies Badges */}
                <div className="tech-badges">
                  {project.techs.map((tech, i) => (
                    <span key={i}>
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links (GitHub & Live Demo) */}
                <div className="project-links">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <FaGithub /> View Code
                  </a>
                  
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}