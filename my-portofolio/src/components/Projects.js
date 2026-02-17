// src/components/Projects.js
import React from "react";
import "./Projects.css";

import chatbotMusic from "../assets/chatbot_music.png";
import financeImage from "../assets/finaccne.png";
import certImage from "../assets/certtfi.png";
import pollImage from "../assets/polls.png"; // ✅ Added

const projects = [
  {
    title: "Chatbot Music Recommender",
    description:
      "Mood-based music suggestion system built with Django and MySQL.",
    image: chatbotMusic,
    live: "https://your-chatbot-project.com",
    github: "https://github.com/yourusername/chatbot-music-recommender",
  },
  {
    title: "AI Certificate Generator",
    description:
      "Generates auto-personalized certificates using GenAI, React, and Flask.",
    image: certImage,
    live: "https://ai-certificate-generator-flax.vercel.app/",
    github: "https://github.com/mukeshcodi998/ai-powered-certificate-generator",
  },
  {
    title: "Personal Finance Tracker",
    description:
      "Smart and visual way to track income & expenses using React + Charts.js.",
    image: financeImage,
    live: "https://finance-tracker-inky-two.vercel.app/",
    github: "https://github.com/mukesh7755/Finance_tracker",
  },
  {
    title: "Real-Time Poll Rooms", // ✅ New Project
    description:
      "Create live polls with real-time voting updates, countdown timer, expiry system, and anti-abuse mechanisms using React, Node.js, Socket.io, and MongoDB.",
    image: pollImage,
    live: "https://realtime-poll-rooms-sandy.vercel.app/",
    github: "https://github.com/mukesh7755/realtime-poll-rooms",
  },
];

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <h2>My Projects</h2>
      <div className="project-cards">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  🔗 Live
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  💻 GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
