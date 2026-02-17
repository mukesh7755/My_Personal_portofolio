// src/components/About.js
import React from "react";
import "./About.css";
import profileImage from "../assets/profile.png";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-content">
        {/* LEFT SIDE */}
        <div className="about-text">
          <h1>
            Hello, I'm{" "}
            <span className="highlight-name">Mukesh Vankayalapati</span>
          </h1>

          <h3 className="about-role">
            🚀 Full Stack Developer | 💻 Frontend Developer | 🤖 AI Enthusiast |
            🎨 UI/UX Designer
          </h3>

          <p>
            I'm a passionate developer specializing in full stack development,
            UI/UX design, and data science. I love building modern, user-centric
            applications that solve real-world problems. With strong expertise
            in React, Python, and AI, I continuously explore innovative
            technologies to create impactful solutions.
          </p>

          {/* Buttons */}
          <div className="about-buttons">
            <a href="#connect" className="btn-primary">
              Hire Me
            </a>
            <a href="#resume" className="btn-outline">
              Download Resume
            </a>
          </div>

          {/* Stats */}
          <div className="about-stats">
            <div>
              <h2>4+</h2>
              <p>Projects</p>
            </div>
            <div>
              <h2>5+</h2>
              <p>Certifications</p>
            </div>
            <div>
              <h2>2+</h2>
              <p>Years Learning</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="about-image">
          <div className="image-wrapper">
            <img src={profileImage} alt="Mukesh" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
