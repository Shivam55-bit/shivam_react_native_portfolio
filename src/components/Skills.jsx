import React from "react";
import { useInView } from "react-intersection-observer";
// Note: We are removing the icons as they are not in the target image.

const skills = [
    // We are updating the data to match the image's labels/levels for demonstration
    { name: "HTML", level: 94 },
    { name: "CSS", level: 84 },
    { name: "JavaScript", level: 50 },
    { name: "Python", level: 90 },
    // You can add more skills here
];

export default function Skills() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

    return (
        <section id="skills" className="skills-section">
            <div className="skills-container">
                {/* Header Structure to match the image */}
                <h2 className="skills-header-main">Skills</h2>
                <p className="skills-header-subtitle">My Skills</p>
                
                {/* Progress Bar List */}
                <div ref={ref} className="skills-list">
                    {skills.map((skill, index) => (
                        <div key={index} className="skill-item">
                            {/* Skill Name and Percentage */}
                            <div className="skill-info">
                                <span className="skill-name">{skill.name}</span>
                                <span className="skill-percentage">{skill.level}%</span>
                            </div>
                            
                            {/* Progress Bar */}
                            <div className="progress-bar-bg">
                                <div
                                    className="progress-bar-fill"
                                    style={{ width: inView ? `${skill.level}%` : "0%" }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}