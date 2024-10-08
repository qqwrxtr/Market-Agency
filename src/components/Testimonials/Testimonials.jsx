import React from "react";
import Title_Block from "components/Title_Block/Title_Block";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "./Testimonials.css";

const Testimonials = ({ testimonials }) => {
  const testimonialsArray = Object.values(testimonials);

  return (
    <div className="container mx-auto mt-20 md:mt-36" id="testimonials">
        <Title_Block
          title="Testimonials"
          subtitle="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"
        />
      <div className="mt-10 md:mt-20 bg-[var(--dark)] rounded-3xl p-6 md:p-16 pb-6 md:pb-12">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          spaceBetween={70}
          slidesPerView={1}
          loop={true}
          className="swiper-container flex overflow-hidden"
        >
          {testimonialsArray.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <blockquote className="relative bg-[var(--dark)] p-4 md:p-8 rounded-xl border-2 text-white mx-auto max-w-4xl border-[var(--green)] mb-0 md:mb-4">
                <p className="text-base sm:text-xl lg:text-2xl font-semibold mb-0 md:mb-4 min-h-32 min-[0px]:text-sm max-[440px]:text-sm">
                  "{testimonial.text}"
                </p>
                <div
                  className="hidden md:block absolute left-10 bottom-[-25px] w-0 h-0 border-t-[25px] border-l-[25px] border-l-transparent border-r-[25px] border-r-transparent"
                  style={{ borderTopColor: "var(--green)" }}
                ></div>
                <footer className="mt-4 text-[var(--green)]">
                <div className="footer__test__text">
                  <p className="font-bold text-sm sm:text-base">{testimonial.name}</p>
                  <p className="text-xs sm:text-sm">{testimonial.position}</p>
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
