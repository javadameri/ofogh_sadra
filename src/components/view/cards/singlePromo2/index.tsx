"use client";

import Link from "next/link";

interface SinglePromoProps {
  icon: any;
  title: string;
  description: string;
  link: string;
}

export const SinglePromo2 = ({ icon: Icon, title, description, link }: SinglePromoProps) => {
  return (
    <Link href={link} className="text-decoration-none">
      <div className="single-promo-2 single-promo-hover rounded text-center bg-white p-5 h-100">
        <div className="circle-icon">
          <span className="text-white">
            <Icon size={24} />
          </span>
        </div>
        <h5 className="promo-title">{title}</h5>
        <p className="promo-description">{description}</p>
      </div>
    </Link>
  );
};