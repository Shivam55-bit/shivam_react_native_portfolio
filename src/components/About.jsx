import React from "react";

// --- Import Custom Icon Images ---
import IconUserImage from "../assets/user.png";
import IconEnvelopeImage from "../assets/envelope.png";
import IconMobileImage from "../assets/phone.png";
import IconServerImage from "../assets/server.png";
import IconCodeImage from "../assets/code.png";
import IconCogsImage from "../assets/cogs.png";
import profilePic from "../assets/Profile.png";

// --- Constants ---
const PROFILE_IMAGE_SRC = profilePic;

// --- Reusable Icon Components ---
const IconUser = (props) => <img src={IconUserImage} alt="User Icon" {...props} />;
const IconEnvelope = (props) => <img src={IconEnvelopeImage} alt="Envelope Icon" {...props} />;
const IconMobile = (props) => <img src={IconMobileImage} alt="Mobile Icon" {...props} />;
const IconServer = (props) => <img src={IconServerImage} alt="Server Icon" {...props} />;
const IconCode = (props) => <img src={IconCodeImage} alt="Code Icon" {...props} />;
const IconCogs = (props) => <img src={IconCogsImage} alt="Cogs Icon" {...props} />;

// --- About Section Component ---
export default function About() {
  return (
    <section id="about">
      <div className="container">
        
        {/* Left Column */}
        <div className="left-column">
          <div className="profile-image-wrapper">
            <img
              src={PROFILE_IMAGE_SRC}
              alt="Shivam Shishodia Profile"
              className="profile-image-block"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src =
                  "https://placehold.co/400x400/334155/fff?text=Profile+Image+Not+Found";
              }}
            />
            <div className="profile-image-overlay"></div>
          </div>

          {/* Contact Info */}
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
              <a href="tel:+919171720831">+91 91717 20831</a>
            </p>
            <p>
              <IconEnvelope className="icon" />
              <a href="https://mail.google.com/mail/u/0/?view=cm&to=shivamshishodia2000@gmail.com" target="_blank" rel="noreferrer">
                shivamshishodia2000@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="right-column">
          {/* Header */}
          <div className="about-header">
            <h2>About Me</h2>
            <p>React Native Full Stack Developer</p>
          </div>

          {/* Bio */}
          <div className="bio-card">
            <p>
              Hello! I'm <strong>Shivam Shishodia</strong> — a passionate{" "}
              <strong>React Native Full Stack Developer</strong> focused on building modern,
              cross-platform mobile and web solutions. With hands-on experience in{" "}
              <strong>React Native, Node.js, Express, Firebase,</strong> and{" "}
              <strong>MongoDB</strong>, I specialize in developing apps that combine sleek
              interfaces with powerful backend architectures.
            </p>
            <p>
              I enjoy transforming ideas into reliable digital experiences that scale smoothly,
              perform fast, and look great. My approach emphasizes clean code, modular
              architecture, and meaningful collaboration to deliver impactful products.
            </p>
          </div>

          {/* Core Skills */}
          <div className="core-card">
            <h3>
              <IconCogs className="icon" />
              Core Competencies
            </h3>
            <ul>
              <li>
                <IconMobile className="icon" />
                <div>
                  <strong>Cross-Platform Development (React Native)</strong>
                  <p>
                    Delivering high-performance iOS and Android apps using React Native —
                    ensuring smooth UX, pixel-perfect design, and optimized performance.
                  </p>
                </div>
              </li>
              <li>
                <IconServer className="icon" />
                <div>
                  <strong>Backend Engineering (Node.js & Firebase)</strong>
                  <p>
                    Building scalable APIs, real-time services, and secure database layers
                    using Node.js, Express, Firebase, and MongoDB for seamless integration.
                  </p>
                </div>
              </li>
              <li>
                <IconCode className="icon" />
                <div>
                  <strong>Full Stack Mindset</strong>
                  <p>
                    Skilled in connecting mobile and backend systems with efficient data flow,
                    version control (Git/GitHub), and deployment best practices.
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
