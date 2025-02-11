import React from "react";
import reactLogo from "../../images/react-logo.png";
import javaLogo from "../../images/java-logo.png";
import pyLogo from "../../images/python-logo.jpg";
import jsLogo from "../../images/js-logo.png";
import sqlLogo from "../../images/sql-logo.png";
import springLogo from "../../images/spring-logo.png";
import bootLogo from "../../images/spring-boot.webp";
import djangoLogo from "../../images/django-logo.jpg";
import htmlLogo from "../../images/html-css.png";
import bootstrapLogo from "../../images/bootstrap.jpg";
import restLogo from "../../images/rest.png";
import awsLogo from "../../images/aws.png";
import mongoLogo from "../../images/mongo.webp";
import cassandraLogo from "../../images/cassandra.png";
import redisLogo from "../../images/redis.png";

import "./Skills.css";

export default function Skills() {
  return (
    <>
      <div className="container justify-content-center skill-container">
        <h2 className="skills-heading">Skills 🤹</h2>
        <br />
        <hr />
      </div>

      {/* Languages */}
      <div className="container skill-content">
        <div className="languages container">
          <h3>Programming Languages</h3>
          <hr />
          <div className="container contents">
            <div className="card prog-lang">
              <img src={javaLogo} className="card-img-top" alt="java-logo" />
              <div className="card-body java">
                <h4>
                  <strong>Java</strong>
                </h4>
              </div>
            </div>
            <div className="card prog-lang">
              <img src={pyLogo} className="card-img-top" alt="py-logo" />
              <div className="card-body python">
                <h4>
                  <strong>Python</strong>
                </h4>
              </div>
            </div>
            <div className="card prog-lang">
              <img src={jsLogo} className="card-img-top" alt="js-logo" />
              <div className="card-body js">
                <h4>
                  <strong>Javascript/TS</strong>
                </h4>
              </div>
            </div>
            <div className="card prog-lang">
              <img src={sqlLogo} className="card-img-top" alt="sql-logo" />
              <div className="card-body sql">
                <h4>
                  <strong>SQL</strong>
                </h4>
              </div>
            </div>
            <div className="card prog-lang">
              <img src={htmlLogo} className="card-img-top" alt="html-logo" />
              <div className="card-body java">
                <h4>
                  <strong>HTML/CSS</strong>
                </h4>
              </div>
            </div>
          </div>
        </div>

        {/* Libs */}
        <div className="libraries container">
          <h3>Libraries & Frameworks</h3>
          <hr />
          <div className="container small-contents">
            <div className="card libs">
              <img
                src={springLogo}
                className="card-img-top"
                alt="spring-logo"
              />
              <div className="card-body python">
                <h5>
                  <strong>Spring Framework</strong>
                </h5>
              </div>
            </div>
            <div className="card libs">
              <img src={bootLogo} className="card-img-top" alt="boot-logo" />
              <div className="card-body others">
                <h5>
                  <strong>Spring Boot</strong>
                </h5>
              </div>
            </div>
            <div className="card libs">
              <img src={djangoLogo} className="card-img-top" alt="dj-logo" />
              <div className="card-body python">
                <h5>
                  <strong>Django</strong>
                </h5>
              </div>
            </div>
            <div className="card libs">
              <img src={reactLogo} className="card-img-top" alt="react-logo" />
              <div className="card-body react">
                <h5>
                  <strong>ReactJS</strong>
                </h5>
              </div>
            </div>
            <div className="card libs">
              <img
                src={bootstrapLogo}
                className="card-img-top"
                alt="bootstrap-logo"
              />
              <div className="card-body bootstrap">
                <h5>
                  <strong>Bootstrap</strong>
                </h5>
              </div>
            </div>
          </div>
        </div>

        {/* Tools & Tech */}
        <div className="tools container">
          <h3>Tools & Technologies</h3>
          <hr />
          <div className="container small-contents">
            <div className="card libs">
              <img src={restLogo} className="card-img-top" alt="rest-logo" />
              <div className="card-body rest">
                <h5>
                  <strong>REST API</strong>
                </h5>
              </div>
            </div>
            <div className="card libs">
              <img src={awsLogo} className="card-img-top" alt="aws-logo" />
              <div className="card-body sql">
                <h5>
                  <strong>AWS</strong>
                </h5>
              </div>
            </div>
            <div className="card libs">
              <img src={mongoLogo} className="card-img-top" alt="mongo-logo" />
              <div className="card-body python">
                <h5>
                  <strong>MongoDB</strong>
                </h5>
              </div>
            </div>
            <div className="card libs">
              <img
                src={cassandraLogo}
                className="card-img-top"
                alt="cassandra-logo"
              />
              <div className="card-body others">
                <h5>
                  <strong>Apache Cassandra</strong>
                </h5>
              </div>
            </div>
            <div className="card libs">
              <img
                src={redisLogo}
                className="card-img-top"
                alt="redis-logo"
              />
              <div className="card-body others">
                <h5>
                  <strong>Redis</strong>
                </h5>
              </div>
            </div>
          </div>
        </div>

        {/* Other Tech */}
        <div className="othertech container">
          <h4>Other Technologies</h4>
          <hr />
          <div className="container contents">
            <ul className="tech-items">
              <li>Maven</li>
              <li>Git/GitHub</li>
              <li>Postman</li>
              <li>Apache Tomcat</li>
              <li>
                Machine Learning (OpenCV, SciKit-Learn, Matplotlib, SciPy,
                NumPy, Pandas)
              </li>
              <li>Sailpoint</li>
              <li>CyberArk</li>
              <li>Microsoft Active Directory/ADAM</li>
            </ul>
          </div>
        </div>

        {/* Certifications */}
        <div className="certifications container">
          <h4>Courses & Certifications</h4>
          <hr />
          <div className="container certs">
            <ul className="cert-items">
              <a
                href="https://www.credly.com/badges/58bad974-e41d-4947-acb0-55430885ccde/public_url"
                target="_blank"
                rel="noreferrer"
              >
                <li>
                  AWS Certified Cloud Practitioner<small>AWS</small>
                </li>
              </a>

              <a
                href="https://verify.acloud.guru/C111766D223A"
                target="_blank"
                rel="noreferrer"
              >
                <li>
                  AWS Certified Cloud Practitioner<small>ACloudGuru</small>
                </li>
              </a>

              <a
                href="https://www.udemy.com/certificate/UC-Y10CZ1Z8/"
                target="_blank"
                rel="noreferrer"
              >
                <li>
                  Backend Web Development with Django<small>Udemy</small>
                </li>
              </a>

              <a
                href="https://drive.google.com/file/d/1Q0vzY-yMXFfpmHhG7iCHPSkCsHYVSJXT/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <li>
                  Microservices Architecture<small>Pluralsight</small>
                </li>
              </a>

              <a
                href="https://drive.google.com/file/d/11i8H1OhqcOSMUBF93WSCBHEPyJcBpxl4/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <li>
                  Fundamentals of Object Oriented Programming
                  <small>Pluralsight</small>
                </li>
              </a>

              {/* <a
                href="https://drive.google.com/file/d/1HgiWlmPSMxd0H1YEyJoE42ffHtiY72fi/view"
                target="_blank"
                rel="noreferrer"
              >
                <li>
                  Spring Boot Fundamentals<small>Pluralsight</small>
                </li>
              </a> */}

              <a
                href="https://drive.google.com/file/d/1QWMM8kpbVh1BVsPZBT6HeuBvI7GHftPJ/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <li>
                  Spring Framework - Creating Your First Spring Boot Application
                  <small>Pluralsight</small>
                </li>
              </a>

              {/* <a
                href="https://drive.google.com/file/d/1NHIDLVOn9anTSnFIafdV8J_UsIZogJ-u/view"
                target="_blank"
                rel="noreferrer"
              >
                <li>
                  Spring Framework : Spring MVC Fundamentals
                  <small>Pluralsight</small>
                </li>
              </a>

              <a
                href="https://drive.google.com/file/d/11DIkcR4O7nkzrP5oNt8CQEy4OT22GGVR/view"
                target="_blank"
                rel="noreferrer"
              >
                <li>
                  Spring Framework : Spring Data JPA with Hibernate
                  <small>Pluralsight</small>
                </li>
              </a> */}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
