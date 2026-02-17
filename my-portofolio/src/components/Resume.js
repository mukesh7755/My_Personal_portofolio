import React from "react";
import resumePDF from "../assets/resume wp.pdf";
import "./Resume.css";

const Resume = () => {
  return (
    <section className="resume" id="resume">
      <h2>Resume</h2>
      <a
        href={resumePDF}
        download="Mukesh_Resume.pdf"
        className="resume-download"
      >
        Download Resume
      </a>
    </section>
  );
};

export default Resume;
