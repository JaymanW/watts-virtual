import React from 'react'
import './Header.scss'

import Hamburger from 'hamburger-react'

function Header(props) {
    return (
        <div className="Header">
            <div className="Header-wrapper">
                <div className="logo-cnt">
                    <img src="./wvLogo.png" />
                    <a href="#">
                        <h1>Watts Virtual</h1>
                    </a>
                </div>
                {
                    props.windowWidth >= 768 ?
                    <nav>
                        <ul className="nav-menu">
                            <li>
                                <a href="#">About Us</a>
                            </li>
                            <li>
                                <a href="#">Our Features</a>
                            </li>
                            <li>
                                <a href="#">Our Work</a>
                            </li>
                            <li>
                                <a href="#" className="contact-btn">Contact Us</a>
                            </li>
                        </ul>
                    </nav>
                    :
                    <Hamburger 
                        size="30"
                        color='#000'
                        // onToggle={() => props.onBurger()}
                        // toggled={props.isOpen}
                    />
                }
            </div>
        </div>
    )
}

export default Header
