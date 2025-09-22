"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// وارد کردن استایل‌های Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { TestimonialQuote } from "@/components/view";

interface Testimonial {
  author: {
    name: string;
    role: string;
    image: { src: string; alt: string; width: number; height: number };
  };
  quote: string;
}

interface TestimonialSectionProps {
  title: string;
  description: string;
  testimonials: Testimonial[];
  backgroundImage: string;
  arrowImages: {
    top: { src: string; alt: string; width: number; height: number };
    bottom: { src: string; alt: string; width: number; height: number };
  };
}

export const TestimonialSection = ({
  title,
  description,
  testimonials,
  backgroundImage,
  arrowImages,
}: TestimonialSectionProps) => {
  return (
    <section
      className="testimonial-section ptb-100"
      style={{
        background: `url('${backgroundImage}') no-repeat center center / cover`,
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 col-lg-5">
            <div className="testimonial-heading text-white">
              <h2 className="text-white">{title}</h2>
              <span className="animate-border mb-4"></span>
              <p>{description}</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-6">
            <div className="testimonial-content-wrap">
              <Image
                width={arrowImages.top.width}
                height={arrowImages.top.height}
                src={arrowImages.top.src}
                className="img-fluid testimonial-tb-shape shape-top"
                alt={arrowImages.top.alt}
              />
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                pagination={{
                  el: ".swiper-pagination",
                  clickable: true,
                }}
                className="testimonial-slider"
                aria-label="اسلایدر نظرات مشتریان"
              >
                {testimonials.map((testimonial, index) => (
                  <SwiperSlide key={index}>
                    <TestimonialQuote
                      author={testimonial.author}
                      quote={testimonial.quote}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="swiper-pagination custom-dot"></div>
              <Image
                width={arrowImages.bottom.width}
                height={arrowImages.bottom.height}
                src={arrowImages.bottom.src}
                className="img-fluid testimonial-tb-shape shape-bottom"
                alt={arrowImages.bottom.alt}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};