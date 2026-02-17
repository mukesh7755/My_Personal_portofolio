import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./Connect.css";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_axh3is6", // ✅ Your Service ID
        "template_ux9pnfq", // ✅ Your Template ID
        form.current,
        "Il8H1NJCEPlJ-hlxa", // ✅ Your Public Key
      )
      .then(
        (result) => {
          alert("✅ Message sent successfully!");
        },
        (error) => {
          alert("❌ Failed to send message. Please try again later.");
          console.error(error.text);
        },
      );

    e.target.reset();
  };

  return (
    <section id="connect" className="contact-section">
      <h2>Connect Me</h2>
      <div className="contact-box">
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
          ></textarea>
          <button className="btn" type="submit">
            Submit
          </button>
        </form>

        <div className="contact-info">
          <h3>My Info</h3>
          <p>
            <strong>📧 Email:</strong> mukeshvankayalapati@gmail.com
          </p>
          <p>
            <strong>📱 Phone:</strong> 9392652639
          </p>
          <p>
            <strong>📍 Location:</strong> Hyderabad, India
          </p>
          <p>
            <strong>🔗 GitHub:</strong>{" "}
            <a
              href="https://github.com/mukesh7755"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/mukesh7755
            </a>
          </p>
          <p>
            <strong>💼 LinkedIn:</strong>{" "}
            <a
              href="https://linkedin.com/in/mukeshvankayalapati"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/mukeshvankayalapati
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
