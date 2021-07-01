import React from 'react'
import './About.scss'

import { Fade } from 'react-reveal'


function About() {
    
    return (
        <div id="About">
            <div className="About-wrapper">
                <Fade duration="2000">
                    <h2>We are a web development agency based out of <span>Rochester, Minnesota.</span></h2>
                </Fade>
                <p>At Watts Virtual, we recognize the difficulty in building/maintain a website. That’s why we specialize in helping businesses find professional, affordable web solutions. We offer a variety of services to keep your brand up-to-date on the web.</p>
                <p>If you’re ready to start transforming your web presence, let’s get in <a href="#">contact</a>.</p>
                <a className="about-btn" href="#">SEE OUR WORK</a>
            </div>
        </div>
    )
}

export default About
