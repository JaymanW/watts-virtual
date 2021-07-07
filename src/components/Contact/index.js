import React, { useState } from 'react'
import './Contact.scss'

// COMPONENTS
import ContactForm from '../ContactForm';

function Contact() {
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    const handleFormSubmit = () => {
        console.log("W O R K I N G")
    }
    
    return (
        <div id="contact-wrapper">
            <div className="contact-page">
                <h2>Contact Us</h2>
                <p>Ready to upgrade your web presence? Fill out the form below with your information and one of our project managers will contact you within 24 hours. We offer free web consultations to provide you with the best possible solutions to fit your unique needs. Let’s build a beautiful web presence!</p>
                { isFormSubmitted ? <p>Form submitted</p> : <ContactForm onFormSubmit={handleFormSubmit} /> }
            </div>
        </div>
    )
}

export default Contact
