import React from 'react';
import fiverrImage from '../assets/img/fiverr.jpg';

export default function FiverSection() {
  return (
    <section className="content-section pd-bottom">
      <div className="container">
        <div className="row content-wrap align-items-center">
          <div className="col-md-6 sm-padding">
            <img src={fiverrImage} alt="Fiverr" style={{ width: '100%', borderRadius: '5px' }} />
          </div>

          <div className="col-md-6 sm-padding">
            <div className="content-details">
              <h2>Explore My Services on Fiverr.</h2>
              <p>
                I offer a range of professional services on Fiverr that can help your business grow. With my expertise and commitment to excellence, I strive to deliver top-notch solutions that cater to your specific needs.
              </p>
              <p>Whether you need assistance with web development, digital marketing, or content creation, I've got you covered.</p>
              <a href="https://www.fiverr.com/michaelgabri813" target="_blank" rel="noreferrer" className="default-btn">
                Check My Gigs
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
