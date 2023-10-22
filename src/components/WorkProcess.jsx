import React from 'react'
import icon4 from '../assets/img/icon-4.png'
import icon5 from '../assets/img/icon-5.png'
import icon6 from '../assets/img/icon-6.png'
import icon2 from '../assets/img/icon-2.png'

export default function WorkProcess() {
    return (
        <>
            <section className="work-process pd-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6 sm-padding">
                            <div className="work-process-content text-center">
                                <img src={icon4} alt="icon" />
                                <h3>Create Account</h3>
                            </div>
                            <div className="arrows"></div>
                        </div>
                        <div className="col-lg-3 col-sm-6 sm-padding">
                            <div className="work-process-content text-center">
                                <img src={icon5} alt="icon" />
                                <h3>Verify Account</h3>
                            </div>
                            <div className="arrows"></div>
                        </div>
                        <div className="col-lg-3 col-sm-6 sm-padding">
                            <div className="work-process-content text-center">
                                <img src={icon6} alt="icon" />
                                <h3>Make Identification</h3>
                            </div>
                            <div className="arrows"></div>
                        </div>
                        <div className="col-lg-3 col-sm-6 sm-padding">
                            <div className="work-process-content text-center">
                                <img src={icon2} alt="icon" />
                                <h3>Exchange currency</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
