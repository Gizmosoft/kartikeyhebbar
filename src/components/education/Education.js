import React from 'react';
import './Education.css';

export default function Education() {
  return (
    <>
    <div className="container justify-content-center heading-container">
        <h2 className="education-heading">Education &#127891;</h2>
        <br />
        <hr />
    </div>

    <div className='container education-box'>
        <div className='container-sm college'>
            <h3 className='college-details'><strong>Northeastern University <small>Boston, MA</small></strong></h3>
            {/* <h4 className='college-details'><small>affiliated to Visvesvaraya Technological University (VTU), Belgaum</small></h4><br /> */}

            <div className='container-sm degree-div'>
            <h4 className='degree'>Master of Science (M.S.) | 2023 - 2025 (Expected) </h4>
            <h5 className='branch'>Software Engineering Systems</h5>
            {/* <h5 className='grade'>Grade: <label>7.14/10.0</label></h5><br /> */}

            <h5 className='courses'><strong>Relevant Courses:</strong></h5>
              <ul className='course-items'>
                <li>CSYE 6200 : Concepts of Object-Oriented Design</li>
                <li>INFO 6150 : Web Design & User Experience Engineering</li>
              </ul>
              <br />
        </div>
        </div>
    </div><br />

    <div className='container education-box'>
        <div className='container-sm college'>
            <h3 className='college-details'><strong>Bangalore Institute of Technology <small>Bengaluru, IND</small></strong></h3>
            <h4 className='college-details'><small>affiliated to Visvesvaraya Technological University (VTU), Belgaum</small></h4><br />

            <div className='container-sm degree-div'>
            <h4 className='degree'>Bachelor of Engineering (B.E.) | 2016 - 2020</h4>
            <h5 className='branch'>Telecommunication Engineering</h5>
            <h5 className='grade'>Grade: <label>7.14/10.0</label></h5><br />

            <h5 className='courses'><strong>Relevant Courses:</strong></h5>
              <ul className='course-items'>
                <li>Engineering Mathematics (Calculus, Algebra, Statistics, Probability)</li>
                <li>Programming in C & Data Structures</li>
                <li>Operating Systems</li>
                <li>Real Time Systems</li>
                <li>Computer Communication Networks</li>
                <li>Microprocessor</li>
                <li>Artificial Intelligence</li>
              </ul>
              <br />
             
            <h5 className='tech-achievements'><strong>Technical Achievements:</strong></h5>
              <ul className='achievements'>
                <li><strong>CodeRank 2020, Winner : </strong>A coding contest organized by the IEEE Club of BIT</li>
                <li><strong>Inceptra, 2019 : </strong>Developed and showcased a face-recognition based attendance manging system in this technology exhibition organized by BIT.</li>
                <li><strong>Cisco IoT Hackathon, RV College of Engineering : </strong>Repesented college in this Hackathon Finals organized by Cisco by prototyping an automatic vehicle lockdown system to prevent drunk driving.</li>
              </ul>
              <br />

            <h5 className='responsibilities'><strong>Position of responsibility:</strong></h5>
            <ul className='resp-desc'>
              <li><strong>Diminished-7th - Official Music Club of BIT</strong>, Sub-Core Member: <small>Organized various cultural events and competitions in college. Represented college in various music competitions like VTU Youth Festival. Performed on a special gig organized for the underprivileged school kids from an NGO.</small></li>
            </ul>
            <br />
        </div>
        </div>
    </div>
    </>
  )
}
