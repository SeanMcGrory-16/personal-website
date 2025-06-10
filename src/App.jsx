import './App.css'

function App() {
  return (
    <div className="resume-container">
      {/* Header Section */}
      <header className="header">
        <div className="profile-section">
          <div className="profile-image">
            <img src="https://via.placeholder.com/150" alt="Profile" />
          </div>
          <div className="profile-info">
            <h1>Your Name</h1>
            <h2>Software Developer</h2>
            <p>Passionate developer creating innovative solutions</p>
          </div>
        </div>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* About Section */}
      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
          I'm a passionate software developer with experience in building modern web applications.
          I love creating user-friendly interfaces and solving complex problems through code.
          Currently focused on React, JavaScript, and full-stack development.
        </p>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section">
        <h2>Experience</h2>
        <div className="experience-item">
          <div className="experience-header">
            <h3>Software Developer</h3>
            <span className="date">2023 - Present</span>
          </div>
          <h4>Company Name</h4>
          <ul>
            <li>Developed and maintained React applications</li>
            <li>Collaborated with cross-functional teams</li>
            <li>Implemented responsive design principles</li>
          </ul>
        </div>
        
        <div className="experience-item">
          <div className="experience-header">
            <h3>Junior Developer</h3>
            <span className="date">2022 - 2023</span>
          </div>
          <h4>Previous Company</h4>
          <ul>
            <li>Built user interfaces with HTML, CSS, and JavaScript</li>
            <li>Participated in code reviews and team meetings</li>
            <li>Learned modern development practices</li>
          </ul>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <h2>Skills</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Frontend</h3>
            <div className="skills-list">
              <span className="skill">React</span>
              <span className="skill">JavaScript</span>
              <span className="skill">HTML/CSS</span>
              <span className="skill">Vite</span>
            </div>
          </div>
          <div className="skill-category">
            <h3>Backend</h3>
            <div className="skills-list">
              <span className="skill">Node.js</span>
              <span className="skill">Express</span>
              <span className="skill">MongoDB</span>
              <span className="skill">PostgreSQL</span>
            </div>
          </div>
          <div className="skill-category">
            <h3>Tools</h3>
            <div className="skills-list">
              <span className="skill">Git</span>
              <span className="skill">GitHub</span>
              <span className="skill">VS Code</span>
              <span className="skill">Cursor</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <h2>Contact</h2>
        <div className="contact-info">
          <div className="contact-item">
            <strong>Email:</strong> your.email@example.com
          </div>
          <div className="contact-item">
            <strong>LinkedIn:</strong> <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">linkedin.com/in/yourprofile</a>
          </div>
          <div className="contact-item">
            <strong>GitHub:</strong> <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">github.com/yourusername</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 Your Name. Built with React & Vite.</p>
      </footer>
    </div>
  )
}

export default App
