import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaBehance, FaYoutube } from 'react-icons/fa';


export default function Footer() {
  return (
    <>
    <section className="widget-section bd-bottom pd-bottom">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-sm-6 sm-padding">
                        <div className="widget-content">
                            <h3>AMARI</h3>
                            <p>Cultivating Innovation and Streamlining Operations:
                Empowering Your Business through the Transformational Force of Technology.</p>
                <ul className="widget-social">
                    <li>
                        <a href="#"><FaFacebook /></a>
                    </li>
                    <li>
                        <a href="#"><FaTwitter /></a>
                    </li>
                    <li>
                        <a href="#"><FaInstagram /></a>
                    </li>
                    <li>
                        <a href="#"><FaYoutube /></a>
                    </li>
                </ul>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 sm-padding">
                        <div className="widget-content mid-content">
                            <h3>Usefull Link</h3>
                            <ul className="widget-link">
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Our Services</a></li>
                                <li><a href="#">Pricing Plan</a></li>
                                <li><a href="#">Terms & Condition</a></li>
                                <li><a href="#">Privecy Policy</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 sm-padding">
                        <div className="widget-content">
                            <h3>Contact Us</h3>
                            <ul className="widget-link">
                                <li><i className="ti-location-pin"></i>Nairobi, Kenya.</li>
                                <li><i className="ti-email"></i>info@amari-consultancy.services</li>
                                <li><i className="ti-headphone"></i>+254 794 856475</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
		<footer className="footer-section align-center">
			<div className="container">
				<p>&copy; <span id="currentYear"></span> Amari Consultancy</p>
			</div>
		</footer>
    </>
  )
}
