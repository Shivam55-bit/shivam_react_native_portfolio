import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart, FaCode, FaArrowUp } from "react-icons/fa";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    
    return (
        <>
            <style>
                {`
                    .footer {
                        width: 100%;
                        margin: 0;
                        background: linear-gradient(180deg, #0f172a 0%, #0d0c1d 100%);
                        color: #ffffff;
                        padding: 4rem 2rem 2rem;
                        text-align: center;
                        box-sizing: border-box;
                        border-top: 2px solid rgba(97, 218, 251, 0.2);
                        position: relative;
                        overflow: hidden;
                    }
                    
                    .footer::before {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        height: 100%;
                        background: radial-gradient(ellipse at top, rgba(97, 218, 251, 0.05) 0%, transparent 60%);
                        pointer-events: none;
                    }
                    
                    .footer-content {
                        max-width: 1400px;
                        margin: 0 auto;
                        position: relative;
                        z-index: 1;
                    }
                    
                    .footer-top {
                        display: grid;
                        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                        gap: 3rem;
                        margin-bottom: 3rem;
                        text-align: left;
                    }
                    
                    .footer-section {
                        animation: fadeInUp 0.8s ease forwards;
                    }
                    
                    .footer-section:nth-child(1) { animation-delay: 0.1s; opacity: 0; }
                    .footer-section:nth-child(2) { animation-delay: 0.2s; opacity: 0; }
                    .footer-section:nth-child(3) { animation-delay: 0.3s; opacity: 0; }
                    
                    @keyframes fadeInUp {
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                        from {
                            opacity: 0;
                            transform: translateY(20px);
                        }
                    }
                    
                    .footer-logo {
                        font-size: 1.8rem;
                        font-weight: 900;
                        background: linear-gradient(135deg, #61dafb 0%, #00f0a8 100%);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        background-clip: text;
                        margin-bottom: 1rem;
                        display: inline-block;
                    }
                    
                    .footer-tagline {
                        font-size: 1rem;
                        color: #94a3b8;
                        line-height: 1.7;
                        margin-bottom: 1.5rem;
                    }
                    
                    .footer-section-title {
                        font-size: 1.2rem;
                        font-weight: 700;
                        color: #61dafb;
                        margin-bottom: 1.2rem;
                        text-transform: uppercase;
                        letter-spacing: 1px;
                    }
                    
                    .footer-links {
                        list-style: none;
                        padding: 0;
                        margin: 0;
                    }
                    
                    .footer-links li {
                        margin-bottom: 0.8rem;
                    }
                    
                    .footer-links a {
                        color: #cbd5e1;
                        text-decoration: none;
                        font-size: 0.95rem;
                        transition: all 0.3s ease;
                        display: inline-block;
                    }
                    
                    .footer-links a:hover {
                        color: #61dafb;
                        transform: translateX(5px);
                    }
                    
                    .footer-socials-section {
                        display: flex;
                        gap: 1rem;
                        flex-wrap: wrap;
                    }
                    
                    .footer-socials-section a {
                        width: 45px;
                        height: 45px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        background: rgba(97, 218, 251, 0.1);
                        border: 2px solid rgba(97, 218, 251, 0.3);
                        border-radius: 12px;
                        color: #61dafb;
                        font-size: 1.3rem;
                        transition: all 0.3s ease;
                        text-decoration: none;
                    }
                    
                    .footer-socials-section a:hover {
                        background: linear-gradient(135deg, #61dafb, #00f0a8);
                        color: #000000;
                        border-color: transparent;
                        transform: translateY(-5px) scale(1.1);
                        box-shadow: 0 10px 25px rgba(97, 218, 251, 0.4);
                    }
                    
                    .footer-divider {
                        height: 2px;
                        background: linear-gradient(90deg, transparent, #61dafb, #00f0a8, transparent);
                        margin: 2.5rem 0;
                        opacity: 0.3;
                    }
                    
                    .footer-bottom {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        flex-wrap: wrap;
                        gap: 1.5rem;
                    }
                    
                    .footer-text {
                        font-size: 1rem;
                        color: #cbd5e1;
                        display: flex;
                        align-items: center;
                        gap: 0.5rem;
                        flex-wrap: wrap;
                        justify-content: center;
                    }
                    
                    .footer-text .heart-icon {
                        color: #ef4444;
                        animation: heartbeat 1.5s ease infinite;
                    }
                    
                    @keyframes heartbeat {
                        0%, 100% { transform: scale(1); }
                        25% { transform: scale(1.2); }
                        50% { transform: scale(1); }
                    }
                    
                    .footer-text strong {
                        background: linear-gradient(135deg, #61dafb, #00f0a8);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        background-clip: text;
                        font-weight: 700;
                    }
                    
                    .footer-copyright {
                        font-size: 0.9rem;
                        color: #64748b;
                    }
                    
                    .scroll-to-top {
                        width: 50px;
                        height: 50px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        background: linear-gradient(135deg, #61dafb, #00f0a8);
                        color: #000000;
                        border: none;
                        border-radius: 50%;
                        font-size: 1.2rem;
                        cursor: pointer;
                        transition: all 0.3s ease;
                        box-shadow: 0 5px 20px rgba(97, 218, 251, 0.4);
                    }
                    
                    .scroll-to-top:hover {
                        transform: translateY(-5px) scale(1.1);
                        box-shadow: 0 10px 30px rgba(97, 218, 251, 0.6);
                    }
                    
                    @media (max-width: 768px) {
                        .footer {
                            padding: 3rem 1.5rem 2rem;
                        }
                        
                        .footer-top {
                            grid-template-columns: 1fr;
                            gap: 2.5rem;
                            text-align: center;
                        }
                        
                        .footer-bottom {
                            flex-direction: column;
                            text-align: center;
                        }
                        
                        .footer-socials-section {
                            justify-content: center;
                        }
                        
                        .footer-links a:hover {
                            transform: translateX(0) scale(1.05);
                        }
                    }
                `}
            </style>
            
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-top">
                        <div className="footer-section">
                            <h3 className="footer-logo">Shivam Shishodia</h3>
                            <p className="footer-tagline">
                                <FaCode style={{ display: 'inline', marginRight: '0.5rem', color: '#61dafb' }} />
                                Full Stack Developer crafting digital experiences with passion and precision.
                            </p>
                        </div>
                        
                        <div className="footer-section">
                            <h4 className="footer-section-title">Quick Links</h4>
                            <ul className="footer-links">
                                <li><a href="#about">About Me</a></li>
                                <li><a href="#skills">Skills</a></li>
                                <li><a href="#experience">Experience</a></li>
                                <li><a href="#services">Services</a></li>
                                <li><a href="#projects">Projects</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                        </div>
                        
                        <div className="footer-section">
                            <h4 className="footer-section-title">Connect</h4>
                            <div className="footer-socials-section">
                                <a href="https://github.com/Shivam55-bit" target="_blank" rel="noreferrer" aria-label="GitHub">
                                    <FaGithub />
                                </a>
                                <a href="https://www.linkedin.com/in/shivam-shishodia-6664431b1/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                                    <FaLinkedin />
                                </a>
                                <a href="https://mail.google.com/mail/u/0/?view=cm&to=shivamshishodia2000@gmail.com" target="_blank" rel="noreferrer" aria-label="Email">
                                    <FaEnvelope />
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="footer-divider"></div>
                    
                    <div className="footer-bottom">
                        <p className="footer-text">
                            Built with <FaHeart className="heart-icon" /> by <strong>Shivam Shishodia</strong>
                        </p>
                        <p className="footer-copyright">
                            &copy; {currentYear} All rights reserved.
                        </p>
                        <button onClick={scrollToTop} className="scroll-to-top" aria-label="Scroll to top">
                            <FaArrowUp />
                        </button>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
