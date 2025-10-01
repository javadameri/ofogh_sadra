import { Service } from "@/library";
import {
  IconArrowLeft,
  IconClockHour3,
  IconLink,
  IconSquareCheck,
  IconUser,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

interface ServicesDetailsProps {
  service: Service;
}

export const ServicesDetails = ({ service }: ServicesDetailsProps) => {
  return (
    <main className="main">
      {/* بخش هدر */}
      <section
        className="hero-section ptb-100 gradient-overlay"
        style={{
          background: `url('${service.image.src}') no-repeat center center / cover`,
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-7">
              <div className="page-header-content text-white text-center pt-sm-5 pt-md-5 pt-lg-0">
                <h1 className="text-white mb-0 position-relative">
                  {service.title}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* بخش جزئیات سرویس */}
      <section className="project-details-section ptb-100">
        <div className="container">
          <div className="row justify-content-between">
            {/* تصویر سرویس */}
            <div className="col-md-12 col-lg-8">
              <div className="img-wrap mb-md-4 mb-lg-0">
                <Image
                  width={service.image.width}
                  height={service.image.height}
                  src={service.image.src}
                  alt={service.image.alt}
                  className="img-fluid rounded shadow-sm"
                />
              </div>
            </div>

            {/* سایدبار سرویس */}
            <div className="col-md-12 col-lg-4">
              <div className="project-details-sidebar">
                <ul className="project-info-list">
                  <li className="d-flex align-items-center mb-3 p-4 rounded">
                    <span className="color-secondary d-block me-3">
                      <service.icon size={25} />
                    </span>
                    <div className="d-block">
                      <h5 className="mb-0">سرویس</h5>
                      <p>{service.title}</p>
                    </div>
                  </li>
                  <li className="d-flex align-items-center mb-3 p-4 rounded">
                    <span className="color-secondary d-block me-3">
                      <IconClockHour3 size={25} />
                    </span>
                    <div className="d-block">
                      <h5 className="mb-0">مدت زمان</h5>
                      <p>—</p> {/* در صورت نیاز مقدار واقعی اضافه شود */}
                    </div>
                  </li>
                  <li className="d-flex align-items-center mb-3 p-4 rounded">
                    <span className="color-secondary d-block me-3">
                      <IconLink size={25} />
                    </span>
                    <div className="d-block">
                      <h5 className="mb-0">لینک سرویس</h5>
                      <Link href={service.link}>{service.link}</Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* توضیحات کامل */}
          <div className="row mt-5">
            <div className="col-md-12">
              <div className="project-details-content">
                <h5>درباره این سرویس</h5>
                {service.longDescription.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          </div>

          {/* ویژگی‌ها */}
          {service.features.length > 0 && (
            <div className="row mt-5">
              <div className="col-md-12">
                <div className="project-details-feature">
                  <ul className="list-unstyled tech-feature-list">
                    {service.features.map((feature, i) => (
                      <li className="py-1" key={i}>
                        <span className="me-2 color-secondary">
                          <IconSquareCheck size={16} />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* بخش تماس با ما / Call to action */}
      <section className="call-to-action py-5 gray-light-bg">
        <div className="container">
          <div className="row justify-content-around align-items-center">
            <div className="col-md-7">
              <div className="subscribe-content">
                <h3 className="mb-1">نیاز به کمک در {service.title} دارید؟</h3>
                <p>
                  با تیم متخصص ما تماس بگیرید و ببینید چگونه می‌توانیم کسب‌وکار شما را رشد دهیم.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="action-btn text-lg-right text-sm-left">
                <Link href="/contact" className="btn secondary-solid-btn">
                  تماس با ما
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
