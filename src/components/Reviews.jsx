import React from 'react'
import testi1 from '../assets/img/testi-1.jpg'
import testi2 from '../assets/img/testi-2.jpg'
import testi3 from '../assets/img/testi-3.jpg'

export default function Reviews() {
  return (
    <>
        <section id="reviews" className="testimonial-section pd-bottom">
            <div className="bg-shape"></div>
            <div className="container">
                <div className="section-heading text-center mb-40">
                   <span>Reviews</span>
                   <h2>What Our Clients Says</h2>
                </div>
                <div id="testimonial-carousel" className="testimonial-carousel owl-carousel">
                    <div className="testimonial-item">
                        <div className="clients-thumb">
                            <img src={testi1} alt="profile"/>
                        </div>
                        <div className="testi-content">
                            <p>Mathematics as an expression of the human mind reflects the active will, the contemplative reason, and the desire for perfection</p>
                            <h4>Angelina Rose <span>CEO Machanical Inc.</span></h4>
                        </div>
                    </div>

                    <div className="testimonial-item">
                       <div className="clients-thumb">
                        <img src={testi2} alt="profile"/>
                        </div>
                       <div className="testi-content">
                            <p>Mathematics as an expression of the human mind reflects the active will, the contemplative reason, and the desire for perfection</p>
                            <h4>Michel Brown <span>CEO Industrial Inc.</span></h4>
                        </div>
                    </div>

                    <div className="testimonial-item">
                        <div className="clients-thumb">
                            <img src={testi3} alt="profile"/>
                        </div>
                        <div className="testi-content">
                            <p>Mathematics as an expression of the human mind reflects the active will, the contemplative reason, and the desire for perfection</p>
                            <h4>Melania Trump <span>CEO Construction Inc.</span></h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
