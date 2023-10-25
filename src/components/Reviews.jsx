import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import 'swiper/css';
import testi1 from '../assets/img/testi-1.jpg';
import testi2 from '../assets/img/testi-2.jpg';
import testi3 from '../assets/img/testi-3.jpg';

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
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={2}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 2,
              },
            }}
            className="testimonial-slider"
          >
            <SwiperSlide>
                <div className="testimonial-item">
                    <div className="clients-thumb">
                    <img src={testi1} alt="profile" />
                    </div>
                    <div className="testi-content">
                    <p>The food delivery web app program I ordered was for the basic package but am surprised it turned out this perfect. Its fully functional and user friendly. I am glad this turned out well in my favor. I highly recommend.</p>
                    <h4>Kristin Muller <span>CTO, TechSolutions Ltd.</span></h4>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="testimonial-item">
                    <div className="clients-thumb">
                    <img src={testi2} alt="profile" />
                    </div>
                    <div className="testi-content">
                    <p>A very competent seller all the requirements have been handled promptly and within the specified time. Its always a pleasure to work with him. I highly recommend his services.</p>
                    <h4>Chloe Mil <span>CEO, TechGear Inc.</span></h4>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="testimonial-item">
                    <div className="clients-thumb">
                    <img src={testi3} alt="profile" />
                    </div>
                    <div className="testi-content">
                    <p>Excellent services as always, I have worked with him before and he always does quality work. He is very responsive and definitely an expert in the programming field. Thank you indeed. I will be coming back for more. Highly recommended.</p>
                    <h4>Murphy <span>COO, TechCom Solutions</span></h4>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="testimonial-item">
                    <div className="clients-thumb">
                    <img src={testi3} alt="profile" />
                    </div>
                    <div className="testi-content">
                    <p>They is worth every dollar! fixed all my problems and made it look too easy. am just glad I can resume my normal work. I highly recommend Michael.</p>
                    <h4>Laura Williams <span>CTO, SoftTech Enterprises</span></h4>
                    </div>
                </div>
                </SwiperSlide>

          </Swiper>
        </div>
      </section>
    </>
  );
}
