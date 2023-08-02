import React from "react";
import "./Workex.css";
import ouroborosLogo from "../../images/work/ouroboros_logo.png";
import navLogo from "../../images/work/nav.jpg";
import ccitrLogo from "../../images/work/ccitr.png";
import accentureLogo from "../../images/work/Accenture.png";

export default function Workex() {
  return (
    <>
      <div className="container card-container justify-content-center">
        <h2 className="experience-heading">Work Experiences 👔</h2>
        <br />
      </div>
 
      {/* Work experience cards */}
      <div className="container">
        <div className="card-group">

          {/* Accenture Experience*/}
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={accentureLogo} alt="Avatar" />
                <h3 className="card-title">
                  <strong>Accenture</strong>
                  <br />
                  <small>Bengaluru</small>
                </h3>
                <h5 className="card-title">
                  <strong>Software Engineer Analyst</strong>
                </h5>
                <h6 className="card-title">Dec 2020 - Apr 2023</h6>
                <br />
              </div>
              <div className="flip-card-back">
                <h5>
                  <ul>
                    <li>
                      Led Automation projects within Identity & Access Management team and streamlined 5+ critical operations using Python, Java and REST APIs which resulted in saving over 1500 hours of manual work along with improving accountability and resiliency.
                    </li>
                    <li>
                      Developed one-click patch scripts using Python to remediate critical Apache vulnerabilities on 100+ Linux-based servers actively used across various teams.
                    </li>
                    <span className="badge bg-success">Python</span>
                    <span className="badge bg-warning">Java Spring Boot</span>
                    <span className="badge bg-danger">REST API</span>
                    <span className="badge bg-info">Sailpoint</span>
                    <span className="badge bg-warning">Amazon Web Services</span>
                  </ul>
                </h5>
              </div>
            </div>
          </div>

          {/* CCITR Experience*/}
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={ccitrLogo} alt="Avatar" />
                <h3 className="card-title">
                  <strong>
                    Centre for Cybercrime Investigation Training & Research
                  </strong>
                  <br />
                  <small>Bengaluru</small>
                </h3>
                <h5 className="card-title">
                  <strong>Software Engineer Intern</strong>
                </h5>
                <h6 className="card-title">Jan 2020 - Apr 2020</h6>
                <br />
              </div>
              <div className="flip-card-back">
                <h4>
                  <ul>
                    <li>
                      Designed and Developed a working prototype of a customer
                      facing chatbot.
                    </li>
                    <li>
                      Worked on data collection and formation for training the
                      Machine Learning Model. Implemented data collection and
                      auto-training feature to improve the prototype.
                    </li>
                    <li>
                      Created dialogflow management from scratch to make chatbot
                      conversations meaningful.
                    </li>
                    <span className="badge bg-success">Python</span>
                    <span className="badge bg-danger">SciPy</span>
                    <span className="badge bg-info">NumPy</span>
                    <span className="badge bg-primary">Pandas</span>
                  </ul>
                </h4>
              </div>
            </div>
          </div>

          {/* Nav Clothing Experience*/}
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={navLogo} alt="Avatar" />
                <h3 className="card-title">
                  <strong>Nav Clothing</strong>
                  <br />
                  <small>Mumbai</small>
                </h3>
                <h5 className="card-title">
                  <strong>Full Stack Web Developer Intern</strong>
                </h5>
                <h6 className="card-title">Jan 2019 - Mar 2019</h6>
                <br />
              </div>
              <div className="flip-card-back">
                <h4>
                  <ul>
                    <li>
                      Worked on building various frontend and backend features
                      for the e-commerce website.
                    </li>
                    <li>
                      Proactively handled bug fixes to grow the active customer
                      count to more than 100.
                    </li>
                    <li>
                      Learnt and implemented various Django methodologies to
                      handle customers at scale.
                    </li>
                    <span className="badge bg-success">Django (Python)</span>
                    <span className="badge bg-secondary">PostgreSQL</span>
                    <span className="badge bg-primary">Bootstrap</span>
                    <span className="badge bg-danger">HTML5</span>
                    <span className="badge bg-info">CSS3</span>
                  </ul>
                </h4>
              </div>
            </div>
          </div>

          {/* Ouroboros Experience*/}
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={ouroborosLogo} alt="Avatar" />
                <h3 className="card-title">
                  <strong>Ouroboros</strong>
                  <br />
                  <small>Bengaluru</small>
                </h3>
                <h5 className="card-title">
                  <strong>Website Developer Intern</strong>
                </h5>
                <h6 className="card-title">Apr 2017 - May 2017</h6>
                <br />
              </div>
              <div className="flip-card-back">
                <h4>
                  <ul>
                    <li>
                      Built frontend for setting up a company portfolio website.
                    </li>
                    <li>
                      Worked with a small team to rapidly develop the website
                      for fast customer inolvement.
                    </li>
                    <span className="badge bg-danger">HTML5</span>
                    <span className="badge bg-info">CSS3</span>
                    <span className="badge bg-warning">Javascript</span>
                  </ul>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
