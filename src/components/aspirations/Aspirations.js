import React from 'react'

import './Aspirations.css'

export default function Aspirations() {
  return (
    <>
        <div className="container justify-content-center aspiration-container">
            <h2 className="aspirations-heading">Interests & Aspirations 🎯</h2>
            <br />
            <hr />
        </div>

        {/* Question 1 */}
        <div className='container interests-questions'>
            <h3><b>Where do I see myself in the next 5 years? 📈</b></h3><br />
        </div>
        <div className='container interests-answers'>
            <p>
                As my profile speaks volumes of how I got into tech and how have I been doing so far, I definitely see an upgraded version of myself in the coming years. I want to become a technology specialist in the field of Software Development. I am more inclined towards Backend Engineering currently but I would definitely not limit myself to it. I want to learn new technologies and variety of skills ranging from Blockchain & Web3 technologies to Artificial Intelligence and Cloud Computing. I have already begun learning some of those! <br /><br />
                So, in the next five years, I see myself as a tech specialist in Software Development (Backend) and a prolific and entusiastic learner of next-gen technologies!
            </p>
        </div><br />

        {/* Question 2 */}
        <div className='container interests-questions'>
            <h3><b>What are my interests apart from tech? 🎸📖🖋️</b></h3><br />
        </div>
        <div className='container interests-answers'>
            <ul>
                <li>I'm a hobbyist musician (singer & guitarist). I also write songs and poems in Hindi.</li>
                <li>I'm a huge Football (Soccer) fan! I love to play Football as well.</li>
                <li>I love reading books of various genres ranging from Suspense/Thrillers to Self-help and Motivation.</li>
                <li>I like reading about Businesses and Entrepreneurship. I like interacting with like minded people and sharing knowledge. I spoke in several workshops and tech seminars at college to help out other students.</li>
            </ul>
        </div><br />

        {/* Question 3 */}
        <div className='container interests-questions'>
            <h3><b>What is my ONE THING that I would like to do in a lifetime? 🥅</b></h3><br />
        </div>
        <div className='container interests-answers'>
            <p>
            I would like to impact the lives of at least a few thousand people and make it better through building technology! <br /><br />
            This certainly requires years of expertise with a deep understanding of human lives and ways to make it better with technology. I would love to pursue this endeavour someday backed with a ground-breaking solution to some of the critical problems in our lives. My journey to accomplish this has already begun. I think, every passing day offers me an opportunity to learn something new and become a better version of myself!
            </p>
        </div><br />

    </>
  )
}
