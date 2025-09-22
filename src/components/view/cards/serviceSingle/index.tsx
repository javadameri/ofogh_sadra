"use client";

import { IconArrowLeft } from "@tabler/icons-react";
import Link from "next/link";

interface ServiceSingleProps {
  icon: any;
  title: string;
  description: string;
  link: string;
}

export const ServiceSingle = ({
  icon: Icon,
  title,
  description,
  link,
}: ServiceSingleProps) => {
  return (
    <div className="services-single text-center p-5 my-md-3 my-lg-3 my-sm-0 shadow-sm white-bg rounded">
      <span className="icon-lg color-secondary d-block mb-4">
        <Icon size={50} />
      </span>
      <h5 className="service-title">{title}</h5>
      <p className="service-description mb-0">{description}</p>
      <Link href={link} className="detail-link mt-4">
        بیشتر بخوانید{" "}
        <span>
          <IconArrowLeft size={18} />
        </span>
      </Link>
    </div>
  );
};
