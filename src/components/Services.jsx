import React from 'react';
import { FaDesktop, FaMobile, FaCloud, FaCode, FaShoppingCart, FaShieldAlt, FaChartLine, FaCogs, FaHeadset, FaLock, FaRobot, FaSms, FaLayerGroup } from 'react-icons/fa';

export default function Services() {
  return (
    <section id="services" className="services-section pd-bottom">
      <div className="container">
        <div className="section-heading text-center mb-40">
          <span>Services</span>
          <h2>Our Services</h2>
        </div>
        <div className="row">
          <div className="col-lg-4 col-sm-6 sm-padding">
            <div className="service-content text-center">
              <FaDesktop size={50} />
              <h3>Custom Software Development</h3>
              <p>Tailored software solutions designed to address your unique business requirements and drive sustainable growth.</p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 sm-padding">
            <div className="service-content text-center">
              <FaMobile size={50} />
              <h3>Mobile App Development</h3>
              <p>Innovative mobile applications crafted for various platforms, providing seamless connectivity and accessibility for your users.</p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 sm-padding">
            <div className="service-content text-center">
              <FaShoppingCart size={50} />
              <h3>E-commerce Solutions</h3>
              <p>Robust e-commerce platforms that enable businesses to establish a strong online presence and drive sales.</p>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6 sm-padding">
            <div className="service-content text-center">
              <FaRobot size={50} />
              <h3>AI Solutions</h3>
              <p>Cutting-edge AI solutions to automate processes, gain insights, and enhance decision-making capabilities.</p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 sm-padding">
            <div className="service-content text-center">
              <FaSms size={50} />
              <h3>SMS Integration</h3>
              <p>Seamless SMS integration services to enable effective communication and engagement with your audience.</p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 sm-padding">
            <div className="service-content text-center">
              <FaLayerGroup size={50} />
              <h3>API Integration</h3>
              <p>Efficient integration of various APIs, including WhatsApp, to enhance functionality and connectivity within your software solutions.</p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 sm-padding">
            <div className="service-content text-center">
              <FaCode size={50} />
              <h3>UI/UX Design</h3>
              <p>Intuitive and visually appealing designs that enhance user engagement and create exceptional digital experiences.</p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 sm-padding">
            <div className="service-content text-center">
              <FaShieldAlt size={50} />
              <h3>Security Solutions</h3>
              <p>Robust security measures and solutions to safeguard your data and protect your business from potential threats.</p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 sm-padding">
            <div className="service-content text-center">
              <FaChartLine size={50} />
              <h3>IT Consulting</h3>
              <p>Expert guidance and consultation to help you make informed decisions and optimize your IT infrastructure.</p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 sm-padding">
            <div className="service-content text-center">
              <FaCogs size={50} />
              <h3>Maintenance and Support</h3>
              <p>Reliable maintenance and support services to ensure the smooth operation and longevity of your software applications.</p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 sm-padding">
            <div className="service-content text-center">
              <FaHeadset size={50} />
              <h3>Quality Assurance and Testing</h3>
              <p>Comprehensive testing services to ensure the reliability, security, and performance of your software solutions.</p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 sm-padding">
            <div className="service-content text-center">
              <FaLock size={50} />
              <h3>Data Security</h3>
              <p>Advanced data security solutions to protect your data from unauthorized access and potential breaches.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
