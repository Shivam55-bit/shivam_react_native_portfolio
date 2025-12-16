import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// --- Project Images ---

import evsmartImage from "../assets/project-evsmart.webp";
import ecommerceImage from "../assets/project-ecommerce.png";
import chatImage from "../assets/project-chat.png";
import kirayedar24Image from "../assets/kirayedar24_homescreen.jpeg";
import soaraImage from "../assets/E-Commerce_MobileApp(Soara).jpeg";
import tradingImage from "../assets/trading_homepage.jpeg";
import gharplotImage from "../assets/gharplot_homepage.jpeg";

// --- Enhanced Project Data ---
const projectData = [
  {
    title: "Real Estate App (Kirayedar24)",
    tagline: "Find, rent, and manage properties easily.",
    description:
      "A comprehensive real estate platform focused on rental properties, including houses, flats, rooms, and PG accommodations. Users can search and filter properties by city, locality, price, and amenities. The app features detailed property listings with photos, map view, and virtual tours. Tenants can contact owners or agents directly via in-app chat, schedule visits, and complete rental agreements securely online. Owners can easily list new properties, manage bookings, and receive rent payments digitally. The platform also supports reviews, wishlists, and notifications for new listings. Designed for a seamless rental experience for both tenants and property owners.",
    image: kirayedar24Image,
    techs: ["React Native", "Node.js", "Express", "MongoDB", "Map API", "JWT"],
    github: "https://github.com/shivamshishodia200/real-estate-app",
    live: "https://expo.dev/@shivamshishodia/real-estate-app",
  },
  {
    title: "Jewelry E-Commerce Mobile App (Soara)",
    tagline: "Premium jewelry shopping with elegant UI and seamless experience.",
    description: (
      <>
        <div>
          This is a premium jewelry e-commerce mobile application designed with an elegant and modern UI. The app allows users to browse jewelry by categories, view best sellers, manage wishlists and carts, and enjoy a seamless shopping experience.
        </div>
        <br />
        <strong>Features:</strong>
        <ul style={{marginLeft: '1.2em'}}>
          <li>Home screen with banner & featured products</li>
          <li>Jewelry categories: Earrings, Pendant, Bracelet, Rings</li>
          <li>Best seller product listing</li>
          <li>Wishlist (favorite products)</li>
          <li>Search functionality</li>
          <li>Add to cart & cart management</li>
          <li>Bottom tab navigation</li>
          <li>Modern and clean UI/UX</li>
        </ul>
        <br />
        <strong>Screens:</strong>
        <ul style={{marginLeft: '1.2em'}}>
          <li>Home Screen</li>
          <li>Category Screen</li>
          <li>Product Listing</li>
          <li>Wishlist</li>
          <li>Cart</li>
          <li>Profile</li>
        </ul>
      </>
    ),
    image: soaraImage,
    techs: ["React Native", "JavaScript", "Firebase", "REST API"],
    github: "https://github.com/shivamshishodia200/jewelry-ecommerce-soara",
    live: "https://youtu.be/demo-video-link", // Replace with actual demo or APK if available
  },
  {
    title: "IBProgram Trading MLM",
    tagline: "Advanced trading platform with MLM network system.",
    description:
      "A comprehensive trading platform built with MLM (Multi-Level Marketing) features. The app provides real-time trading capabilities, portfolio management, and network building tools. Users can trade various financial instruments, track their performance, and build their network through referral systems. Features include advanced charting tools, risk management, automated trading signals, and commission tracking for network participants. The platform also includes educational resources, trading tutorials, and social trading features to help users make informed investment decisions.",
    image: tradingImage,
    techs: ["React Native", "Node.js", "Express", "MongoDB", "Real-time API", "Chart.js"],
    github: "https://github.com/shivamshishodia200/ibprogram-trading-mlm",
    live: "https://expo.dev/@shivamshishodia/ibprogram-trading",
  },
  {
    title: "GharPlot Real Estate App with CRM",
    tagline: "Complete real estate solution with integrated CRM system.",
    description:
      "A comprehensive real estate platform with built-in CRM functionality for property management and client relationship management. Features include property listings, lead management, client tracking, automated follow-ups, and sales pipeline management. The app provides tools for real estate agents and brokers to manage their inventory, track client interactions, schedule property visits, and close deals efficiently. Includes advanced search filters, property comparisons, virtual tours, and integrated communication tools for seamless client engagement.",
    image: gharplotImage,
    techs: ["React Native", "Node.js", "Express", "MongoDB", "CRM APIs", "Real-time Chat"],
    github: "https://github.com/shivamshishodia200/gharplot-realestate-crm",
    live: "https://expo.dev/@shivamshishodia/gharplot-app",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <h2 className="projects-header-main">My Projects</h2>
        <p className="projects-subtitle">End-to-End Mobile & Full Stack Applications</p>

        <div className="project-grid">
          {projectData.map((project, index) => (
            <div key={index} className="project-card">
              {/* iPhone Mockup */}
              <div className="iphone-mockup">
                {/* iPhone Frame */}
                <div className="iphone-frame">
                  {/* Notch */}
                  <div className="iphone-notch"></div>
                  
                  {/* Screen */}
                  <div className="iphone-screen">
                    <img
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      className="project-screenshot"
                    />
                    
                    {/* Overlay Info (Shows on Hover) */}
                    <div className="project-overlay">
                      <h3 className="project-title">{project.title}</h3>
                      <p className="tagline">{project.tagline}</p>
                      <p className="project-description">{project.description}</p>
                      
                      {/* Tech Stack Badges */}
                      <div className="tech-badges">
                        {project.techs.map((tech, i) => (
                          <span key={i} className="tech-badge">
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      {/* Project Links */}
                      <div className="project-links">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <FaGithub /> Code
                        </a>
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <FaExternalLinkAlt /> Demo
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  {/* Home Indicator */}
                  <div className="iphone-home-indicator"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
