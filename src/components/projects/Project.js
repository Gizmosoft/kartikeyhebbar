import React from "react";
import projectData from "../../data/myProjects.json";
import "./Project.css";

export default function Project() {
  // Helper function to get image source
  const getImageSrc = (imagePath) => {
    try {
      // Try to import the image
      return require(`../../images/${imagePath.split('/').pop()}`);
    } catch (error) {
      // Fallback to placeholder
      return require("../../images/project-placeholder.svg");
    }
  };

  return (
    <>
      <div className="container justify-content-center project-container">
        <h2 className="project-heading">Personal Projects 🖥️</h2>
        <br />
        <hr />
      </div>

      {
        // mapping the JSON data
        projectData &&
          projectData.map((data, index) => {
            return (
              <React.Fragment key={data.id || index}>
                <div className="container project-box">
                  <div className="project-content">
                    {/* Project Thumbnail */}
                    <div className="project-thumbnail">
                      <img 
                        src={getImageSrc(data.thumbnail)} 
                        alt={`${data.title} thumbnail`}
                        className="thumbnail-image"
                        onError={(e) => {
                          e.target.src = require("../../images/project-placeholder.svg");
                        }}
                      />
                    </div>
                    
                    {/* Project Details */}
                    <div className="project-details">
                      <h3 className="project-title">
                        <strong>{data.title}</strong>{" "}
                        <small
                          className="project-timestamp"
                        >
                          {data.timestamp}
                        </small>
                      </h3>

                      {data.tech &&
                        data.tech.map((tech, techIndex) => {
                          return (
                            <React.Fragment key={`${data.id}-tech-${techIndex}`}>
                              <span className="badge bg-primary">
                                {tech}
                              </span>
                              &nbsp;&nbsp;
                            </React.Fragment>
                          );
                        })}

                      <h5
                        className="project-description"
                      >
                        {data.description.split("\n").map((line, i) => (
                          <React.Fragment key={`${data.id}-desc-${i}`}>
                            {line}
                            <br />
                          </React.Fragment>
                        ))}
                      </h5>

                      <a
                        className="github-link"
                        href={data.source}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <b>Source Code</b>&nbsp;
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="26"
                          height="26"
                          fill="currentColor"
                          className="bi bi-link"
                          viewBox="0 0 16 16"
                        >
                          <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z" />
                          <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z" />
                        </svg>
                      </a>
                      <br />

                      {data.live !== "" ? (
                        <a href={data.live} target="_blank" rel="noreferrer">
                          <b>Live Demo</b> &nbsp;&nbsp;
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-arrow-up-right-square"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fillRule="evenodd"
                              d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"
                            />
                          </svg>
                        </a>
                      ) : null}
                    </div>
                  </div>
                </div>
                <br />
              </React.Fragment>
            );
          })
      }

      <div className="container more">
        <a href="https://github.com/Gizmosoft" target="_blank" rel="noreferrer">
          <h5>
            <b>Follow my other Projects on my GitHub!&nbsp;&nbsp;</b>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-up-right-square"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"
              />
            </svg>
          </h5>
        </a>
      </div>
    </>
  );
}
