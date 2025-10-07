import React from "react";

// The simplified Footer component focuses only on copyright information.
const Footer = () => {
    // Get the current year dynamically
    const currentYear = new Date().getFullYear(); 
    
    return (
        <>
            {/* Essential CSS for the dark theme and footer look */}
            <style>
                {`
                    /* Define CSS Variables for easy theme changing */
                    :root {
                        --color-primary: #22d3ee; /* Bright Cyan/Teal */
                        --color-text-light: #f1f5f9; /* Light Slate 100 */
                        --color-text-muted: #94a3b8; /* Muted Slate 400 */
                        --color-bg-dark: #0f172a; /* Slate 900 */
                        --color-bg-medium: #1e293b; /* Slate 800 */
                    }

                    /* === FOOTER SECTION === */
                    .page-footer-container {
                        /* Radial gradient for depth */
                        background: radial-gradient(circle at center top, var(--color-bg-medium) 0%, var(--color-bg-dark) 100%);
                        color: var(--color-text-light);
                        padding: 4rem 1.5rem 2rem; /* Increased top padding for space */
                        font-family: 'Inter', sans-serif;
                        text-align: center;
                        width: 100%;
                        /* Soft shadow for separation from the page content */
                        box-shadow: 0 -10px 20px rgba(0, 0, 0, 0.4); 
                    }
                    
                    /* New styles for Logo/Initials placeholder */
                    .footer-logo {
                        font-size: 2.5rem;
                        font-weight: 900;
                        color: var(--color-primary);
                        letter-spacing: 2px;
                        margin-bottom: 1.5rem;
                        text-shadow: 0 0 10px rgba(34, 211, 238, 0.6);
                        /* Subtle pulse animation */
                        animation: pulse 3s infinite ease-in-out;
                    }

                    /* Decorative Scroll Arrow (CSS Triangle for an upward arrow) */
                    .scroll-arrow-decorative {
                        width: 20px;
                        height: 20px;
                        border: solid var(--color-primary);
                        border-width: 0 3px 3px 0;
                        display: inline-block;
                        padding: 3px;
                        transform: rotate(-135deg);
                        margin: 0 auto 1rem;
                        /* Bouncing animation */
                        animation: bounce 2s infinite;
                        opacity: 0.8;
                    }


                    .copyright-footer {
                        max-width: 900px;
                        margin: 0 auto;
                        padding-top: 1.5rem;
                        /* Thicker border and soft glow */
                        border-top: 2px solid var(--color-bg-medium); 
                        box-shadow: 0 -1px 5px rgba(34, 211, 238, 0.2); 
                        font-size: 0.9rem;
                        color: var(--color-text-muted);
                        opacity: 0.9;
                    }

                    .copyright-text {
                        color: var(--color-text-light); /* Used light text for better contrast */
                        font-weight: 600; /* Bolder */
                        margin-bottom: 0.25rem;
                        text-shadow: 0 0 3px rgba(255, 255, 255, 0.1); /* Subtle shadow on text */
                    }

                    /* --- Animation Keyframes --- */
                    @keyframes bounce {
                        0%, 20%, 50%, 80%, 100% {
                            transform: translateY(0) rotate(-135deg);
                        }
                        40% {
                            transform: translateY(-8px) rotate(-135deg);
                        }
                        60% {
                            transform: translateY(-4px) rotate(-135deg);
                        }
                    }

                    @keyframes pulse {
                        0% { transform: scale(1); opacity: 1; }
                        50% { transform: scale(1.05); opacity: 0.9; }
                        100% { transform: scale(1); opacity: 1; }
                    }
                `}
            </style>

            {/* Use a generic div container to apply the main background/padding */}
            <div className="page-footer-container">
                <div className="scroll-arrow-decorative" aria-hidden="true"></div>
                
                {/* Placeholder logo/initials */}
                <p className="footer-logo">J.D.</p> 

                <footer className="copyright-footer">
                    <p className="copyright-text">
                        Built with ❤️ by Shivam Shishodia
                    </p>
                    <p>
                        &copy; {currentYear} All rights reserved.
                    </p>
                </footer>
            </div>
        </>
    );
};

export default Footer;
