---
layout: default
title: "Welcome to Saswat's Tech Blog"
---

<div class="about-preview">
  <h2>Hi, I'm Saswat! 👋</h2>
  <p>I'm a passionate full-stack developer and tech enthusiast who loves sharing knowledge about modern web development, mobile app development, and software engineering best practices. Here you'll find practical tutorials, insights, and tips to help you level up your coding skills.</p>
</div>


<div class="latest-posts-section">
  <h2>Latest Posts</h2>
  <div class="posts-grid">
    {% for post in site.posts limit:6 %}
      <article class="post-card">
        <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
        <div class="post-meta">
          <time datetime="{{ post.date | date_to_xmlschema }}">
            <i class="fas fa-calendar-alt"></i>
            {{ post.date | date: site.date_format }}
          </time>
          {% if post.categories.size > 0 %}
            <div class="post-categories">
              <i class="fas fa-folder"></i>
              {% for category in post.categories %}
                <span class="category">{{ category }}</span>
              {% endfor %}
            </div>
          {% endif %}
        </div>
        <p class="post-excerpt">
          {{ post.excerpt | strip_html | truncate: 150 }}
        </p>
        <a href="{{ post.url | relative_url }}" class="read-more">
          Read More <i class="fas fa-arrow-right"></i>
        </a>
      </article>
    {% endfor %}
  </div>
  
  {% if site.posts.size > 6 %}
    <div style="text-align: center; margin-top: 2rem;">
      <a href="/blog/" class="btn btn-primary">
        <i class="fas fa-archive"></i> View All Posts
      </a>
    </div>
  {% endif %}
</div>

