"use client";
import "./clientSlider.scss";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

interface ClientLogo {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface ClientSliderSectionProps {
  backgroundImage: string;
  title: string;
  description: string;
  clientLogos: ClientLogo[];
}

export const ClientSliderSection = ({
  backgroundImage,
  title,
  description,
  clientLogos,
}: ClientSliderSectionProps) => {
  return (
    <section
      className="client-section ptb-100"
      style={{
        background: `url('${backgroundImage}') no-repeat center center / cover`,
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-6">
            <div className="client-heading-wrap">
              <h3>{title}</h3>
            </div>
          </div>
          <div className="col-md-6 col-lg-6">
            <div className="client-para">
              <p>{description}</p>
            </div>
          </div>
        </div>
        <div className="row align-items-center justify-content-center mb-4">
          <div className="col-md-10 col-lg-9">
            <Swiper
              modules={[Autoplay, Navigation]}
              spaceBetween={30}
              slidesPerView={2}
              loop={true}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              breakpoints={{
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
              }}
              className="clients-carousel"
              aria-label="اسلایدر لوگوی مشتریان"
            >
              {clientLogos.map((logo) => (
                <SwiperSlide key={logo.id} className="single-client">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                    className="client-img"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};
