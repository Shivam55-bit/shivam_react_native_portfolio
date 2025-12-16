import React from 'react';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: "🌐",
      title: "Web Development",
      description: "Building responsive, high-performance web applications using modern technologies like React, Node.js, and Next.js.",
      features: [
        "Custom Web Applications",
        "Responsive Design",
        "Performance Optimization",
        "SEO Optimization"
      ],
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      id: 2,
      icon: "📱",
      title: "Mobile App Development",
      description: "Creating native and cross-platform mobile applications that deliver seamless user experiences on iOS and Android.",
      features: [
        "React Native Apps",
        "Cross-Platform Solutions",
        "Native Performance",
        "App Store Deployment"
      ],
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      id: 3,
      icon: "🎨",
      title: "UI/UX Design",
      description: "Designing intuitive and visually appealing interfaces that enhance user engagement and satisfaction.",
      features: [
        "User Interface Design",
        "Wireframing & Prototyping",
        "User Experience Research",
        "Design Systems"
      ],
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
      id: 4,
      icon: "⚡",
      title: "Backend Development",
      description: "Developing robust and scalable backend systems with RESTful APIs, databases, and cloud integration.",
      features: [
        "RESTful API Development",
        "Database Design",
        "Cloud Integration (AWS, Azure)",
        "Microservices Architecture"
      ],
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
    },
    {
      id: 5,
      icon: "🔧",
      title: "Maintenance & Support",
      description: "Providing ongoing maintenance, updates, and technical support to ensure your applications run smoothly.",
      features: [
        "Bug Fixes & Updates",
        "Performance Monitoring",
        "Security Patches",
        "24/7 Technical Support"
      ],
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
    },
    {
      id: 6,
      icon: "🚀",
      title: "Consulting & Strategy",
      description: "Offering expert advice on technology stack selection, architecture design, and digital transformation strategies.",
      features: [
        "Technology Consulting",
        "Architecture Planning",
        "Code Review",
        "Team Training"
      ],
      gradient: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)"
    }
  ];

  return (
    <>
      <style>
        {`
          .services-section {
            background: linear-gradient(180deg, #1a1a2e 0%, #0d0c1d 100%);
            color: #ffffff;
            padding: 6rem 2rem;
            scroll-margin-top: 80px;
            position: relative;
            overflow: hidden;
          }

          .services-section::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(97, 218, 251, 0.05) 0%, transparent 70%);
            animation: rotateBackground 30s linear infinite;
          }

          @keyframes rotateBackground {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }

          .services-container {
            max-width: 1400px;
            margin: 0 auto;
            position: relative;
            z-index: 1;
          }

          .services-header {
            text-align: center;
            margin-bottom: 5rem;
          }

          .services-title {
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

          .services-subtitle {
            font-size: 1.2rem;
            color: #bbb;
            max-width: 700px;
            margin: 0 auto;
            line-height: 1.8;
          }

          .services-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 2.5rem;
            margin-top: 3rem;
          }

          .service-card {
            background: rgba(26, 26, 46, 0.6);
            border-radius: 24px;
            padding: 2.5rem;
            position: relative;
            overflow: hidden;
            backdrop-filter: blur(10px);
            border: 2px solid rgba(97, 218, 251, 0.1);
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            opacity: 0;
            animation: cardFadeIn 0.8s ease forwards;
          }

          .service-card:nth-child(1) { animation-delay: 0.1s; }
          .service-card:nth-child(2) { animation-delay: 0.2s; }
          .service-card:nth-child(3) { animation-delay: 0.3s; }
          .service-card:nth-child(4) { animation-delay: 0.4s; }
          .service-card:nth-child(5) { animation-delay: 0.5s; }
          .service-card:nth-child(6) { animation-delay: 0.6s; }

          @keyframes cardFadeIn {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .service-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: var(--card-gradient);
            opacity: 0;
            transition: opacity 0.4s ease;
          }

          .service-card:hover::before {
            opacity: 1;
          }

          .service-card:hover {
            transform: translateY(-12px) scale(1.02);
            border-color: rgba(97, 218, 251, 0.3);
            box-shadow: 0 25px 60px rgba(0, 0, 0, 0.6),
                        0 0 40px rgba(97, 218, 251, 0.2);
          }

          .service-icon {
            font-size: 4rem;
            margin-bottom: 1.5rem;
            display: inline-block;
            transition: transform 0.4s ease;
          }

          .service-card:hover .service-icon {
            transform: scale(1.15) rotate(-5deg);
          }

          .service-title-text {
            font-size: 1.8rem;
            font-weight: 700;
            color: #ffffff;
            margin-bottom: 1rem;
            transition: color 0.3s ease;
          }

          .service-card:hover .service-title-text {
            background: var(--card-gradient);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          .service-description {
            font-size: 1.05rem;
            line-height: 1.7;
            color: #94a3b8;
            margin-bottom: 1.5rem;
          }

          .service-features {
            list-style: none;
            padding: 0;
            margin: 0;
          }

          .service-features li {
            font-size: 0.95rem;
            color: #cbd5e1;
            padding: 0.6rem 0;
            padding-left: 1.8rem;
            position: relative;
            border-bottom: 1px solid rgba(97, 218, 251, 0.1);
            transition: all 0.3s ease;
          }

          .service-features li:last-child {
            border-bottom: none;
          }

          .service-features li::before {
            content: '✓';
            position: absolute;
            left: 0;
            color: #00f0a8;
            font-weight: bold;
            font-size: 1.2rem;
            transition: transform 0.3s ease;
          }

          .service-features li:hover {
            padding-left: 2rem;
            color: #ffffff;
          }

          .service-features li:hover::before {
            transform: scale(1.2);
          }

          .service-cta {
            margin-top: 2rem;
            padding-top: 1.5rem;
            border-top: 2px solid rgba(97, 218, 251, 0.1);
          }

          .service-btn {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            background: rgba(97, 218, 251, 0.1);
            color: #61dafb;
            padding: 0.8rem 1.5rem;
            border-radius: 12px;
            font-weight: 600;
            font-size: 0.95rem;
            border: 2px solid rgba(97, 218, 251, 0.3);
            transition: all 0.3s ease;
            cursor: pointer;
            text-decoration: none;
          }

          .service-btn:hover {
            background: var(--card-gradient);
            color: #000000;
            border-color: transparent;
            transform: translateX(5px);
            box-shadow: 0 5px 20px rgba(97, 218, 251, 0.4);
          }

          @media (max-width: 768px) {
            .services-section {
              padding: 4rem 1.5rem;
            }

            .services-title {
              font-size: 2.5rem;
            }

            .services-grid {
              grid-template-columns: 1fr;
              gap: 2rem;
            }

            .service-card {
              padding: 2rem;
            }

            .service-icon {
              font-size: 3rem;
            }

            .service-title-text {
              font-size: 1.5rem;
            }
          }
        `}
      </style>

      <section id="services" className="services-section">
        <div className="services-container">
          <div className="services-header">
            <h2 className="services-title">My Services</h2>
            <p className="services-subtitle">
              Comprehensive solutions tailored to bring your ideas to life with cutting-edge technology
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <div 
                key={service.id} 
                className="service-card"
                style={{ '--card-gradient': service.gradient }}
              >
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title-text">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                
                <ul className="service-features">
                  {service.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>

                <div className="service-cta">
                  <a href="#contact" className="service-btn">
                    Get Started →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
