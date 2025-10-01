"use client";

import { IconArrowLeft } from "@tabler/icons-react";
import Link from "next/link";

interface ServiceSingleProps {
  icon: any;
  title: string;
  description: string;
  link: string;
}

export const Service2Single = ({
  icon: Icon,
  title,
  description,
  link,
}: ServiceSingleProps) => {
  return (
    <div className="services-single p-5 h-100 my-sm-0 shadow-sm rounded white-bg">
      <span className="ti-announcement icon-lg color-primary d-block mb-4">
        {" "}
        <Icon size={50} />
      </span>
      <h5 className="">{title}</h5>
      <p className="">{description}</p>
      {/* <Link href={link} target="_blank" className="detail-link mt-4">
        بیشتر بخوانید{" "}
        <span>
          <IconArrowLeft size={18} />
        </span>
      </Link> */}
    </div>
  );
};
