import React from "react";
import { useInView } from "react-intersection-observer";

const skills = [
  // --- Frontend Skills ---
  { category: "Frontend", name: "React Native", level: 92 },
  { category: "Frontend", name: "React.js", level: 88 },
  { category: "Frontend", name: "JavaScript (ES6+)", level: 85 },
  { category: "Frontend", name: "HTML", level: 94 },
  { category: "Frontend", name: "CSS / Tailwind", level: 86 },

  // --- Backend Skills ---
  { category: "Backend", name: "Node.js", level: 82 },
  { category: "Backend", name: "Express.js", level: 80 },
  { category: "Backend", name: "Firebase", level: 85 },
  { category: "Backend", name: "MongoDB", level: 78 },
  { category: "Backend", name: "RESTful APIs", level: 88 },

  // --- Other / Tools ---
  { category: "Tools & Others", name: "Git / GitHub", level: 90 },
  { category: "Tools & Others", name: "VS Code", level: 95 },
  { category: "Tools & Others", name: "Postman", level: 88 },
  { category: "Tools & Others", name: "Android Studio", level: 87 },
];

export default function Skills() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        {/* Section Header */}
        <h2 className="skills-header-main">Technical Skills</h2>
        <p className="skills-header-subtitle">
          Core technologies & tools I use to build full-stack mobile solutions.
        </p>

        {/* Skills Grouped by Category */}
        <div ref={ref} className="skills-group">
          {["Frontend", "Backend", "Tools & Others"].map((category) => (
            <div key={category} className="skills-category-block">
              <h3 className="skills-category-title">{category}</h3>
              <div className="skills-list">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill, index) => (
                    <div key={index} className="skill-item">
                      <div className="skill-info">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="progress-bar-bg">
                        <div
                          className="progress-bar-fill"
                          style={{
                            width: inView ? `${skill.level}%` : "0%",
                            transition: `width ${1 + index * 0.1}s ease-out`,
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
