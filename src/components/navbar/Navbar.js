import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
      <div className="d-flex flex-nowrap w-100">
        <Link className="navbar-brand" to="/">
            {/* <img src={favicon} alt="" width="40" height="34" className="d-inline-block align-text-top" /> */}
          &lt;/&gt; Kartikey Hebbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav justify-content-end">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/workex">
                Work Experience
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/education">
                Education
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/skills">
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projects">
                Personal Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/research">
                Research
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/aspirations">
                Interests & Aspirations
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
