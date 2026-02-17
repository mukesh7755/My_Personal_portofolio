import React from "react";
import "./Certifications.css";

const Certifications = () => {
  return (
    <section className="certifications-section" id="certifications">
      <h2>Certifications</h2>
      <div className="certification-cards">
        <div className="certification-card">
          <h3>Walmart USA</h3>
          <p>
            Completed{" "}
            <strong>Advanced Software Engineering Job Simulation</strong>.
          </p>
          <a
            href="https://www.linkedin.com/posts/mukesh-vankayalapati-9b388b259_im-happy-to-share-that-ive-obtained-a-new-activity-7349383083009134594-IThQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Certificate on LinkedIn
          </a>
        </div>

        <div className="certification-card">
          <h3>AI Builders Lab - Google for Developers</h3>
          <p>
            Participated in Google's <strong>AI Builders Lab</strong> and
            tackled real-world AI challenges.
          </p>
          <a
            href="https://www.linkedin.com/posts/mukesh-vankayalapati-9b388b259_ai-machinelearning-googledevelopers-activity-7263797371942154240-miEV"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Certificate on LinkedIn
          </a>
        </div>

        <div className="certification-card">
          <h3>Hexart.in</h3>
          <p>
            Completed <strong>AI Foundation</strong> and{" "}
            <strong>AI Advanced</strong> programs.
          </p>
          <a
            href="https://www.linkedin.com/posts/mukesh-vankayalapati-9b388b259_im-happy-to-share-that-ive-obtained-a-new-activity-7279112830828617728-G8Ei"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Certificate on LinkedIn
          </a>
        </div>

        <div className="certification-card">
          <h3>Cisco Networking Academy</h3>
          <p>
            Earned <strong>Data Analytics Essentials</strong> certificate.
          </p>
          <a
            href="https://www.linkedin.com/posts/mukesh-vankayalapati-9b388b259_im-happy-to-share-that-ive-obtained-a-new-activity-7295484561742802944-an9q"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Certificate on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
