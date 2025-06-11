import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('education')

  // Smooth scrolling function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['education', 'projects', 'skills', 'experience', 'awards', 'gallery']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetBottom = offsetTop + element.offsetHeight
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="resume-container">
      {/* Hero Header Section */}
      <header className="hero-header">
        <div className="hero-content">
          <div className="hero-main">
            <div className="hero-image">
                             <img src="/sean-headshot.jpeg" alt="Sean McGrory" className="profile-photo" />
            </div>
            <div className="hero-text">
              <h2 className="hero-subtitle">Welcome! I'm</h2>
              <h1 className="hero-title">Sean McGrory</h1>
            </div>
          </div>
          
          <div className="hero-navigation">
            <button 
              className="nav-section-btn"
              onClick={() => scrollToSection('about')}
            >
              ABOUT ME<span className="nav-description">Queens raised. Cyber trained. Always aimed.</span>
            </button>
            <button 
              className="nav-section-btn"
              onClick={() => scrollToSection('projects')}
            >
              PROJECTS<span className="nav-description">Code deployed. Bugs destroyed. Fully employed (eventually).</span>
            </button>
            <button 
              className="nav-section-btn"
              onClick={() => scrollToSection('experience')}
            >
              EXPERIENCE<span className="nav-description">Learning in motion. Leading by example.</span>
            </button>
            <button 
              className="nav-section-btn"
              onClick={() => scrollToSection('education-skills')}
            >
              EDUCATION & SKILLS<span className="nav-description">Books cracked. Labs hacked. Brain fully stacked.</span>
            </button>
            <button 
              className="nav-section-btn"
              onClick={() => scrollToSection('awards')}
            >
              AWARDS<span className="nav-description">Started with curiosity. Earned by putting in work.</span>
            </button>
            <button 
              className="nav-section-btn"
              onClick={() => scrollToSection('gallery')}
            >
              GALLERY<span className="nav-description">Snapshots of my journey and achievements.</span>
            </button>
          </div>

          <div className="hero-contact">
            <a 
              href="mailto:seanmcgrory@gmail.com" 
              className="contact-btn"
              aria-label="Send email to Sean"
            >
              EMAIL
            </a>
            <span className="contact-divider">|</span>
            <a 
              href="https://github.com/SeanMcGrory-16" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-btn"
              aria-label="View GitHub profile"
            >
              GITHUB
            </a>
            <span className="contact-divider">|</span>
            <a 
              href="https://www.linkedin.com/in/sean-m-mcgrory/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-btn"
              aria-label="View LinkedIn profile"
            >
              LINKEDIN
            </a>
          </div>
        </div>


      </header>

      {/* Section 1: About */}
      <section id="about" className="numbered-section">
        <div className="section-header centered">
          <h2>About Me</h2>
        </div>
        
        <div className="about-content">
          <div className="about-layout">
            <div className="about-text">
              <div className="elevator-pitch">
                <p className="intro-text">
                  Born and raised in Queens, NYC. I'm currently on track to earn my Bachelor of Science in Cybersecurity in 2026 and my Master of Science in 2027 through the Fast Track B.S./M.S. program at St. John's University. Through hands on projects like developing a mobile application, building a full stack banking application, and competing in Capture the Flag events, I've gained experience in penetration testing, Python, Linux, and mobile development. As a member of the ACM Student Chapter and STJ CyberStorm Team, I've grown both technically and professionally, connecting classroom knowledge with real-world application.
                </p>
                
                <p className="mission-text">
                  I'm passionate about spending time with my twin who has special needs and playing sports like golf, football and pickleball. As a proud Knicks and Giants fan, I love following the highs and heartbreaks of New York sports. I'm also deeply interested in finance and markets, always curious about how the world works at both a technical and economic level. Driven by curiosity and core family values, I strive to use technology as a tool for solving real world problems and creating fundamentals.
                </p>
              </div>
            </div>
            
            <div className="about-image">
              <img src="/sean-photo.JPG" alt="Sean McGrory" className="about-photo" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Projects */}
      <section id="projects" className="numbered-section">
        <div className="section-header centered">
          <h2>Projects</h2>
        </div>
        
                <div className="projects-grid">
          <div className="project-card">
            <h3>Burp Suite</h3>
            <p className="project-subtitle">St John's Cyberstorm</p>
            <p className="project-description">
              Utilized Burp Suite Professional for comprehensive web application security testing and vulnerability assessment. Performed penetration testing, intercepted HTTP requests, and identified security flaws in web applications through automated scanning and manual testing techniques.
            </p>
            <div className="project-buttons">
              <a href="https://portswigger.net/burp" target="_blank" rel="noopener noreferrer" className="project-btn primary">Learn More</a>
            </div>
          </div>

          <div className="project-card">
            <h3>Nmap</h3>
            <p className="project-subtitle">St John's Cyberstorm</p>
            <p className="project-description">
              Leveraged Nmap for network discovery and security auditing to analyze server and website infrastructure details. Conducted port scanning, service detection, and OS fingerprinting to assess network security posture and identify potential vulnerabilities in target systems.
            </p>
            <div className="project-buttons">
              <a href="https://nmap.org/" target="_blank" rel="noopener noreferrer" className="project-btn primary">Learn More</a>
            </div>
          </div>

          <div className="project-card">
            <h3>Wireshark</h3>
            <p className="project-subtitle">St John's Cyberstorm</p>
            <p className="project-description">
              Employed Wireshark for deep packet inspection and network traffic analysis to investigate security incidents and monitor network communications. Analyzed incoming network traffic, examined packet contents, and identified suspicious activities for incident response and forensic analysis.
            </p>
            <div className="project-buttons">
              <a href="https://www.wireshark.org/" target="_blank" rel="noopener noreferrer" className="project-btn primary">Learn More</a>
            </div>
          </div>

          <div className="project-card">
            <h3>Ghidra</h3>
            <p className="project-subtitle">St John's Cyberstorm</p>
            <p className="project-description">
              Utilized Ghidra, the NSA's reverse engineering framework, for malware analysis and software disassembly. Performed static analysis on executable files, decompiled binary code to understand program functionality, and analyzed suspicious software for potential security threats and vulnerabilities.
            </p>
            <div className="project-buttons">
              <a href="https://ghidra-sre.org/" target="_blank" rel="noopener noreferrer" className="project-btn primary">Learn More</a>
            </div>
          </div>

          <div className="project-card">
            <h3>ClubConnect</h3>
            <p className="project-subtitle">St John's Hacks</p>
            <p className="project-description">
             Programmed a mobile app with React Native and Expo for students to discover and join clubs at St. John's University. Created login, messaging, and club tracking features with React Context and custom components to enhance student engagement and campus community building.
            </p>
            <div className="project-buttons">
              <a href="https://github.com/X1PH3R/thebestteam" target="_blank" rel="noopener noreferrer" className="project-btn primary">View Project</a>
            </div>
          </div>

          <div className="project-card">
            <h3>Banking Application</h3>
            <p className="project-subtitle">Secure Software Development</p>
            <p className="project-description">
              Built a comprehensive Java banking application with account transfers, deposits, and balance management features, implementing secure file-based storage to manage user accounts and transaction history. Developed as part of coursework focusing on secure coding practices and financial application security protocols.
            </p>
            <div className="project-buttons">
              <button className="project-btn primary">View Project</button>
            </div>
          </div>

          <div className="project-card">
            <h3>Banking API & Frontend</h3>
            <p className="project-subtitle">Secure Software Development</p>
            <p className="project-description">
              Designed a comprehensive Java API to securely connect the frontend with banking functions, ensuring secure data transmission and proper authentication protocols. Implemented RESTful endpoints for account management and transaction processing with industry-standard security practices.
            </p>
            <div className="project-buttons">
              <button className="project-btn primary">View Project</button>
            </div>
          </div>

          <div className="project-card">
            <h3>Substitution Cipher</h3>
            <p className="project-subtitle">Data Security and Cryptography</p>
            <p className="project-description">
              Developed a comprehensive substitution cipher program for message encryption and decryption with cryptanalysis functionality. Implemented key generation, letter frequency analysis, and cryptanalysis techniques to demonstrate classical cryptography principles.
            </p>
            <div className="project-buttons">
              <a href="https://github.com/SeanMcGrory-16/Substitution-Cipher" target="_blank" rel="noopener noreferrer" className="project-btn primary">View Project</a>
            </div>
          </div>

          <div className="project-card">
            <h3>Euclidean Algorithm</h3>
            <p className="project-subtitle">Data Security and Cryptography</p>
            <p className="project-description">
              Implemented the Euclidean Algorithm in Java to generate secure keys for internet communications. Developed mathematical functions for finding greatest common divisors and modular arithmetic operations essential for cryptographic key generation.
            </p>
            <div className="project-buttons">
              <a href="https://github.com/SeanMcGrory-16/Euclidean-Algorithm" target="_blank" rel="noopener noreferrer" className="project-btn primary">View Project</a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Experience */}
      <section id="experience" className="numbered-section">
        <div className="section-header">
          <span className="section-number">3</span>
          <h2>Experience.</h2>
          <p className="section-subtitle">Leading teams and building connections.</p>
        </div>
        
        <div className="experience-content">
          <div className="experience-card">
            <div className="experience-header">
              <div>
                <h4>Launch Trampoline Park Queens, Howard Beach, NY</h4>
                <h3>Lead Event Coordinator</h3>
              </div>
              <span className="date-badge">March 2021 - Present</span>
            </div>
            <ul className="experience-list">
              <li>Led a team of 8-10 party hosts and runners to ensure smooth operation and increase customer satisfaction</li>
              <li>Designed a training and best practices checklist for all members of the birthday party team to follow during events</li>
              <li>Trained over 12 new employees through prepared activities, speeches, simulated interactions, and shadowing</li>
              <li>Communicated frequently with coworkers to ensure top performance and create a collaborative environment</li>
              <li>Monitored customer feedback through online reviews and emails, improving customer experience when possible</li>
              <li>Created weekly employee performance reports to management and quarterly employee performance incentives</li>
              <li>Moderated monthly V.I.P. day for children with special needs and families to visit with planned activities</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 4: Education & Skills */}
      <section id="education-skills" className="numbered-section">
        <div className="section-header">
          <span className="section-number">4</span>
          <h2>Education & Skills.</h2>
          <p className="section-subtitle">Academic foundation and technical expertise.</p>
        </div>
        
        <div className="education-skills-content">
          {/* Education Part */}
          <div className="education-card">
            <div className="education-header">
              <div className="degree-info">
                <h3>Bachelor of Science in Cyber Security</h3>
                <h4>St. John's University</h4>
                <p className="location">Queens, New York</p>
              </div>
              <div className="education-badges">
                <span className="date-badge">Expected May 2026</span>
                <span className="gpa-badge">GPA: 3.88</span>
              </div>
            </div>
            
            <div className="education-details">
              <div className="coursework-section">
                <h5>Core Coursework</h5>
                <div className="course-tags">
                  <span className="course-tag">Data Security & Cryptography</span>
                  <span className="course-tag">Network Security</span>
                  <span className="course-tag">Data Structures</span>
                  <span className="course-tag">Secure Software Development</span>
                  <span className="course-tag">Computer Programming</span>
                  <span className="course-tag">Database Systems</span>
                </div>
              </div>
              
              <div className="certifications-section">
                <h5>Professional Development</h5>
                <div className="cert-item">
                  <span className="cert-name">Google Cybersecurity Professional Certificate</span>
                  <span className="cert-status">Completed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Part */}
          <div className="skills-section">
            <h3 className="skills-title">Technical Skills</h3>
            <div className="skills-grid">
              <div className="skill-category">
                <h4>Programming Languages</h4>
                <div className="skills-list">
                  <span className="skill-tag">Java</span>
                  <span className="skill-tag">JavaScript</span>
                  <span className="skill-tag">Python</span>
                  <span className="skill-tag">React</span>
                  <span className="skill-tag">React Native</span>
                </div>
              </div>
              
              <div className="skill-category">
                <h4>Cybersecurity</h4>
                <div className="skills-list">
                  <span className="skill-tag">Threat Analysis</span>
                  <span className="skill-tag">Risk Management</span>
                  <span className="skill-tag">SIEM Tools</span>
                  <span className="skill-tag">Vulnerability Testing</span>
                  <span className="skill-tag">Network Security</span>
                </div>
              </div>
              
              <div className="skill-category">
                <h4>Systems & Tools</h4>
                <div className="skills-list">
                  <span className="skill-tag">Windows</span>
                  <span className="skill-tag">macOS</span>
                  <span className="skill-tag">Linux</span>
                  <span className="skill-tag">Virtual Machines</span>
                  <span className="skill-tag">AWS</span>
                  <span className="skill-tag">Microsoft Office</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Awards & Interests */}
      <section id="awards" className="numbered-section">
        <div className="section-header">
          <span className="section-number">5</span>
          <h2>Awards & Interests.</h2>
        </div>
        
        <div className="honors-content">
          <div className="honors-grid">
            <div className="honor-card">
              <h3>🏆 Recent Achievements</h3>
              <ul>
                <li><strong>St. John's University Dean's List</strong> and National Society of Leadership and Success (August 2024)</li>
                <li><strong>1st place</strong> in the St John's Hackathon Competition – Built a mobile app for student networking (May 2025)</li>
                <li><strong>2nd place</strong> in the ISC2 Capture the Flag Competition – Solved real world cybersecurity challenges (April 2025)</li>
              </ul>
            </div>

            <div className="honor-card">
              <h3>🎯 Activities & Interests</h3>
              <ul>
                <li>Member of the Association for Computing Machinery, participated in student-run labs and coding projects</li>
                <li>Member of the Economics and Finance Society, participated in stock pitches and professional development</li>
                <li>Member of the St. John's Cyberstorm Team, participated in tryhackme CTF boxes and hackathon events</li>
                <li>Interested in spending time with my twin brother who has special needs, playing golf and pickleball</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Gallery */}
      <section id="gallery" className="numbered-section">
        <div className="section-header">
          <span className="section-number">6</span>
          <h2>Gallery.</h2>
          <p className="section-subtitle">Snapshots of my journey, one moment at a time.</p>
        </div>
        
        <div className="gallery-grid">
          <div className="gallery-item">
            <img src="https://via.placeholder.com/300x200/87ceeb/2c3e50?text=Hackathon+Win" alt="Hackathon Victory" className="gallery-photo" />
            <div className="gallery-caption">
              <h4>1st Place - St. John's Hackathon</h4>
              <p>Winning the hackathon with our mobile networking app</p>
            </div>
          </div>
          
          <div className="gallery-item">
            <img src="https://via.placeholder.com/300x200/87ceeb/2c3e50?text=CTF+Competition" alt="CTF Competition" className="gallery-photo" />
            <div className="gallery-caption">
              <h4>2nd Place - ISC2 CTF Competition</h4>
              <p>Solving real-world cybersecurity challenges</p>
            </div>
          </div>
          
          <div className="gallery-item">
            <img src="https://via.placeholder.com/300x200/87ceeb/2c3e50?text=Dean's+List" alt="Dean's List Recognition" className="gallery-photo" />
            <div className="gallery-caption">
              <h4>Dean's List Achievement</h4>
              <p>Academic excellence at St. John's University</p>
            </div>
          </div>
          
          <div className="gallery-item">
            <img src="https://via.placeholder.com/300x200/87ceeb/2c3e50?text=Leadership+Team" alt="Leadership at Launch" className="gallery-photo" />
            <div className="gallery-caption">
              <h4>Team Leadership</h4>
              <p>Leading the event coordination team at Launch Trampoline Park</p>
            </div>
          </div>
          
          <div className="gallery-item">
            <img src="https://via.placeholder.com/300x200/87ceeb/2c3e50?text=University+Life" alt="University Campus" className="gallery-photo" />
            <div className="gallery-caption">
              <h4>St. John's University</h4>
              <p>Campus life and cybersecurity studies</p>
            </div>
          </div>
          
          <div className="gallery-item">
            <img src="https://via.placeholder.com/300x200/87ceeb/2c3e50?text=Personal+Time" alt="Personal Interests" className="gallery-photo" />
            <div className="gallery-caption">
              <h4>Personal Interests</h4>
              <p>Golf, pickleball, and family time</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="contact-content">
          <h2>Get In Touch.</h2>
          <p>Let's connect! Whether you have a project in mind, a question about my work, or just want to say hello, I'm always eager to hear from you.</p>
          
          <div className="contact-buttons">
            <a 
              href="mailto:seanmcgrory@gmail.com" 
              className="contact-btn-large"
            >
              EMAIL
            </a>
            <a 
              href="https://github.com/SeanMcGrory-16" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-btn-large"
            >
              GITHUB
            </a>
            <a 
              href="https://www.linkedin.com/in/sean-m-mcgrory/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-btn-large"
            >
              LINKEDIN
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 Sean McGrory. All rights reserved.</p>
        <p className="footer-note">Built with React & Vite • Inspired by modern web design</p>
      </footer>
    </div>
  )
}

export default App
