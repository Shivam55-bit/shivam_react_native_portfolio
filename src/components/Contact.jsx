import React from "react";
// Removed: import { FaEnvelope, FaLinkedinIn, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// --- Helper Component: LinkIcon ---
// Standardized link element to use the custom CSS classes, now accepting an iconContent string (like an emoji).
const LinkIcon = ({ iconContent, text, href, className = "secondary" }) => (
    <a
        href={href}
        // Conditionally set target/rel based on whether it's an external link
        target={href.startsWith('mailto:') ? '_self' : '_blank'}
        rel={href.startsWith('mailto:') ? '' : 'noopener noreferrer'} 
        className={`link-button ${className}`}
        aria-label={text}
    >
        {/* iconContent is now an emoji string */}
        <span className="icon-emoji">{iconContent}</span> 
        <span className="truncate">{text}</span>
    </a>
);


const Contact = () => {
    const contactDetails = {
        email: "shivamshishodia2000@gmail.com",
        linkedin: "https://www.linkedin.com/in/shivam-shishodia-6664431b1/",
        github: "https://github.com/shivamshishodia200",
        resumeLink: "https://drive.google.com/uc?export=download&id=1Hb95I3Ja8r3wHznCok3-j-p55BxMS4wg",
    };

    return (
        <>
            {/* Custom CSS for the premium look is embedded here */}
            <style>
                {`
                    /* Define CSS Variables for easy theme changing */
                    :root {
                        --color-primary: #22d3ee; /* Bright Cyan/Teal */
                        --color-text-light: #e2e8f0; /* Light Slate */
                        --color-text-muted: #94a3b8; /* Muted Slate */
                        --color-bg-dark: #0f172a; /* Slate 900 */
                        --color-bg-medium: #1e293b; /* Slate 800 */
                    }

                    /* === CONTACT SECTION (PREMIUM VERSION) === */
                    .contact-section {
                        background: linear-gradient(180deg, #0d0c1d 0%, #1a1a2e 50%, #0f172a 100%);
                        color: var(--color-text-light);
                        padding: 7rem 1.5rem 8rem;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        text-align: center;
                        scroll-margin-top: 4rem;
                        font-family: 'Inter', sans-serif;
                        position: relative;
                        overflow: hidden;
                    }
                    
                    .contact-section::before {
                        content: '';
                        position: absolute;
                        top: -50%;
                        left: -50%;
                        width: 200%;
                        height: 200%;
                        background: radial-gradient(circle, rgba(34, 211, 238, 0.08) 0%, transparent 70%);
                        animation: rotate 20s linear infinite;
                    }
                    
                    .contact-section::after {
                        content: '';
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        right: 0;
                        height: 2px;
                        background: linear-gradient(90deg, transparent, #61dafb, #00f0a8, transparent);
                        animation: shimmer 3s ease-in-out infinite;
                    }
                    
                    @keyframes rotate {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }
                    
                    @keyframes shimmer {
                        0%, 100% { opacity: 0.3; }
                        50% { opacity: 1; }
                    }

                    /* --- Container --- */
                    .contact-container {
                        max-width: 900px;
                        width: 100%;
                        margin: 0 auto;
                        animation: fadeInUp 1s ease both;
                        position: relative;
                        z-index: 1;
                    }

                    /* --- Header --- */
                    .contact-header-main {
                        font-size: clamp(2.5rem, 5vw, 3.5rem);
                        font-weight: 900;
                        margin-bottom: 0.75rem;
                        background: linear-gradient(135deg, #22d3ee 0%, #0ea5e9 50%, #06b6d4 100%);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        background-clip: text;
                        text-transform: uppercase;
                        letter-spacing: 2px;
                        text-shadow: 0 0 30px rgba(34, 211, 238, 0.5);
                        animation: glow 2s ease-in-out infinite alternate;
                    }
                    
                    @keyframes glow {
                        from { filter: drop-shadow(0 0 10px rgba(34, 211, 238, 0.5)); }
                        to { filter: drop-shadow(0 0 20px rgba(34, 211, 238, 0.8)); }
                    }

                    .contact-header-subtitle {
                        font-size: 1.2rem;
                        font-weight: 500;
                        color: var(--color-text-muted);
                        margin-bottom: 3rem;
                        line-height: 1.8;
                        max-width: 700px;
                        margin-left: auto;
                        margin-right: auto;
                        animation: fadeIn 1.5s ease-in;
                    }
                    
                    @keyframes fadeIn {
                        from { opacity: 0; }
                        to { opacity: 1; }
                    }

                    /* --- Contact Card --- */
                    .contact-card-box {
                        background: linear-gradient(145deg, rgba(26, 26, 46, 0.98), rgba(13, 12, 29, 0.98));
                        border-radius: 2.5rem;
                        padding: 4rem 3rem;
                        border: 2px solid transparent;
                        background-image: 
                            linear-gradient(145deg, rgba(26, 26, 46, 0.98), rgba(13, 12, 29, 0.98)),
                            linear-gradient(135deg, #61dafb, #00f0a8, #61dafb);
                        background-origin: border-box;
                        background-clip: padding-box, border-box;
                        box-shadow: 
                            0 25px 80px rgba(0, 0, 0, 0.7),
                            0 0 0 1px rgba(97, 218, 251, 0.1),
                            inset 0 2px 0 rgba(255, 255, 255, 0.1),
                            inset 0 -2px 20px rgba(0, 0, 0, 0.3);
                        backdrop-filter: blur(30px);
                        transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
                        position: relative;
                        overflow: hidden;
                    }
                    
                    .contact-card-box::before {
                        content: '';
                        position: absolute;
                        top: -50%;
                        left: -50%;
                        width: 200%;
                        height: 200%;
                        background: 
                            radial-gradient(circle at 30% 30%, rgba(97, 218, 251, 0.15) 0%, transparent 50%),
                            radial-gradient(circle at 70% 70%, rgba(0, 240, 168, 0.15) 0%, transparent 50%);
                        animation: cardGlow 4s ease-in-out infinite;
                    }
                    
                    @keyframes cardGlow {
                        0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.6; }
                        50% { transform: translate(5%, 5%) rotate(180deg); opacity: 1; }
                    }

                    .contact-card-box:hover {
                        transform: translateY(-10px) scale(1.02);
                        box-shadow: 
                            0 30px 90px rgba(97, 218, 251, 0.4),
                            0 0 0 1px rgba(97, 218, 251, 0.3),
                            inset 0 2px 0 rgba(255, 255, 255, 0.2),
                            inset 0 -2px 30px rgba(97, 218, 251, 0.1);
                    }

                    .intro-text { /* Applied directly to the description paragraph */
                        font-size: 1.1rem;
                        line-height: 1.9;
                        color: #cbd5e1;
                        max-width: 650px;
                        margin: 0 auto 2.5rem;
                        padding-bottom: 0.5rem;
                        position: relative;
                        z-index: 1;
                    }

                    /* --- Divider / CTA Text --- */
                    .cta-divider {
                        font-size: 0.95rem;
                        font-weight: 700;
                        text-transform: uppercase;
                        letter-spacing: 3px;
                        color: #cbd5e1;
                        margin: 3rem 0 2rem;
                        position: relative;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                    
                    .cta-divider span {
                        padding: 0 1.5rem;
                        background: linear-gradient(145deg, rgba(26, 26, 46, 0.98), rgba(13, 12, 29, 0.98));
                        position: relative;
                        z-index: 2;
                    }
                    
                    /* Styling the pseudo-elements for the line dividers */
                    .cta-divider::before,
                    .cta-divider::after {
                        content: "";
                        position: absolute;
                        top: 50%;
                        width: 60px;
                        height: 2px;
                        background: linear-gradient(90deg, transparent, #61dafb, #00f0a8);
                        transform: translateY(-50%);
                        animation: dividerPulse 2s ease-in-out infinite;
                    }

                    .cta-divider::before {
                        left: calc(50% - 120px); 
                        background: linear-gradient(90deg, transparent, #61dafb, #00f0a8);
                    }

                    .cta-divider::after {
                        right: calc(50% - 120px);
                        background: linear-gradient(90deg, #00f0a8, #61dafb, transparent);
                    }
                    
                    @keyframes dividerPulse {
                        0%, 100% { opacity: 0.5; }
                        50% { opacity: 1; }
                    }
                    
                    @media (min-width: 640px) {
                        .cta-divider::before {
                            left: calc(50% - 140px);
                            width: 100px;
                        }
                        .cta-divider::after {
                            right: calc(50% - 140px);
                            width: 100px;
                        }
                    }

                    /* --- Contact Links Grid --- */
                    .contact-links-grid {
                        display: grid;
                        grid-template-columns: 1fr;
                        gap: 1.25rem;
                        max-width: 520px;
                        margin: 0 auto;
                    }

                    @media (min-width: 640px) {
                        .contact-links-grid {
                            grid-template-columns: repeat(3, 1fr);
                        }
                    }
                    
                    @media (max-width: 639px) {
                        .contact-section {
                            padding: 3rem 1rem;
                        }
                        
                        .contact-card-box {
                            padding: 2rem 1.5rem;
                        }
                        
                        .contact-header-main {
                            font-size: 2rem;
                        }
                    }

                    /* --- Buttons Base Style --- */
                    .link-button {
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        gap: 0.75rem;
                        padding: 1.1rem 1.5rem;
                        border-radius: 14px;
                        font-weight: 600;
                        font-size: 1rem;
                        text-decoration: none;
                        transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
                        width: 100%;
                        border: 2px solid transparent;
                        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
                        position: relative;
                        z-index: 1;
                        overflow: hidden;
                    }
                    
                    .link-button::before {
                        content: '';
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        width: 0;
                        height: 0;
                        border-radius: 50%;
                        background: rgba(255, 255, 255, 0.2);
                        transform: translate(-50%, -50%);
                        transition: width 0.6s, height 0.6s;
                        z-index: -1;
                    }
                    
                    .link-button:hover::before {
                        width: 300px;
                        height: 300px;
                    }

                    .link-button .icon-emoji {
                        font-size: 1.6rem;
                        line-height: 1;
                        transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
                    }

                    .link-button:hover .icon-emoji {
                        transform: rotate(-15deg) scale(1.2);
                    }

                    /* --- Primary Button (Email) --- */
                    .link-button.primary {
                        background: linear-gradient(135deg, #22d3ee 0%, #0ea5e9 100%);
                        color: #000000;
                        border-color: #22d3ee;
                        font-size: 1.15rem;
                        font-weight: 700;
                        box-shadow: 0 10px 30px rgba(34, 211, 238, 0.4);
                    }

                    .link-button.primary:hover,
                    .link-button.primary:focus {
                        background: linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%);
                        transform: translateY(-6px) scale(1.02);
                        box-shadow: 0 15px 40px rgba(14, 165, 233, 0.6);
                        border-color: #0ea5e9;
                    }

                    /* --- Secondary Buttons (LinkedIn, GitHub, Resume) --- */
                    .link-button.secondary {
                        background: rgba(34, 211, 238, 0.1);
                        color: #22d3ee;
                        border-color: rgba(34, 211, 238, 0.5);
                        backdrop-filter: blur(10px);
                    }

                    .link-button.secondary:hover,
                    .link-button.secondary:focus {
                        background: linear-gradient(135deg, #22d3ee 0%, #0ea5e9 100%);
                        color: #000000;
                        border-color: #22d3ee;
                        transform: translateY(-6px) scale(1.05);
                        box-shadow: 0 12px 30px rgba(34, 211, 238, 0.5);
                    }
                    
                    /* --- Animation Keyframes --- */
                    @keyframes fadeInUp {
                        from {
                            opacity: 0;
                            transform: translateY(30px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }

                `}
            </style>

            <section id="contact" className="contact-section">
                <div className="contact-container">

                    {/* --- Section Header --- */}
                    <h2 className="contact-header-main">
                        Get In Touch
                    </h2>
                    <p className="contact-header-subtitle">
                        Let's build something great together. I'm always open to new ideas,
                        collaborations, and opportunities.
                    </p>

                    {/* --- Contact Card Wrapper --- */}
                    <div className="contact-card-box">
                        <p className="intro-text">
                            I’m passionate about full-stack development and mobile app creation.
                            Whether you have a project, a question, or just want to connect, feel
                            free to reach out — I’ll do my best to respond promptly.
                        </p>

                        {/* --- Primary Call to Action (Email) --- */}
                        <div className="mb-8">
                            <LinkIcon
                                iconContent="📧" // Emoji for email
                                text="Send an Email"
                                href={`mailto:${contactDetails.email}`}
                                className="primary"
                            />
                        </div>

                        {/* --- Divider --- */}
                        <div className="cta-divider">
                            <span>
                                or connect via
                            </span>
                        </div>

                        {/* --- Contact Links Grid --- */}
                        <div className="contact-links-grid">
                            
                            {/* LinkedIn */}
                            <LinkIcon
                                iconContent="🔗" // Emoji for link
                                text="Connect on LinkedIn"
                                href={contactDetails.linkedin}
                            />

                            {/* GitHub */}
                            <LinkIcon
                                iconContent="💻" // Emoji for laptop/code
                                text="View GitHub"
                                href={contactDetails.github}
                            />

                            {/* Resume */}
                            <LinkIcon
                                iconContent="📄" // Emoji for document
                                text="View Resume"
                                href={contactDetails.resumeLink}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
