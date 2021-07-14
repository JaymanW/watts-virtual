import React, { useState, useEffect } from 'react'
import './Contact.scss'

// COMPONENTS
// import ContactForm from '../ContactForm';

function Contact(props) {
    // const [formWidth, setFormWidth] = useState(300);
    const [formHeight, setFormHeight] = useState(1000);

    // const handleFormSubmit = () => {
    //     console.log("W O R K I N G")
    // }

    useEffect(() => {
        if (props.windowWidth > 768) {
            setFormHeight(900)
        } else {
            setFormHeight(1000)
        }

    }, [props.windowWidth])

    
    
    return (
        <div id="contact-wrapper">
            <div className="contact-page">
                <h2>Contact Us</h2>
                <p>Ready to upgrade your web presence? Fill out the form below with your information and one of our project managers will contact you within 24 hours. We offer free web consultations to provide you with the best possible solutions to fit your unique needs. Let’s build a beautiful web presence!</p>
                {/* { isFormSubmitted ? <p>Form submitted</p> : <ContactForm onFormSubmit={handleFormSubmit} /> } */}
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScEAi3sEy3stavp8s6W9gXAPG3ENheaSGOmVecAPlLhPCt3DA/viewform?embedded=true" width="640" height={formHeight} frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            </div>
        </div>
    )
}

export default Contact
