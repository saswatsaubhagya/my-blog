---
layout: home
title: "Welcome to Saswat's Tech Blog"
---

<div class="hero-section">
  <div class="hero-content">
    <h1 class="hero-title">Welcome to My Tech Blog</h1>
    <p class="hero-subtitle">
      Hi, I'm <strong>Saswat Saubhagya</strong> - a passionate full-stack developer sharing insights on 
      Flutter, web development, and the latest in software engineering.
    </p>
    <div class="hero-buttons">
      <a href="#latest-posts" class="btn btn-primary">Read Latest Posts</a>
      <a href="https://saswatsaubhagya.in" class="btn btn-secondary" target="_blank">View Portfolio</a>
    </div>
  </div>
</div>

<div class="about-preview">
  <h2>About This Blog</h2>
  <p>
    This blog is where I document my journey as a developer, share tutorials, 
    and discuss the technologies I'm passionate about. Whether you're a beginner 
    or an experienced developer, you'll find valuable insights here.
  </p>
</div>

<div class="topics-section">
  <h2>What I Write About</h2>
  <div class="topics-grid">
    <div class="topic-card">
      <h3>🏗️ Flutter Development</h3>
      <p>Mobile app development with Flutter, tips, tricks, and best practices</p>
    </div>
    <div class="topic-card">
      <h3>🌐 Web Development</h3>
      <p>Frontend and backend technologies, frameworks, and modern web practices</p>
    </div>
    <div class="topic-card">
      <h3>🔧 Developer Tools</h3>
      <p>IDE setups, productivity tools, and development environment configurations</p>
    </div>
    <div class="topic-card">
      <h3>💡 Tech Insights</h3>
      <p>Industry trends, new technologies, and software engineering concepts</p>
    </div>
  </div>
</div>

<div class="latest-posts-section" id="latest-posts">
  <h2>Latest Posts</h2>
  <div class="posts-grid">
    {% for post in site.posts limit: 3 %}
    <article class="post-card">
      <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
      <p class="post-meta">{{ post.date | date: "%B %d, %Y" }}</p>
      <p class="post-excerpt">{{ post.excerpt | strip_html | truncate: 120 }}</p>
      <a href="{{ post.url }}" class="read-more">Read More →</a>
    </article>
    {% endfor %}
  </div>
</div>

<div class="newsletter-section">
  <h2>Stay Updated</h2>
  <p>Get notified when I publish new articles. Follow me on social media or subscribe to the RSS feed.</p>
  <div class="social-links">
    <a href="{{ '/feed.xml' | relative_url }}" class="social-link">📡 RSS Feed</a>
    <a href="https://github.com/saswatsaubhagya" class="social-link" target="_blank">🐙 GitHub</a>
    <a href="https://linkedin.com/in/saswatsaubhagya" class="social-link" target="_blank">💼 LinkedIn</a>
  </div>
</div>
