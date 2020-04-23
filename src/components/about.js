import React from 'react'
import FadeIn from 'react-fade-in'
import aboutImage from '../assets/about.svg'
let About = () => {
    return(
            <FadeIn delay={1000}  className='color'>

                <div id="about-container">
                    <div className="svg-container">
                        <img draggable='false' className="svg-header" src={aboutImage} alt="about"/>
                    </div>
                    <p className="contact-paragraphs">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.”
                    </p>
                    <h1>Soccer is my shit.</h1>
                        <p>Hayden Criollo.</p>
                        <p>Age 23.</p>
                        <p>Freestyler.</p>
                        <p>Influencer.</p>
                        <p>Some dtuff about me.</p>
                </div>
            </FadeIn>
        
    )
}

export default About