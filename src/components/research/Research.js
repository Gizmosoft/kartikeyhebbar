import React from "react";
import researchData from '../../data/myResearch.json'

import "../projects/Project.css";

export default function Research() {
  return (
    <>
      <div className="container justify-content-center research-container">
        <h2 className="project-heading">Research 📒</h2>
        <br />
        <hr />
      </div>

      {
        // mapping the JSON data
        researchData &&
          researchData.map((data) => {
            return (
              <>
                <div className="container project-box">
                  <div className="container-sm project">
                    <h3 className="research-title" key={"data.title"}>
                      <strong>{data.title}</strong>{" "}
                      <br />
                      <small className="research-paper" key={"data.paper"}>
                        {data.paper}
                      </small><br />
                      <small className="research-timestamp" key={'data.issued'}>
                        {data.issued}
                      </small><br />
                    </h3>

                    <div className="research-desc" key={"data.description"}>
                    {data.description &&
                      data.description.map((d) => {
                        return (
                          <>
                            <h5 className="project-description" key={"d"}>{d}</h5>
                          </>
                        );
                      })}
                    </div>

                    <div className="paper-url" key={"data.url"}>
                    {data.url !== "" ? (
                      <a href={data.url} target="_blank" rel="noreferrer">
                        <b>View Research</b> &nbsp;&nbsp;
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
              </>
            );
          })
      }
    </>
  );
}
