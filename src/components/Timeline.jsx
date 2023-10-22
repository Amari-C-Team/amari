import React from 'react'
import './Timeline.css'
import { AiFillForward } from 'react-icons/ai';

export default function Timeline() {
    return (
        <>
            <section style={{ backgroundColor: '#F0F2F5', marginTop: '100px', marginBottom: '100px' }} className='timeline-section mt-5' id='timeline'>
                <div className="container py-5">
                    <div className="main-timeline">
                        <div className="timeline left">
                            <div className="card">
                                <div className="card-body p-4">
                                    <h3>My Birdie</h3>
                                    <p className="mb-3">
                                        My Birdie is another project that highlights our commitment to delivering exceptional software solutions. We are currently working on the development of My Birdie to create an intuitive and user-friendly platform that caters to the specific requirements of our clients. More information and updates regarding My Birdie will be shared soon.
                                    </p>
                                    <a href="https://www.mybirdieproject.com" target="_blank" rel="noopener noreferrer" className="">Check Project <AiFillForward /></a>
                                </div>
                            </div>
                        </div>
                        <div className="timeline right">
                            <div className="card">
                                <div className="card-body p-4">
                                    <h3>Sneak Peak</h3>
                                    <p className="mb-3">
                                        Sneak Peak is an exciting project that is currently in development. Stay tuned for updates on this upcoming venture. Our team is dedicated to bringing innovation and creativity to the forefront, ensuring that Sneak Peak will revolutionize the industry with its unique features and functionality.
                                    </p>
                                    <a href="#" className="">Check Project <AiFillForward /></a> {/* Add the project link once available */}
                                </div>
                            </div>
                        </div>
                        <div className="timeline left">
                            <div className="card">
                                <div className="card-body p-4">
                                    <h3>Formula Gray</h3>
                                    <p className="mb-3">
                                        Formula Gray is a dynamic platform that empowers businesses to streamline their operations and enhance their productivity. Our collaboration with the Formula Gray team resulted in the development of a highly scalable and customizable software solution that caters to the unique needs of modern enterprises. By leveraging the latest technologies, we contributed to the creation of a powerful tool that facilitates seamless business management.
                                    </p>
                                    <a href="https://www.formulagray.io/" target="_blank" rel="noopener noreferrer" className="">Check Project <AiFillForward /></a>
                                </div>
                            </div>
                        </div>
                        <div className="timeline right">
                            <div className="card">
                                <div className="card-body p-4">
                                    <h3>Anitel Billing Solutions</h3>
                                    <p className="mb-3">
                                        Anitel Billing Solutions is a comprehensive billing platform designed to streamline and simplify complex billing processes. Our team collaborated closely with the Anitel team to create a robust and user-friendly system that optimizes billing operations. Through the integration of advanced technologies and intuitive design, we ensured that Anitel Billing Solutions meets the highest standards of efficiency and reliability.
                                    </p>
                                    <a href="https://www.anitelbillingsolutions.com/" target="_blank" rel="noopener noreferrer" className="">Check Project <AiFillForward /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
