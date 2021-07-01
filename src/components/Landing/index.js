import React from 'react'
import './Landing.scss'

import LandingGraphic from '../LandingGraphic'

function Landing() {
    return (
        <div className="Landing">
            <div className="Landing-wrapper">
                <div className="Landing-text">
                    <h2>Create Your Dream <span>Web Presence</span></h2>
                    <p>Professional, affordable websites customized with a personal touch to meet your unique business needs.</p>
                    <a href="#">GET STARTED</a>
                </div>
                <LandingGraphic />
            </div>
        </div>
    )
}

export default Landing
