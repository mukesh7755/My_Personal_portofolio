import React from "react";
import "./CodingProfiles.css";
import codechefLogo from "../assets/codechef.png";
import leetcodeLogo from "../assets/leetcode.png";
import codeforcesLogo from "../assets/codeforces.png";

export default function CodingProfiles() {
  return (
    <section className="coding-profiles-section">
      <h2 className="coding-profiles-heading">My Coding Profiles</h2>
      <div className="coding-profiles">
        <div className="profile-card">
          <a
            href="https://www.codechef.com/users/mukesh_75"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={codechefLogo} alt="CodeChef" />
            <h3>CodeChef</h3>
            <p>
              Current Rating: <span style={{ color: "#FFA500" }}>1290</span>
            </p>
          </a>
        </div>
        <div className="profile-card">
          <a
            href="https://leetcode.com/u/22r01a67j9/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={leetcodeLogo} alt="LeetCode" />
            <h3>LeetCode</h3>
            <p>
              Current Rating: <span style={{ color: "#FFA500" }}>1835</span>
            </p>
          </a>
        </div>
        <div className="profile-card">
          <a
            href="https://codeforces.com/profile/22r01a67j9"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={codeforcesLogo} alt="Codeforces" />
            <h3>Codeforces</h3>
            <p>
              Current Rating: <span style={{ color: "#FFA500" }}>1049</span>
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}
