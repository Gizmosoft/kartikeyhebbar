/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import display_pic_new from "../../images/display_pic_new.jpg";
import './Home.css'
// import { Link } from "react-router-dom";

export default function Home() {
  return (
    // Main container with flex style to divide content
    <div className="container">
      {/* Display Card */}
      <div className='container-dp'>
      <img className="rounded-circle z-depth-2" width="300" height="280" alt="100x100" src={display_pic_new} data-holder-rendered="true"></img>
      <div className='title'>
        Kartikey Hebbar
        <br /><small>Software Engineer</small>
        <br />
        <div className='title-social'>
        {/* Add font awesome icons */}
          <a class="fa fa-linkedin" href='https://www.linkedin.com/in/kartikey-v-hebbar/' target="_blank" rel='noreferrer'></a>
          <a class="fa fa-github" href='https://github.com/Gizmosoft' target="_blank" rel='noreferrer'></a>
          <a class="fa fa-google" href='mailto:kartikey.hebbar@gmail.com' target="_blank" rel='noreferrer'></a>
        </div>
      </div>
      <div className='title-description'>
          <small>
            <p>I love learning & building new things</p>
            <p className='title-description-p'>Java &#128992; | Python &#128994;</p>
            <p className='title-description-p'>Spring Boot | Django | ReactJS</p>
          </small>
      </div>
      </div>
      {/* End of Display card */}
      {/* About Section */}
      <div className='about-section'>
        <div className='about-header h3 mx-5 py-4'>
          Hi! I'm Kartikey.👋
        </div>
        <div className='about-description'>
          &#11088;I'm a Software Engineer located in Bengaluru, India with more than 2 years of experience in Web Development, Automation, Artificial Intelligence and IT Operations related to Identity & Access Management domain. <br /><br />
          &#11088;I've worked on few personal projects in the Software Development domain and have had the opportunity to work with early-stage startups, government organizations and an IT giant like Accenture! <br /><br />
          &#11088;I'm define myself as a technology enthusiast dedicated towards learning and building web-based applications. I've worked on Spring Boot, Django and have recently dwelled into ReactJS library. Learning new things excites me and this pushed me to learn AWS recently!<br /><br />
          &#11088;I graduated from Bangalore Institute of Technology in 2020 with a Bachelor of Engineering degree in Telecommunication. It was during this degree where I was introduced to computer programming and I've been in love with it ever since &#128147; <br /><br />
          &#11088;I started learning various programming concepts and technologies on my own and gained some internship experiences at various companies during college. <br /><br />
          &#11088;Apart from coding & technology, I'm a huge soccer fan, a guitarist & a singer, book lover and an entrepreneurship enthusiast! &#128516; <br />
          <hr />
          <div className='location-pin'>
          <svg class="octicon octicon-location" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill="white" fill-rule="evenodd" d="M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z"></path></svg><p>&nbsp;Bengaluru, India</p>
          </div>   
        </div>
      </div>
      {/* End of About Section */}
    </div>
  );
}
