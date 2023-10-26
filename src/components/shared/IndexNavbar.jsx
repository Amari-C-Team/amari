import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function IndexNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      id="header"
      className="header-section"
    >
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <Link to="/" className="navbar-brand">
            <h3>AMARI</h3>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            aria-controls="basic-navbar-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={toggleNavbar}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} >
            <ul className="navbar-nav ml-auto" style={{backgroundColor: isOpen ? 'green' : '#fff'}}>
              <li className="nav-item">
                <Link to="/" className="nav-link" data-scroll style={{ color: isOpen ? '#fff' : '#000' }}>
                  Home
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#services" className="nav-link" data-scroll style={{ color: isOpen ? '#fff' : '#000' }}>
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/projects" className="nav-link" data-scroll style={{ color: isOpen ? '#fff' : '#000' }}>
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#about" className="nav-link" data-scroll style={{ color: isOpen ? '#fff' : '#000' }}>
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#reviews" className="nav-link" data-scroll style={{ color: isOpen ? '#fff' : '#000' }}>
                  Reviews
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link signup-btn">
                  Reach Us
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
