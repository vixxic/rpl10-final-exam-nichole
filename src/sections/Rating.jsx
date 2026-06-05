import "../styles/Rating.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

function Rating() {
  const reviews = [
    "/Review-Card.png",
    "/Review-Card (1).png",
    "/Review-Card (2).png",

    "/Review-Card.png",
    "/Review-Card (1).png",
    "/Review-Card (2).png",
  ];

  return (
    <section className="testimonials-section outfit-font">
      <h1>What people say about Team</h1>

      <div className="testimonial-slider-wrapper">
        <Swiper
          modules={[Navigation]}
          slidesPerView={"auto"}
          spaceBetween={0}
          navigation={{
            prevEl: ".testimonial-prev",
            nextEl: ".testimonial-next",
          }}
          loop={false}
          className="testimonial-swiper"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index} className="testimonial-slide">
              <img src={review} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="testimonial-nav">
        <button className="testimonial-prev">
          <FaArrowLeft />
        </button>

        <button className="testimonial-next">
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
}

export default Rating;
