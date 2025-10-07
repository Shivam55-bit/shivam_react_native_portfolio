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
        email: "yourname@example.com",
        linkedin: "https://linkedin.com/in/yourprofile",
        github: "https://github.com/yourusername",
        resumeLink: "/path/to/your/resume.pdf", // Replace with your actual resume link
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
                        background: linear-gradient(180deg, var(--color-bg-dark) 0%, var(--color-bg-medium) 100%);
                        color: var(--color-text-light);
                        padding: 5rem 1.5rem;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        text-align: center;
                        scroll-margin-top: 4rem;
                        font-family: 'Inter', sans-serif;
                    }

                    /* --- Container --- */
                    .contact-container {
                        max-width: 900px;
                        width: 100%;
                        margin: 0 auto;
                        animation: fadeInUp 1s ease both;
                    }

                    /* --- Header --- */
                    .contact-header-main {
                        font-size: clamp(2.5rem, 5vw, 3rem);
                        font-weight: 800;
                        margin-bottom: 0.75rem;
                        color: var(--color-primary);
                        text-transform: uppercase;
                        letter-spacing: 1px;
                        text-shadow: 0 0 15px rgba(34, 211, 238, 0.4);
                    }

                    .contact-header-subtitle {
                        font-size: 1.1rem;
                        font-weight: 500;
                        color: var(--color-text-muted);
                        margin-bottom: 2.5rem;
                        line-height: 1.6;
                    }

                    /* --- Contact Card --- */
                    .contact-card-box {
                        background: rgba(30, 41, 59, 0.9);
                        border-radius: 1.5rem;
                        padding: 3rem 2rem;
                        border: 1px solid rgba(56, 189, 248, 0.25);
                        box-shadow: 0 12px 30px rgba(0, 0, 0, 0.45);
                        backdrop-filter: blur(10px);
                        transition: transform 0.4s ease, box-shadow 0.4s ease;
                    }

                    .contact-card-box:hover {
                        transform: translateY(-6px);
                        box-shadow: 0 18px 40px rgba(34, 211, 238, 0.25);
                    }

                    .intro-text { /* Applied directly to the description paragraph */
                        font-size: 1.05rem;
                        line-height: 1.8;
                        color: var(--color-text-muted);
                        max-width: 620px;
                        margin: 0 auto 2rem;
                        padding-bottom: 0.5rem;
                    }

                    /* --- Divider / CTA Text --- */
                    .cta-divider {
                        font-size: 0.9rem;
                        font-weight: 700;
                        text-transform: uppercase;
                        letter-spacing: 2px;
                        color: var(--color-text-light);
                        margin: 2.5rem 0 1.5rem;
                        position: relative;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                    
                    /* Styling the pseudo-elements for the line dividers */
                    .cta-divider::before,
                    .cta-divider::after {
                        content: "";
                        position: absolute;
                        top: 50%;
                        width: 50px;
                        height: 1px;
                        background: var(--color-primary);
                        transform: translateY(-50%);
                    }

                    .cta-divider::before {
                        left: calc(50% - 100px); 
                    }

                    .cta-divider::after {
                        right: calc(50% - 100px);
                    }
                    
                    @media (min-width: 640px) {
                        .cta-divider::before {
                            left: calc(50% - 120px);
                            width: 80px;
                        }
                        .cta-divider::after {
                            right: calc(50% - 120px);
                            width: 80px;
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

                    /* --- Buttons Base Style --- */
                    .link-button {
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        gap: 0.75rem;
                        padding: 1rem 1.25rem;
                        border-radius: 12px;
                        font-weight: 600;
                        font-size: 1rem;
                        text-decoration: none;
                        transition: all 0.35s ease;
                        width: 100%;
                        border: 2px solid transparent;
                        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
                    }

                    .link-button .icon-emoji {
                        font-size: 1.5rem;
                        line-height: 1;
                        transition: transform 0.3s ease;
                    }

                    .link-button:hover .icon-emoji {
                        transform: rotate(-10deg) scale(1.1);
                    }

                    /* --- Primary Button (Email) --- */
                    .link-button.primary {
                        background: var(--color-primary);
                        color: var(--color-bg-dark);
                        border-color: var(--color-primary);
                        font-size: 1.1rem;
                    }

                    .link-button.primary:hover,
                    .link-button.primary:focus {
                        background: #0ea5e9; 
                        transform: translateY(-4px);
                        box-shadow: 0 10px 25px rgba(14, 165, 233, 0.4);
                    }

                    /* --- Secondary Buttons (LinkedIn, GitHub, Resume) --- */
                    .link-button.secondary {
                        background: rgba(255, 255, 255, 0.05);
                        color: var(--color-primary);
                        border-color: var(--color-primary);
                    }

                    .link-button.secondary:hover,
                    .link-button.secondary:focus {
                        background: var(--color-primary);
                        color: var(--color-bg-dark);
                        transform: translateY(-4px);
                        box-shadow: 0 10px 25px rgba(34, 211, 238, 0.4);
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
