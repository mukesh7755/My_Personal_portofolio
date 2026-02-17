import React from "react";
import "./Achievements.css";
import digiLogo from "../assets/digi.png";
import pureLogo from "../assets/pure.png";
import gdgLogo from "../assets/gdg.png"; // Add your GDG logo here

const Achievements = () => {
  return (
    <section className="achievements-section" id="achievements">
      <h2>Achievements</h2>
      <div className="achievement-cards">
        <div className="achievement-card">
          <img
            src={pureLogo}
            alt="Pure Youth Logo"
            className="achievement-image"
          />
          <h3>Pure Youth Club</h3>
          <p>
            Pure Youth Club is dedicated to extending a helping hand to those in
            need, particularly in the realm of education.
          </p>
        </div>

        <div className="achievement-card">
          <img
            src={digiLogo}
            alt="Digi Club Logo"
            className="achievement-image"
          />
          <h3>Digi Club - CMRIT</h3>
          <p>
            Vice President & Graphic Designer. Digi Club is our college's
            digital club for tech and creative projects.
          </p>
        </div>

        <div className="achievement-card">
          <img src={gdgLogo} alt="GDG Logo" className="achievement-image" />
          <h3>Google Developers Group (GDG)</h3>
          <p>
            Participated in the Google Solution Challenge 2024 hosted by GDG &
            Google Developers, building real-world impact projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
