import './App.css'

function App() {
  return (
    <div className="resume-container">
      {/* Header Section */}
      <header className="header">
        <div className="profile-section">
          <div className="profile-info">
            <h1>Sean McGrory</h1>
            <h2>Cybersecurity Student & Software Developer</h2>
            <p>Passionate about secure software development and innovative solutions</p>
          </div>
        </div>
        <div className="contact-links">
          <a href="mailto:seanmcgrory@gmail.com" className="contact-link">
            📧 seanmcgrory@gmail.com
          </a>
          <a href="https://www.linkedin.com/in/sean-m-mcgrory/" target="_blank" rel="noopener noreferrer" className="contact-link">
            💼 LinkedIn
          </a>
          <a href="https://github.com/SeanMcGrory-16" target="_blank" rel="noopener noreferrer" className="contact-link">
            🔗 GitHub
          </a>
        </div>
        <nav className="nav">
          <a href="#education">Education</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#honors">Honors</a>
        </nav>
      </header>

      {/* Education Section */}
      <section id="education" className="section">
        <h2>Education</h2>
        <div className="education-item">
          <div className="education-header">
            <h3>Bachelor of Science, Cyber Security</h3>
            <span className="date">Expected May 2026</span>
          </div>
          <h4>St. John's University, Queens, NY</h4>
          <p><strong>Major GPA:</strong> 3.88</p>
          <p><strong>Relevant Coursework:</strong> Data Security and Cryptography, Network Security, Data Structures, Secure Software Development</p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <h2>Projects</h2>
        
        <div className="project-item">
          <h3>Student Networking Mobile App</h3>
          <p className="project-tech">React Native • Expo • Club Networking</p>
          <p>Programmed a mobile app for students to discover and join clubs, featuring login, messaging, and club seeking features with React Context and custom components.</p>
        </div>

        <div className="project-item">
          <h3>Secure Banking Application</h3>
          <p className="project-tech">Java • Account Management • Security</p>
          <p>Built a Java banking app with account transfers, deposits, and balance features, implementing file-based storage to manage user accounts and transaction history.</p>
        </div>

        <div className="project-item">
          <h3>Banking API & Frontend</h3>
          <p className="project-tech">Java API • Secure Connections</p>
          <p>Designed a Java API to securely connect the frontend with banking functions, ensuring secure data transmission and proper authentication.</p>
        </div>

        <div className="project-item">
          <h3>Cryptography Tools</h3>
          <p className="project-tech">Java • Encryption • Security</p>
          <p>Coded a substitution cipher program for message cryptography and cryptanalysis. Designed a Euclidean Algorithm in Java to secure internet communications.</p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <h2>Skills</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Programming Languages</h3>
            <div className="skills-list">
              <span className="skill">Java</span>
              <span className="skill">JavaScript</span>
              <span className="skill">Python</span>
              <span className="skill">React</span>
              <span className="skill">React Native</span>
            </div>
          </div>
          <div className="skill-category">
            <h3>Cybersecurity</h3>
            <div className="skills-list">
              <span className="skill">Google Cybersecurity Certificate</span>
              <span className="skill">Threat Analysis</span>
              <span className="skill">Risk Management</span>
              <span className="skill">SIEM Tools</span>
              <span className="skill">Vulnerability Testing</span>
            </div>
          </div>
          <div className="skill-category">
            <h3>Systems & Tools</h3>
            <div className="skills-list">
              <span className="skill">Windows</span>
              <span className="skill">macOS</span>
              <span className="skill">Linux</span>
              <span className="skill">Virtual Machines</span>
              <span className="skill">AWS</span>
              <span className="skill">Microsoft Office</span>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section">
        <h2>Experience</h2>
        <div className="experience-item">
          <div className="experience-header">
            <h3>Lead Event Coordinator</h3>
            <span className="date">March 2021 - Present</span>
          </div>
          <h4>Launch Trampoline Park Queens, Howard Beach, NY</h4>
          <ul>
            <li>Led a team of 8-10 party hosts and runners to ensure smooth operation and increase customer satisfaction</li>
            <li>Designed a training and best practices checklist for all members of the birthday party team to follow during events</li>
            <li>Trained over 12 new employees through prepared activities, speeches, simulated interactions, and shadowing</li>
            <li>Communicated frequently with coworkers to ensure top performance and create a collaborative environment</li>
            <li>Monitored customer feedback through online reviews and emails, improving customer experience when possible</li>
            <li>Created weekly employee performance reports to management and quarterly employee performance incentives</li>
            <li>Moderated monthly V.I.P. day for children with special needs and families to visit with planned activities</li>
          </ul>
        </div>
      </section>

      {/* Honors and Interests Section */}
      <section id="honors" className="section">
        <h2>Honors & Interests</h2>
        
        <div className="honors-section">
          <h3>Honors and Awards</h3>
          <ul>
            <li><strong>St. John's University Dean's List</strong> and National Society of Leadership and Success (August 2024)</li>
            <li><strong>1st place</strong> in the St John's Hackathon Competition – Built a mobile app for student networking (May 2025)</li>
            <li><strong>2nd place</strong> in the ISC2 Capture the Flag Competition – Solved real world cybersecurity challenges (April 2025)</li>
          </ul>
        </div>

        <div className="interests-section">
          <h3>Interests & Activities</h3>
          <ul>
            <li>Member of the Association for Computing Machinery, participated in student-run labs and coding projects</li>
            <li>Member of the Economics and Finance Society, participated in stock pitches and professional development</li>
            <li>Member of the St. John's Cyberstorm Team, participated in tryhackme CTF boxes and hackathon events</li>
            <li>Interested in spending time with my twin brother who has special needs, playing golf and pickleball</li>
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 Sean McGrory. Built with React & Vite.</p>
      </footer>
    </div>
  )
}

export default App
