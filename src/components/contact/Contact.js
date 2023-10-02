import React, {useRef} from "react";
import emailjs from '@emailjs/browser';
import "./contact.css";

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_97kkkzb', 'template_sid4gpw', form.current, 'guag3Ya_Zap6lkp0B')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <section className="contact section" id="contact">
            <h2 className="section-title">Contact Me</h2>
            <span className="section-subtitle">Get in touch</span>

            <div className="contact-container container grid">
                <div className="contact-content">
                    <h3 className="contact-title">Talk to me</h3>

                    <div className="contact-info">
                        <div className="contact-card">
                            <i className="bx bx-mail-send contact-card-icon"></i>

                            <h3 className="contact-card-title">Email</h3>
                            <span className="contact-card-data">shirley.c.nguyen@gmail.com</span>

                            <a href="mailto:shirley.c.nguyen@gmail.com" className="contact-button">
                                Write me{" "} 
                                <i className="bx bx-right-arrow-alt contact-button-icon"></i>
                            </a>
                        </div>

                    </div>
                </div>

                <div className="contact-content">
                    <h3 className="contact-title">Leave me a message</h3>

                    <form ref={form} onSubmit={sendEmail} className="contact-form">
                        <div className="contact-form-div">
                            <label className="contact-form-tag">Name</label>
                            <input 
                            type="text" 
                            name="name" 
                            className="contact-form-input" 
                            placeholder="Type your name" />
                        </div>

                        <div className="contact-form-div">
                            <label className="contact-form-tag">E-Mail</label>
                            <input 
                            type="email" 
                            name="email" 
                            className="contact-form-input" 
                            placeholder="Type your e-mail" />
                        </div>

                        <div className="contact-form-div contact-form-area">
                            <label className="contact-form-tag">Message</label>
                            <textarea
                                name="message"
                                cols="30"
                                rows="10"
                                className="contact-form-input"
                                placeholder="Write your message"
                                ></textarea>
                        </div>

                        <button className="button button-flex submit-button">
                            Send Message 
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}