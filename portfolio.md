---
layout: page
title: Portfolio
permalink: /portfolio/
---

<div class="hero-section">
  <div class="hero-content">
    <h1 class="hero-title">My Portfolio</h1>
    <p class="hero-subtitle">
      Explore my projects, skills, and professional journey
    </p>
    <div class="hero-buttons">
      <a href="https://saswatsaubhagya.in" class="btn btn-primary" target="_blank">View Full Portfolio</a>
    </div>
  </div>
</div>

<div class="portfolio-content">
  <div class="portfolio-intro">
    <h2>🎨 Featured Work</h2>
    <p>
      Here's a glimpse of what I've been working on. For a complete overview of my projects, 
      skills, and professional experience, visit my main portfolio website.
    </p>
  </div>

  <div class="skills-section">
    <h2>🛠️ Technical Skills</h2>
    <div class="skills-grid">
      <div class="skill-category">
        <h3>Frontend</h3>
        <div class="skill-tags">
          <span class="skill-tag">React</span>
          <span class="skill-tag">Vue.js</span>
          <span class="skill-tag">Angular</span>
          <span class="skill-tag">TypeScript</span>
          <span class="skill-tag">JavaScript</span>
          <span class="skill-tag">HTML/CSS</span>
          <span class="skill-tag">Sass</span>
          <span class="skill-tag">Tailwind CSS</span>
        </div>
      </div>

      <div class="skill-category">
        <h3>Backend</h3>
        <div class="skill-tags">
          <span class="skill-tag">Node.js</span>
          <span class="skill-tag">Python</span>
          <span class="skill-tag">Java</span>
          <span class="skill-tag">Express.js</span>
          <span class="skill-tag">Django</span>
          <span class="skill-tag">FastAPI</span>
          <span class="skill-tag">RESTful APIs</span>
          <span class="skill-tag">GraphQL</span>
        </div>
      </div>

      <div class="skill-category">
        <h3>Mobile</h3>
        <div class="skill-tags">
          <span class="skill-tag">Flutter</span>
          <span class="skill-tag">Dart</span>
          <span class="skill-tag">React Native</span>
          <span class="skill-tag">iOS Development</span>
          <span class="skill-tag">Android Development</span>
        </div>
      </div>

      <div class="skill-category">
        <h3>Database & Cloud</h3>
        <div class="skill-tags">
          <span class="skill-tag">MongoDB</span>
          <span class="skill-tag">PostgreSQL</span>
          <span class="skill-tag">MySQL</span>
          <span class="skill-tag">AWS</span>
          <span class="skill-tag">Google Cloud</span>
          <span class="skill-tag">Docker</span>
          <span class="skill-tag">Firebase</span>
        </div>
      </div>
    </div>
  </div>

  <div class="cta-section">
    <h2>🚀 Ready to Collaborate?</h2>
    <p>
      I'm always excited to work on interesting projects and connect with fellow developers. 
      Whether you have a project in mind or just want to chat about technology, I'd love to hear from you.
    </p>
    <div class="cta-buttons">
      <a href="https://saswatsaubhagya.in" class="btn btn-primary" target="_blank">Full Portfolio</a>
      <a href="mailto:contact@saswatsaubhagya.in" class="btn btn-secondary">Get In Touch</a>
    </div>
  </div>
</div>

<style>
.portfolio-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.portfolio-intro {
  text-align: center;
  margin-bottom: 3rem;
}

.portfolio-intro h2 {
  color: var(--text-primary);
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.portfolio-intro p {
  color: var(--text-secondary);
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.skills-section {
  margin-bottom: 4rem;
}

.skills-section h2 {
  color: var(--text-primary);
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.skill-category {
  background: var(--bg-card);
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: var(--shadow);
}

.skill-category h3 {
  color: var(--primary-color);
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-tag {
  background: var(--bg-light);
  color: var(--text-primary);
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-size: 0.9rem;
  font-weight: 500;
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
}

.skill-tag:hover {
  background: var(--primary-color);
  color: white;
  transform: translateY(-2px);
}

.cta-section {
  background: var(--gradient-bg);
  color: white;
  padding: 3rem 2rem;
  border-radius: 1rem;
  text-align: center;
}

.cta-section h2 {
  color: white;
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.cta-section p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .portfolio-content {
    padding: 1rem;
  }
  
  .skills-grid {
    grid-template-columns: 1fr;
  }
  
  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }
}
</style> 