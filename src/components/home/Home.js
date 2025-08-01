/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState } from "react";
import { InlineWidget } from "react-calendly";
import display_pic_new from "../../images/kartikey_dp.jpg";
import "./Home.css";
// import { Link } from "react-router-dom";

export default function Home() {
  const [showCalendly, setShowCalendly] = useState(false);

  const toggleCalendly = () => {
    setShowCalendly(!showCalendly);
  };

  return (
    // Main container with flex style to divide content
    <div className="container">
      {/* Display Card */}
      <div className="container-dp">
        <img
          className="rounded-circle z-depth-2"
          width="300"
          height="280"
          alt="100x100"
          src={display_pic_new}
          data-holder-rendered="true"
        ></img>
        <div className="title">
          Kartikey Hebbar
          <br />
          <small>Software Engineer</small>
          <br />
          <div className="title-social">
            {/* Add font awesome icons */}
            <a
              className="fa fa-linkedin"
              href="https://www.linkedin.com/in/kartikey-v-hebbar/"
              target="_blank"
              rel="noreferrer"
            ></a>
            <a
              className="fa fa-github"
              href="https://github.com/Gizmosoft"
              target="_blank"
              rel="noreferrer"
            ></a>
            <a
              className="fa fa-google"
              href="mailto:kartikey.hebbar@gmail.com"
              target="_blank"
              rel="noreferrer"
            ></a>
          </div>
        </div>
        <div className="title-description">
          <small>
            <p>I love learning & building new things</p>
            <p className="title-description-p">
              Java &#128992; | Python &#128994; | Javascript &#128993;
            </p>
            <p className="title-description-p">
              Spring Boot | Django | React.js
            </p>
          </small>
        </div>
      </div>
      {/* End of Display card */}
      {/* About Section */}
      <div className="about-section">
        <div className="about-header h3 mx-5 py-4">Hi! I'm Kartikey.👋</div>
        <div className="about-description">
          I'm a Software Engineering Systems grad student at Northeastern
          University, Boston, with 3+ years of experience navigating both the
          startup hustle and the corporate grind. I love building cool things,
          whether it's web apps, machine learning models, or scalable software
          solutions 🌐
          <br />
          <br />
          💻 <strong>Tech stack?</strong> I'm fluent in{" "}
          <strong>Java, Javascript, Python and Databases</strong>. I'm currently
          learning more about Typescript, Caching Systems, Cloud & Microservices
          architectures, and System Design to become a Full Stack Engineer 🧑‍💻
          <br />
          <br />
          🤖 <strong>AI & ML?</strong> Yep, that's on my radar too! I'm
          continuously learning and exploring <strong>Generative AI</strong> and{" "}
          <strong>LLMs</strong> to learn integrating them with my work 🛠️
          <br />
          <br />
          📚 <strong>Beyond code?</strong> You'll find me reading books, playing
          video games, geeking out over entrepreneurship, and cheering for
          soccer matches. Oh, and sometimes, I trade my keyboard for a guitar to
          jam a little! 🎸
          <br />
          <br />
          🚀 Always excited to connect, collaborate, and build things that make
          a real impact. Let's chat! 💬💡
          <br />
          <br />
          <hr />
          <div className="location-pin">
            <svg
              className="octicon octicon-location"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              height="16"
              aria-hidden="true"
            >
              <path
                fill="white"
                fillRule="evenodd"
                d="M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z"
              ></path>
            </svg>
            <p>&nbsp;Boston, MA</p>
          </div>
        </div>
      </div>
      {/* End of About Section */}

      {/* Calendly Button */}
      <div className="calendly-button-container">
        <button className="calendly-button" onClick={toggleCalendly}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
          <span>Book a Meeting</span>
        </button>
      </div>

      {/* Calendly Modal */}
      {showCalendly && (
        <div className="calendly-overlay" onClick={toggleCalendly}>
          <div className="calendly-modal" onClick={(e) => e.stopPropagation()}>
            <button className="calendly-close" onClick={toggleCalendly}>
              ×
            </button>
            <InlineWidget
              url="https://calendly.com/kartikey-hebbar/30min"
              styles={{
                height: '100%',
                width: '100%'
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
