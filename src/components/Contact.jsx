import React from 'react'
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  return (

    <section id="contact" className="contact-section pd-bottom" style={{ marginTop: '100px' }}>
        <div className="container">
            
            <div className="row">
                <div className="col-lg-5">
                    <div className="section-heading mb-40">
                        <h2>Contact Us</h2>
                        <p>Get in touch with us for any inquiries or project discussions.</p>
                    </div>
                    
                    
                    <div className="">
                        <div className="contact-item">
                            <div className="icon">
                                <FaMapMarkerAlt />
                            </div>
                            <h4>Visit Us</h4>
                            <p>Nairobi, Kenya</p>
                        </div>
                    </div>
                    <div className="">
                        <div className="contact-item">
                            <div className="icon">
                                <FaPhone />
                            </div>
                            <h4>Call Us</h4>
                            <p>+254 794 856475</p>
                        </div>
                    </div>
                    <div className="">
                        <div className="contact-item">
                            <div className="icon">
                            <FaEnvelope />
                            </div>
                            <h4>Email Us</h4>
                            <p>info@amari-consultancy.services</p>
                        </div>
                    </div>
                </div>



                <div className="col-lg-7 mx-auto mt-5">
                    <form>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Your Name" required />
                        </div>

                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Your Phone(Not Required)" required />
                        </div>

                        <div className="form-group">
                            <input type="email" className="form-control" placeholder="Your Email" required />
                        </div>

                        <div className="form-group">
                            <textarea className="form-control" rows="5" placeholder="Your Message" required></textarea>
                        </div>

                        <button type="submit" className="send-msg-btn">Send Message</button>
                    </form>
                </div>
            </div>

        </div>
      </section>
)}

