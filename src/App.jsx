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
              <h1 className="hero-title">Sean McGrory.</h1>
            </div>
          </div>
          
          <div className="hero-navigation">
            <button 
              className="nav-section-btn"
              onClick={() => scrollToSection('education')}
            >
              EDUCATION<span className="nav-description">Building my foundation at St. John's University.</span>
            </button>
            <button 
              className="nav-section-btn"
              onClick={() => scrollToSection('projects')}
            >
              PROJECTS<span className="nav-description">Turning ideas into secure, innovative solutions.</span>
            </button>
            <button 
              className="nav-section-btn"
              onClick={() => scrollToSection('skills')}
            >
              SKILLS<span className="nav-description">Cybersecurity expertise and technical proficiency.</span>
            </button>
            <button 
              className="nav-section-btn"
              onClick={() => scrollToSection('experience')}
            >
              EXPERIENCE<span className="nav-description">Leading teams and building connections.</span>
            </button>
            <button 
              className="nav-section-btn"
              onClick={() => scrollToSection('awards')}
            >
              AWARDS<span className="nav-description">Recognition for innovation and excellence.</span>
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

      {/* Section 1: Education */}
      <section id="education" className="numbered-section">
        <div className="section-header">
          <span className="section-number">1</span>
          <h2>Education.</h2>
        </div>
        
        <div className="education-content">
          <div className="education-card">
            <div className="education-header">
              <h3>Bachelor of Science, Cyber Security</h3>
              <span className="date-badge">Expected May 2026</span>
            </div>
            <h4>St. John's University, Queens, NY</h4>
            <div className="education-details">
              <p><strong>Major GPA:</strong> 3.88</p>
              <p><strong>Relevant Coursework:</strong> Data Security and Cryptography, Network Security, Data Structures, Secure Software Development</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Projects */}
      <section id="projects" className="numbered-section">
        <div className="section-header">
          <span className="section-number">2</span>
          <h2>Projects.</h2>
          <p className="section-subtitle">Showcasing my top projects.</p>
        </div>
        
        <div className="projects-grid">
          <div className="project-card">
            <h3>Student Networking Mobile App</h3>
            <p className="project-tech">React Native • Expo • Club Networking</p>
            <p className="project-description">
              Programmed a mobile app for students to discover and join clubs, featuring login, messaging, and club seeking features with React Context and custom components.
            </p>
            <div className="project-buttons">
              <button className="project-btn primary">View Project</button>
              <button className="project-btn secondary">GitHub</button>
            </div>
          </div>

          <div className="project-card">
            <h3>Secure Banking Application</h3>
            <p className="project-tech">Java • Account Management • Security</p>
            <p className="project-description">
              Built a Java banking app with account transfers, deposits, and balance features, implementing file-based storage to manage user accounts and transaction history.
            </p>
            <div className="project-buttons">
              <button className="project-btn primary">View Project</button>
              <button className="project-btn secondary">GitHub</button>
            </div>
          </div>

          <div className="project-card">
            <h3>Banking API & Frontend</h3>
            <p className="project-tech">Java API • Secure Connections</p>
            <p className="project-description">
              Designed a Java API to securely connect the frontend with banking functions, ensuring secure data transmission and proper authentication.
            </p>
            <div className="project-buttons">
              <button className="project-btn primary">View Project</button>
              <button className="project-btn secondary">GitHub</button>
            </div>
          </div>

          <div className="project-card">
            <h3>Cryptography Tools</h3>
            <p className="project-tech">Java • Encryption • Security</p>
            <p className="project-description">
              Coded a substitution cipher program for message cryptography and cryptanalysis. Designed a Euclidean Algorithm in Java to secure internet communications.
            </p>
            <div className="project-buttons">
              <button className="project-btn primary">View Project</button>
              <button className="project-btn secondary">GitHub</button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Skills */}
      <section id="skills" className="numbered-section">
        <div className="section-header">
          <span className="section-number">3</span>
          <h2>Skills.</h2>
        </div>
        
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Programming Languages</h3>
            <div className="skills-list">
              <span className="skill-tag">Java</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">Python</span>
              <span className="skill-tag">React</span>
              <span className="skill-tag">React Native</span>
            </div>
          </div>
          
          <div className="skill-category">
            <h3>Cybersecurity</h3>
            <div className="skills-list">
              <span className="skill-tag">Google Cybersecurity Certificate</span>
              <span className="skill-tag">Threat Analysis</span>
              <span className="skill-tag">Risk Management</span>
              <span className="skill-tag">SIEM Tools</span>
              <span className="skill-tag">Vulnerability Testing</span>
            </div>
          </div>
          
          <div className="skill-category">
            <h3>Systems & Tools</h3>
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
      </section>

      {/* Section 4: Experience */}
      <section id="experience" className="numbered-section">
        <div className="section-header">
          <span className="section-number">4</span>
          <h2>Experience.</h2>
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
