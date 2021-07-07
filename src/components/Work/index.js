import React from 'react'
import './Work.scss'

function Work() {
    return (
        <div id="Work">
            <div className="Work-wrapper">
                <h2>Our Work</h2>
                <div className="work-cnt">
                    <div className="work-item">
                        <img src="./kiernanProject400.png"/>
                        <div className="work-item-text">
                            <h3>Kiernan Tollefson Music</h3>
                            <p>A demonstration of a personal portfolio site we created for upcoming musician <a href="#" target="_blank">Kiernan Tollefson</a>. Kiernan came to us looking for a simplistic web platform to act as a hub for his various musical outlets, social medias, and merchandise.</p>
                            <a href="#" target="_blank" className="work-btn">
                                <p>CHECK IT OUT</p>
                                <img src="rightArrow20.png" />
                            </a>
                        </div>
                    </div>
                    <div className="work-item">
                        <img src="./vasProject400.png"/>
                        <div className="work-item-text">
                            <h3>Value Add Services</h3>
                            <p><a href="#" target="_blank">Value Add Services</a> is a kitchen remodeling company servicing the south-eastern Minnesota region. We collaborated with them to create a website showcasing their beautiful work and drive business directly to their email.</p>
                            <a href="#" target="_blank" className="work-btn">
                                <p>CHECK IT OUT</p>
                                <img src="rightArrow20.png" />
                            </a>
                        </div>
                    </div>
                    <div className="work-item">
                        <img src="./sliderProject400.png" style={{width: '100px'}} />
                        <div className="work-item-text">
                            <h3>sliderpuzzle.io</h3>
                            <p><a href="#" target="_blank">Sliderpuzzle.io</a> is a modern web adaptation of the classic sliding puzzle game. Complete with smooth gameplay, account creation, and live leaderboards, this application demonstrates our ability to seemlessly integrate front-end and back-end web technologies.</p>
                            <a href="#" target="_blank" className="work-btn">
                                <p>CHECK IT OUT</p>
                                <img src="rightArrow20.png" />
                            </a>
                        </div>
                    </div>    
                 </div>
                
            </div>
        </div>
    )
}

export default Work
