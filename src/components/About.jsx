import React from 'react'
import techImg from '../assets/img/content-1.png'

export default function About() {
    return (
        <section id="about" className="content-section pd-bottom">
        <div className="bg-shape"></div>
            <div className="container">
                <div className="row content-wrap align-items-center">
                <div className="col-md-6 sm-padding">
                    <div className="content-details">
                    <h2>About Amari Consultancy</h2>
                    <p>At Amary Consultancy Services, we are dedicated to leveraging cutting-edge technology to drive your business forward. Our mission is to provide comprehensive tech solutions that streamline operations and amplify growth. Through our commitment to excellence and innovation, we aim to revolutionize the digital landscape and empower businesses to thrive in the ever-evolving tech world.</p>
                    <ul className="content-list">
                        <li>Passion for Technological Advancement</li>
                        <li>Embracing the Power of Open Source Technology</li>
                        <li>Reliability and Speed at the Core of Our Solutions</li>
                    </ul>
                    <a href="#" className="default-btn">Discover Our Services</a>
                    </div>
                </div>
                <div className="col-md-6 sm-padding">
                    <img src={techImg} alt="content" />
                </div>
                </div>
            </div>
        </section>

    )
}
