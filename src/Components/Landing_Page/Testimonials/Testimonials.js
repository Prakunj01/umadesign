import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "./Testimonials.css";

const testimonials = [
  {
    img: "/images/Review/person-1.jpg",
    name: "Bunty Jat",
    review:
      "Uma Construction did a fantastic job on our commercial space redesign. They brought innovative ideas to the table and transformed our space into something truly remarkable.",
    rating: 4,
  },
  {
    img: "/images/Review/person-2.jpg",
    name: "Deepak Mishra",
    review:
      "From start to finish, Uma Construction provided outstanding service. They turned our ideas into a stunning reality. The project was on time and within budget, exceeding our expectations.",
    rating: 4,
  },
];

function Testimonial() {
  return (
    <section className="testimonial" id="testimonial">
      <div className="testimonial-wrapper">
        {/* Left - Testimonials Box */}
        <div className="testimonial-box">
          <h2 className="box-heading">Our Testimonial</h2>
          <div className="box-underline"></div>

          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop={true}
            className="testimonial-swiper"
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <div className="card-item">
                  <img src={t.img} alt={t.name} className="user-image" />
                  <h2 className="user-name">{t.name}</h2>
                  <p className="review">
                    <i className="fas fa-quote-left quote"></i> {t.review}
                  </p>
                  <div className="stars">
                    {[...Array(5)].map((_, starIndex) => (
                      <i
                        key={starIndex}
                        className={
                          starIndex < t.rating
                            ? "fas fa-star filled"
                            : "far fa-star"
                        }
                      ></i>
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Right - Contact Box */}
        <div className="contact-box">
          <h2 className="box-heading">Contact Us</h2>
          <div className="box-underline"></div>

          <form
            action="https://formspree.io/f/xpwyaqvl" // Replace with Formspree ID
            method="POST"
            className="contact-form"
          >
            <div className="input-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="field"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="field"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                className="field"
                placeholder="Enter your message"
                required
              ></textarea>
            </div>

            <input type="submit" className="submit-btn" value="Submit" />
          </form>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;