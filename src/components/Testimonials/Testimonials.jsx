import React from "react";
import Title_Block from "components/Title_Block/Title_Block";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "./Testimonials.css";

const Testimonials = ({ testimonials }) => {
  const testimonialsArray = Object.values(testimonials);

  return (
    <div className="container mx-auto mt-24 mb-52">
        <Title_Block
          title="Testimonials"
          subtitle="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"
        />
      <div className="mt-20 bg-[var(--dark)] rounded-3xl p-16 pb-12">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          spaceBetween={70}
          slidesPerView={2}
          loop={true}
          className="swiper-container flex overflow-hidden"
        >
          {testimonialsArray.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <blockquote className="relative bg-[var(--dark)] p-8 rounded-xl border-2 text-white mx-auto max-w-4xl border-[var(--green)] mb-4">
                <p className="text-2xl font-semibold mb-4 min-h-32">
                  "{testimonial.text}"
                </p>
                <div
                  className="absolute left-10 bottom-[-25px] w-0 h-0 border-t-[25px] border-l-[25px] border-l-transparent border-r-[25px] border-r-transparent"
                  style={{ borderTopColor: "var(--green)" }}
                ></div>
                <footer className="mt-4 text-[var(--green)]">
                <div className="footer__test__text">
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm">{testimonial.position}</p>
                </div>
              </footer>
              </blockquote>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
