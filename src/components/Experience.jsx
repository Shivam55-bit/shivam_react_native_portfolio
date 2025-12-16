import React from 'react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "React Native Developer",
      company: "Bhoomi Techzone Pvt Ltd",
      location: "On-site",
      period: "Aug 2025 - Present",
      description: "Building and deploying multiple cross-platform mobile applications using React Native for iOS and Android with focus on scalability and performance.",
      achievements: [
        "Built and deployed multiple cross-platform mobile apps for iOS and Android",
        "Integrated Firebase Authentication, Firestore, and Realtime Database for secure data management",
        "Designed custom reusable UI components with pixel-perfect layouts and animations",
        "Integrated third-party libraries and SDKs for payments, social logins, and maps",
        "Leveraged AI-powered tools for automated testing and code generation to speed up delivery"
      ],
      technologies: ["React Native", "Redux", "Firebase", "React Navigation", "JavaScript", "Git"]
    },
    {
      id: 2,
      title: "React Native Full Stack Developer",
      company: "Softage Information Technology Limited",
      location: "On-site",
      period: "Dec 2023 - Aug 2025",
      description: "Developed and maintained cross-platform mobile applications with comprehensive backend integration and optimized performance across iOS and Android platforms.",
      achievements: [
        "Developed cross-platform mobile apps using React Native, Flutter, Redux, and Axios",
        "Built and integrated RESTful APIs using Node.js and Express.js with Firebase integration",
        "Designed responsive, pixel-perfect UI with animations based on Figma prototypes",
        "Implemented Firebase Cloud Messaging for push notifications and real-time updates",
        "Optimized app performance using hooks, memoization, and lazy loading modules",
        "Used AI-assisted tools (ChatGPT, GitHub Copilot) to accelerate debugging and code reviews",
        "Collaborated under Agile methodology with QA and backend teams"
      ],
      technologies: ["React Native", "Flutter", "Node.js", "Express.js", "Firebase", "Redux", "Axios", "Git"]
    }
  ];

  return (
    <>
      <style>
        {`
          .experience-section {
            background: linear-gradient(180deg, #0d0c1d 0%, #1a1a2e 100%);
            color: #ffffff;
            padding: 6rem 2rem;
            scroll-margin-top: 80px;
            position: relative;
            overflow: hidden;
          }

          .experience-section::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: radial-gradient(circle at 20% 50%, rgba(97, 218, 251, 0.1) 0%, transparent 50%),
                        radial-gradient(circle at 80% 80%, rgba(0, 240, 168, 0.1) 0%, transparent 50%);
            pointer-events: none;
          }

          .experience-container {
            max-width: 1200px;
            margin: 0 auto;
            position: relative;
            z-index: 1;
          }

          .experience-header {
            text-align: center;
            margin-bottom: 4rem;
          }

          .experience-title {
            font-size: 3.5rem;
            font-weight: 900;
            background: linear-gradient(135deg, #61dafb 0%, #00f0a8 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 1rem;
            text-transform: uppercase;
            letter-spacing: 2px;
          }

          .experience-subtitle {
            font-size: 1.2rem;
            color: #bbb;
            max-width: 600px;
            margin: 0 auto;
            line-height: 1.8;
          }

          .timeline {
            position: relative;
            padding: 2rem 0;
          }

          .timeline::before {
            content: '';
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            width: 3px;
            height: 100%;
            background: linear-gradient(180deg, #61dafb 0%, #00f0a8 100%);
            border-radius: 10px;
          }

          .timeline-item {
            display: flex;
            margin-bottom: 4rem;
            position: relative;
            opacity: 0;
            animation: slideUp 0.8s ease forwards;
          }

          .timeline-item:nth-child(1) { animation-delay: 0.2s; }
          .timeline-item:nth-child(2) { animation-delay: 0.4s; }
          .timeline-item:nth-child(3) { animation-delay: 0.6s; }

          @keyframes slideUp {
            to {
              opacity: 1;
              transform: translateY(0);
            }
            from {
              opacity: 0;
              transform: translateY(30px);
            }
          }

          .timeline-item:nth-child(odd) {
            flex-direction: row;
          }

          .timeline-item:nth-child(even) {
            flex-direction: row-reverse;
          }

          .timeline-content {
            width: calc(50% - 40px);
            background: linear-gradient(145deg, rgba(26, 26, 46, 0.95), rgba(13, 12, 29, 0.95));
            padding: 2.5rem;
            border-radius: 20px;
            border: 2px solid transparent;
            background-image: 
              linear-gradient(145deg, rgba(26, 26, 46, 0.95), rgba(13, 12, 29, 0.95)),
              linear-gradient(135deg, #61dafb, #00f0a8);
            background-origin: border-box;
            background-clip: padding-box, border-box;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
            transition: all 0.4s ease;
            position: relative;
          }

          .timeline-content::before {
            content: '';
            position: absolute;
            top: 50%;
            width: 30px;
            height: 3px;
            background: linear-gradient(90deg, #61dafb, #00f0a8);
          }

          .timeline-item:nth-child(odd) .timeline-content::before {
            right: -30px;
          }

          .timeline-item:nth-child(even) .timeline-content::before {
            left: -30px;
          }

          .timeline-content:hover {
            transform: translateY(-8px) scale(1.02);
            box-shadow: 0 25px 70px rgba(97, 218, 251, 0.3);
          }

          .timeline-marker {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            width: 20px;
            height: 20px;
            background: linear-gradient(135deg, #61dafb, #00f0a8);
            border-radius: 50%;
            border: 4px solid #0d0c1d;
            box-shadow: 0 0 20px rgba(97, 218, 251, 0.6);
            z-index: 10;
            transition: all 0.3s ease;
          }

          .timeline-item:hover .timeline-marker {
            transform: translateX(-50%) scale(1.3);
            box-shadow: 0 0 30px rgba(97, 218, 251, 0.9);
          }

          .exp-role {
            font-size: 1.8rem;
            font-weight: 700;
            color: #61dafb;
            margin-bottom: 0.5rem;
          }

          .exp-company {
            font-size: 1.3rem;
            font-weight: 600;
            color: #00f0a8;
            margin-bottom: 0.5rem;
          }

          .exp-meta {
            display: flex;
            gap: 1.5rem;
            margin-bottom: 1rem;
            flex-wrap: wrap;
          }

          .exp-location,
          .exp-period {
            font-size: 0.95rem;
            color: #bbb;
            display: flex;
            align-items: center;
            gap: 0.5rem;
          }

          .exp-location::before {
            content: '📍';
          }

          .exp-period::before {
            content: '📅';
          }

          .exp-description {
            font-size: 1.05rem;
            line-height: 1.8;
            color: #cbd5e1;
            margin-bottom: 1.5rem;
          }

          .exp-achievements {
            margin-bottom: 1.5rem;
          }

          .exp-achievements-title {
            font-size: 1.1rem;
            font-weight: 600;
            color: #61dafb;
            margin-bottom: 0.8rem;
          }

          .exp-achievements-list {
            list-style: none;
            padding: 0;
          }

          .exp-achievements-list li {
            font-size: 0.95rem;
            color: #94a3b8;
            padding-left: 1.5rem;
            position: relative;
            margin-bottom: 0.5rem;
            line-height: 1.6;
          }

          .exp-achievements-list li::before {
            content: '✓';
            position: absolute;
            left: 0;
            color: #00f0a8;
            font-weight: bold;
            font-size: 1.1rem;
          }

          .exp-tech-stack {
            display: flex;
            flex-wrap: wrap;
            gap: 0.6rem;
          }

          .exp-tech-badge {
            background: rgba(97, 218, 251, 0.1);
            color: #61dafb;
            padding: 0.4rem 0.9rem;
            border-radius: 8px;
            font-size: 0.85rem;
            font-weight: 600;
            border: 1px solid rgba(97, 218, 251, 0.3);
            transition: all 0.3s ease;
          }

          .exp-tech-badge:hover {
            background: rgba(97, 218, 251, 0.2);
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(97, 218, 251, 0.3);
          }

          @media (max-width: 768px) {
            .experience-section {
              padding: 4rem 1.5rem;
            }

            .experience-title {
              font-size: 2.5rem;
            }

            .timeline::before {
              left: 20px;
            }

            .timeline-item {
              flex-direction: column !important;
              padding-left: 50px;
            }

            .timeline-content {
              width: 100%;
            }

            .timeline-content::before {
              left: -30px !important;
              right: auto !important;
            }

            .timeline-marker {
              left: 20px;
              transform: translateX(0);
            }

            .timeline-item:hover .timeline-marker {
              transform: translateX(0) scale(1.3);
            }

            .exp-role {
              font-size: 1.5rem;
            }

            .exp-company {
              font-size: 1.1rem;
            }
          }
        `}
      </style>

      <section id="experience" className="experience-section">
        <div className="experience-container">
          <div className="experience-header">
            <h2 className="experience-title">Work Experience</h2>
            <p className="experience-subtitle">
              My professional journey and career milestones
            </p>
          </div>

          <div className="timeline">
            {experiences.map((exp) => (
              <div key={exp.id} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h3 className="exp-role">{exp.title}</h3>
                  <h4 className="exp-company">{exp.company}</h4>
                  
                  <div className="exp-meta">
                    <span className="exp-location">{exp.location}</span>
                    <span className="exp-period">{exp.period}</span>
                  </div>

                  <p className="exp-description">{exp.description}</p>

                  <div className="exp-achievements">
                    <h5 className="exp-achievements-title">Key Achievements:</h5>
                    <ul className="exp-achievements-list">
                      {exp.achievements.map((achievement, index) => (
                        <li key={index}>{achievement}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="exp-tech-stack">
                    {exp.technologies.map((tech, index) => (
                      <span key={index} className="exp-tech-badge">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
