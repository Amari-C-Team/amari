import React from 'react'
import dabLogo from '../assets/img/dablogo.webp'

export default function Partner() {
  return (
    <section id="download" className="download-section">
        <div className="bg-shape"></div>
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="download-content padding pd-top-none">
                        <span>Our Partner</span>
                        <h2>
                            <span style={{color: '#32BFA6', fontSize: '80%'}}>
                                Meet Our Partner </span>
                            <br/>
                            Data Blockchain AI</h2>
                        <p>Unleash the Power of Efficiency: Simplifying Complexity with Data, AI, Machine Learning, and Blockchain for Exceptional Business Success!.</p>
                        
                        <div className="flex flex-wrap">
                            <a href="https://datablockchainai.com/dab-enterprise/about/" style={{marginRight: '10px'}} target="_blank" rel="noreferrer">
                                <button className="" style={{backgroundColor: '#32BFA6', color: '#fff', padding: '7px 20px'}}>
                                    Visit DAB Website</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <img src={dabLogo} alt="dab logo" 
                    className="img-fluid" style={{width: '70%'}} 
                    />
                </div>
            </div>
        </div>
    </section>
  )
}
