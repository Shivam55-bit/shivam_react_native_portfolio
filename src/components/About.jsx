import React from "react";

// --- Import Custom Icon Images ---
import IconUserImage from "../assets/user.png"; 
import IconEnvelopeImage from "../assets/envelope.png"; 
import IconMobileImage from "../assets/phone.png"; 
import IconServerImage from "../assets/server.png"; 
import IconCodeImage from "../assets/code.png"; 
import IconCogsImage from "../assets/cogs.png"; 
import profilePic from "../assets/Profile.png"; // <-- CORRECT IMPORT

// --- Global Constants and Placeholder Assets ---
// FIX: PROFILE_IMAGE_URL is now just the imported image source variable.
const PROFILE_IMAGE_SRC = profilePic;

// --- Custom Icon Components using <img> tags (No changes needed here) ---
const IconUser = (props) => (
  <img src={IconUserImage} alt="User Icon" {...props} />
);

const IconEnvelope = (props) => (
  <img src={IconEnvelopeImage} alt="Envelope Icon" {...props} />
);

const IconMobile = (props) => (
  <img src={IconMobileImage} alt="Mobile Icon" {...props} />
);

const IconServer = (props) => (
  <img src={IconServerImage} alt="Server Icon" {...props} />
);

const IconCode = (props) => (
  <img src={IconCodeImage} alt="Code Icon" {...props} />
);

const IconCogs = (props) => (
  <img src={IconCogsImage} alt="Cogs Icon" {...props} />
);

// --- About Section Component ---
export default function About() {
  return (
    <section id="about">
      <div className="container">
        {/* Left Column */}
        <div className="left-column">
          <div className="profile-image-wrapper">
            {/* FIX: Use the imported image source directly in the src attribute */}
            <img
              src={PROFILE_IMAGE_SRC} 
              alt="Shivam Shishodia Profile"
              className="profile-image-block" /* Add back a class for specific styling */
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src =
                  "https://placehold.co/400x400/334155/fff?text=Profile+Image+Not+Found"; // Updated fallback text
              }}
            />
            {/* If you wanted a name overlay or other elements, they'd go here: */}
            {/* <div className="name-overlay">Shivam Shishodia</div> */}
            <div className="profile-image-overlay"></div>
          </div>

          <div className="contact-card">
            <h4>
              <IconMobile className="icon" />
              Connect
            </h4>
            <p>
              <IconUser className="icon" />
              <strong>Shivam Shishodia</strong>
            </p>
            <p>
              <IconMobile className="icon" />
              <a href="tel:+919171720831">+91 9171720831</a>
            </p>
            <p>
              <IconEnvelope className="icon" />
              <a href="mailto:shivamsishodia2000@gmail.com">
                shivamsishodia2000@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="right-column">
          <div className="about-header">
            <h2>About Me</h2>
            <p>Full Stack Developer | Mobile & Backend Specialist</p>
          </div>

          <div className="bio-card">
            <p>
              Hello! I'm <strong>Shivam Shishodia</strong>, a dedicated Software Developer who
              recently completed my B.Tech. I specialize in architecting and developing{" "}
              <strong>end-to-end applications</strong>, leveraging <strong>React Native</strong> for
              high-performance mobile frontends and <strong>Node.js/Express</strong> for robust backend
              services. I thrive on solving complex problems and delivering scalable, efficient
              solutions that bridge the gap between user experience and system reliability.
            </p>
          </div>

          <div className="core-card">
            <h3>
              <IconCogs className="icon" />
              Core Competencies
            </h3>
            <ul>
              <li>
                <IconMobile className="icon" />
                <div>
                  <strong>Mobile Excellence (React Native)</strong>
                  <p>
                    Building seamless, cross-platform applications with clean, performant code
                    focused on native speed and user experience.
                  </p>
                </div>
              </li>
              <li>
                <IconServer className="icon" />
                <div>
                  <strong>Scalable Backends (Node.js)</strong>
                  <p>
                    Designing and implementing robust RESTful APIs and microservices for high
                    availability and efficient data handling.
                  </p>
                </div>
              </li>
              <li>
                <IconCode className="icon" />
                <div>
                  <strong>Engineering Discipline</strong>
                  <p>
                    Dedicated to clean code architecture, efficient data analysis, and technical
                    mentorship within development teams.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}