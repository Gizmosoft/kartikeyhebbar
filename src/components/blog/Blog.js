import React from "react";
import blogData from "../../data/myBlogs.json";
import "./Blog.css";

export default function Blog() {
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
      <div className="container justify-content-center blog-container">
        <h2 className="blog-heading">Blog Posts 📝</h2>
        <br />
        <hr />
      </div>

      {
        // mapping the JSON data
        blogData &&
          blogData.map((data, index) => {
            return (
              <React.Fragment key={`blog-${data.id || index}`}>
                <div className="container blog-box">
                  <div className="blog-content">
                    {/* Blog Thumbnail */}
                    <div className="blog-thumbnail">
                      <img 
                        src={getImageSrc(data.thumbnail)} 
                        alt={`${data.title} thumbnail`}
                        className="thumbnail-image"
                        onError={(e) => {
                          e.target.src = require("../../images/project-placeholder.svg");
                        }}
                      />
                    </div>
                    
                    {/* Blog Details */}
                    <div className="blog-details">
                      <div className="blog-header">
                        <h3 className="blog-title">
                          <strong>{data.title}</strong>
                        </h3>
                        <div className="blog-meta">
                          <span className="blog-timestamp">
                            {data.timestamp}
                          </span>
                          <span className="blog-read-time">
                            {data.readTime}
                          </span>
                          <span className="blog-category">
                            {data.category}
                          </span>
                        </div>
                      </div>

                      {data.tags &&
                        data.tags.map((tag, tagIndex) => {
                          return (
                            <React.Fragment key={`blog-${data.id || index}-tag-${tagIndex}`}>
                              <span className="badge bg-secondary">
                                {tag}
                              </span>
                              &nbsp;&nbsp;
                            </React.Fragment>
                          );
                        })}

                      <div className="blog-excerpt">
                        <p>{data.excerpt}</p>
                      </div>

                      <div className="blog-actions">
                        <a
                          className="read-more-link"
                          href={data.source}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <b>Read Full Article</b> &nbsp;
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
                      </div>
                    </div>
                  </div>
                </div>
                <br />
              </React.Fragment>
            );
          })
      }
    </>
  );
} 