import React, { useState, useEffect } from 'react'
import './ContactForm.scss'

const axios = require('axios');

function ContactForm() {
    const [windowWidth, setWindowWidth] = useState(null);
    const [formSize, setFormSize] = useState(300);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [nameError, setNameError] = useState('none');
    const [emailError, setEmailError] = useState('none');
    const [messageError, setMessageError] = useState('none');

    const [formSubmitted, setFormSubmitted] = useState(false);

    useEffect(() => {
        updateWindowWidth();
        window.addEventListener("resize", updateWindowWidth);
        return () => window.removeEventListener("resize", updateWindowWidth);
    }, []);

    useEffect(() => {
        // console.log(windowWidth)
        if (windowWidth > 768) {
            setFormSize(400);
        } else {
            setFormSize(300);
        }
    }, [windowWidth])

    const updateWindowWidth = () => {
        const width = window.innerWidth;
        setWindowWidth(width);
    }

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    }

    const validateForm = () => {
        let correctFields = 0;
        
        // Basic Name Validation
        if (name.length < 3) {
            setNameError('block');
        } else if (name.length > 3) {
            setNameError('none');
            correctFields++;
        }

        // Basic Email Validation
        if (email.length < 5) {
            setEmailError('block');
        } else if (email.length > 5) {
            const dot = /[.]/g;
            if (email.search("@") == -1 || email.search(dot) == -1) {
                console.log(2)
                setEmailError('block');
            } else {
                setEmailError('none');
                correctFields++;
            }
        }

        // Basic Message Validation
        if (message.length < 5) {
            setMessageError('block');
        } else {
            setMessageError('none');
            correctFields++;
        }

        if (correctFields === 3) {
            console.log(`Name: ${name}`);
            console.log(`Email: ${email}`);
            console.log(`Message: ${message}`);

            axios.post('https://jaydenw-portfolio.herokuapp.com/email', {
                name: name,
                email: email,
                message: message
              })
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
            setName('');
            setEmail('');
            setMessage('');
            setFormSubmitted(true);
        }
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        validateForm();
    }

    // onSubmit={handleSubmit}
    
    return (
        <form onSubmit={handleSubmit} className="contact-form" style={{width: `${formSize}px`}}>
        {formSubmitted ? <span className="form-success">Form submitted. We'll get back to you in the next 24 hours!</span> : null}
        
        <label>
          Name
          <span className="form-error" style={{display: nameError}}>*Please enter a name.</span>
          <input className="form-input" type="text" value={name} onChange={handleNameChange} />
        </label>
        <label>
          Email
          <span className="form-error" style={{display: emailError}}>*Please enter valid email.</span>
          <input className="form-input" type="text" value={email} onChange={handleEmailChange} />
        </label>
        <label>
          Message
          <span className="form-error" style={{display: messageError}}>*Please enter a longer message.</span>
          <textarea className="form-input" value={message} onChange={handleMessageChange} />
        </label>
        <input className="submit-btn" type="submit" value="Submit" />
      </form>
    )
}

export default ContactForm
