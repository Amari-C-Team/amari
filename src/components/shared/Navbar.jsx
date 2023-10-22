import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <header id="header" className="header-section" style={{backgroundColor: '#fff'}}>
                <div className="container">
                    <nav className="navbar">
                        <a href="#" className="navbar-brand">
                            <h3>
                                AMARI
                            </h3>
                        </a>
                        <div className="d-flex menu-wrap">
                            <div id="navmenu" className="mainmenu">
                                <ul className="nav">
                                        <li>
                                            <Link to="/" className="nav-link" data-scroll>Home</Link>
                                                        <span className="sr-only">(current)</span>
                                        </li>
                                        <li>
                                            <Link to="#services" className="nav-link" data-scroll>Services</Link>
                                        </li>
                                        <li>
                                            <Link to="/projects" className="nav-link" data-scroll>Projects</Link>
                                        </li>
                                        <li>
                                            <Link to="#about" className="nav-link" data-scroll>About</Link>
                                        </li>
                                        <li>
                                            <Link to="#reviews" className="nav-link" data-scroll>Reviews</Link>
                                        </li>
                                        <li>
                                            <Link to="/contact" className="signup-btn">Reach Us</Link>
                                        </li>
                                    </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </header> 
    )
}
