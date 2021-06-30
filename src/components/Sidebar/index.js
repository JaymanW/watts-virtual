import React from 'react'
import { SidebarContainer, SidebarWrapper, SidebarMenu, SidebarLink } from './SidebarElements'
import './Sidebar.scss'

function Sidebar(props) {
    return (
        <SidebarContainer isOpen={props.isOpen}>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink href="#About" onClick={props.onBurger} >About Us</SidebarLink>
                    <SidebarLink href="#Work" onClick={props.onBurger} >Our Work</SidebarLink>
                    <SidebarLink href="#Contact" onClick={props.onBurger} className="contact-btn" style={{color: '#fff'}}>Contact Us</SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
