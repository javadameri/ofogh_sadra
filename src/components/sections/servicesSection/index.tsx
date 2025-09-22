"use client";

import { ServiceSingle } from "@/components/view";

interface ServiceItem {
  icon: any; // به دلیل محدودیت تایپ در Tabler Icons، از any استفاده شد
  title: string;
  description: string;
  link: string;
}

interface ServicesSectionProps {
  subtitle: string;
  title: string;
  description: string;
  services: ServiceItem[];
}

export const ServicesSection = ({
  subtitle,
  title,
  description,
  services,
}: ServicesSectionProps) => {
  return (
    <section className="services-section ptb-100 gray-light-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="section-heading text-center mb-5">
              <strong className="color-secondary">{subtitle}</strong>
              <h2>{title}</h2>
              <span className="animate-border mx-auto mb-4"></span>
              <p className="lead">{description}</p>
            </div>
          </div>
        </div>
        <div className="row">
          {services.map((service, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-sm-6">
              <ServiceSingle
                icon={service.icon}
                title={service.title}
                description={service.description}
                link={service.link}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
