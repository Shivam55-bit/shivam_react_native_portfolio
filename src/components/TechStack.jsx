import React from 'react';

const TechStack = () => {
  const techCategories = [
    {
      id: 1,
      category: "Frontend",
      icon: "🎨",
      technologies: [
        { name: "React.js", proficiency: 95, color: "#61dafb" },
        { name: "React Native", proficiency: 95, color: "#61dafb" },
        { name: "Flutter", proficiency: 85, color: "#02569B" },
        { name: "JavaScript", proficiency: 90, color: "#f7df1e" },
        { name: "TypeScript", proficiency: 85, color: "#3178c6" },
        { name: "HTML5/CSS3", proficiency: 95, color: "#e34f26" },
        { name: "Redux", proficiency: 90, color: "#764abc" },
        { name: "Tailwind CSS", proficiency: 90, color: "#06b6d4" }
      ]
    },
    {
      id: 2,
      category: "Backend",
      icon: "⚙️",
      technologies: [
        { name: "Node.js", proficiency: 90, color: "#339933" },
        { name: "Express.js", proficiency: 90, color: "#000000" },
        { name: "Firebase", proficiency: 90, color: "#ffca28" },
        { name: "MongoDB", proficiency: 85, color: "#47a248" },
        { name: "RESTful APIs", proficiency: 95, color: "#00d8ff" },
        { name: "Firestore", proficiency: 90, color: "#ffca28" }
      ]
    },
    {
      id: 3,
      category: "Mobile Development",
      icon: "📱",
      technologies: [
        { name: "iOS Development", proficiency: 85, color: "#000000" },
        { name: "Android Development", proficiency: 90, color: "#3ddc84" },
        { name: "React Navigation", proficiency: 95, color: "#6366f1" },
        { name: "Axios", proficiency: 90, color: "#5a29e4" },
        { name: "Push Notifications", proficiency: 85, color: "#ff6b6b" }
      ]
    },
    {
      id: 4,
      category: "Tools & Others",
      icon: "🛠️",
      technologies: [
        { name: "Git/GitHub", proficiency: 95, color: "#f05032" },
        { name: "VS Code", proficiency: 95, color: "#007acc" },
        { name: "Figma", proficiency: 85, color: "#f24e1e" },
        { name: "Postman", proficiency: 90, color: "#ff6c37" },
        { name: "Agile/Scrum", proficiency: 85, color: "#0052cc" },
        { name: "AI Tools (Copilot)", proficiency: 90, color: "#00d4ff" }
      ]
    }
  ];

  return (
    <>
      <style>
        {`
          .techstack-section {
            background: linear-gradient(180deg, #0f172a 0%, #1a1a2e 50%, #0d0c1d 100%);
            color: #ffffff;
            padding: 6rem 2rem;
            scroll-margin-top: 80px;
            position: relative;
            overflow: hidden;
          }

          .techstack-section::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: 
              radial-gradient(circle at 10% 20%, rgba(97, 218, 251, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 90% 80%, rgba(0, 240, 168, 0.1) 0%, transparent 50%);
            pointer-events: none;
          }

          .techstack-container {
            max-width: 1400px;
            margin: 0 auto;
            position: relative;
            z-index: 1;
          }

          .techstack-header {
            text-align: center;
            margin-bottom: 5rem;
          }

          .techstack-title {
            font-size: 3.5rem;
            font-weight: 900;
            background: linear-gradient(135deg, #61dafb 0%, #00f0a8 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 1rem;
            text-transform: uppercase;
            letter-spacing: 2px;
            animation: titleGlow 2s ease-in-out infinite alternate;
          }

          @keyframes titleGlow {
            from { filter: drop-shadow(0 0 10px rgba(97, 218, 251, 0.5)); }
            to { filter: drop-shadow(0 0 20px rgba(97, 218, 251, 0.8)); }
          }

          .techstack-subtitle {
            font-size: 1.2rem;
            color: #94a3b8;
            max-width: 700px;
            margin: 0 auto;
            line-height: 1.8;
          }

          .techstack-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
            gap: 3rem;
            margin-top: 3rem;
          }

          .tech-category-card {
            background: linear-gradient(145deg, rgba(26, 26, 46, 0.9), rgba(13, 12, 29, 0.9));
            border-radius: 24px;
            padding: 2.5rem;
            border: 2px solid transparent;
            background-image: 
              linear-gradient(145deg, rgba(26, 26, 46, 0.9), rgba(13, 12, 29, 0.9)),
              linear-gradient(135deg, rgba(97, 218, 251, 0.3), rgba(0, 240, 168, 0.3));
            background-origin: border-box;
            background-clip: padding-box, border-box;
            backdrop-filter: blur(10px);
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            opacity: 0;
            animation: cardSlideIn 0.8s ease forwards;
            position: relative;
            overflow: hidden;
          }

          .tech-category-card:nth-child(1) { animation-delay: 0.1s; }
          .tech-category-card:nth-child(2) { animation-delay: 0.2s; }
          .tech-category-card:nth-child(3) { animation-delay: 0.3s; }
          .tech-category-card:nth-child(4) { animation-delay: 0.4s; }

          @keyframes cardSlideIn {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .tech-category-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(97, 218, 251, 0.1) 0%, transparent 50%);
            opacity: 0;
            transition: opacity 0.3s ease;
            pointer-events: none;
          }

          .tech-category-card:hover::before {
            opacity: 1;
          }

          .tech-category-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 60px rgba(97, 218, 251, 0.3);
          }

          .category-header {
            display: flex;
            align-items: center;
            gap: 1rem;
            margin-bottom: 2rem;
            padding-bottom: 1rem;
            border-bottom: 2px solid rgba(97, 218, 251, 0.2);
          }

          .category-icon {
            font-size: 2.5rem;
            animation: iconFloat 3s ease-in-out infinite;
          }

          @keyframes iconFloat {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }

          .category-name {
            font-size: 1.8rem;
            font-weight: 700;
            color: #ffffff;
            text-transform: uppercase;
            letter-spacing: 1px;
          }

          .tech-items {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
          }

          .tech-item {
            position: relative;
          }

          .tech-info {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 0.5rem;
          }

          .tech-name {
            font-size: 1.1rem;
            font-weight: 600;
            color: #cbd5e1;
          }

          .tech-percentage {
            font-size: 0.95rem;
            font-weight: 700;
            color: #61dafb;
          }

          .progress-bar-container {
            width: 100%;
            height: 10px;
            background: rgba(30, 41, 59, 0.8);
            border-radius: 10px;
            overflow: hidden;
            position: relative;
            box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.3);
          }

          .progress-bar {
            height: 100%;
            background: linear-gradient(90deg, var(--tech-color), var(--tech-color-light));
            border-radius: 10px;
            position: relative;
            transition: width 1.5s cubic-bezier(0.4, 0, 0.2, 1);
            animation: progressShine 2s ease-in-out infinite;
          }

          .progress-bar::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
            animation: shimmer 2s ease-in-out infinite;
          }

          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }

          @keyframes progressShine {
            0%, 100% { box-shadow: 0 0 10px var(--tech-color); }
            50% { box-shadow: 0 0 20px var(--tech-color); }
          }

          @media (max-width: 768px) {
            .techstack-section {
              padding: 4rem 1.5rem;
            }

            .techstack-title {
              font-size: 2.5rem;
            }

            .techstack-grid {
              grid-template-columns: 1fr;
              gap: 2rem;
            }

            .tech-category-card {
              padding: 2rem;
            }

            .category-icon {
              font-size: 2rem;
            }

            .category-name {
              font-size: 1.4rem;
            }
          }
        `}
      </style>

      <section id="techstack" className="techstack-section">
        <div className="techstack-container">
          <div className="techstack-header">
            <h2 className="techstack-title">Tech Stack</h2>
            <p className="techstack-subtitle">
              My technical expertise and proficiency levels across various technologies
            </p>
          </div>

          <div className="techstack-grid">
            {techCategories.map((category) => (
              <div key={category.id} className="tech-category-card">
                <div className="category-header">
                  <span className="category-icon">{category.icon}</span>
                  <h3 className="category-name">{category.category}</h3>
                </div>

                <div className="tech-items">
                  {category.technologies.map((tech, index) => (
                    <div key={index} className="tech-item">
                      <div className="tech-info">
                        <span className="tech-name">{tech.name}</span>
                        <span className="tech-percentage">{tech.proficiency}%</span>
                      </div>
                      <div className="progress-bar-container">
                        <div 
                          className="progress-bar"
                          style={{
                            '--tech-color': tech.color,
                            '--tech-color-light': tech.color + '99',
                            width: `${tech.proficiency}%`
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
    </>
  );
};

export default TechStack;
