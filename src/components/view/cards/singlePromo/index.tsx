"use client";

import Image from "next/image";

interface SinglePromoProps {
  promo: {
    id: string;
    icon: { src: string; alt: string; width: number; height: number };
    number: string;
    subtitle: string;
    title: string;
    description: string;
  };
}

export const SinglePromo = ({ promo }: SinglePromoProps) => {
  return (
    <div className="promo-single-wrap p-5 text-center border rounded">
      <div className="promo-icon mb-4">
        <Image
          src={promo.icon.src}
          alt={promo.icon.alt}
          width={promo.icon.width}
          height={promo.icon.height}
          aria-hidden="true"
        />
        <span className="number-bg">{promo.number}</span>
      </div>
      <div className="promo-info">
        <span className="color-secondary">{promo.subtitle}</span>
        <h3>{promo.title}</h3>
        <p>{promo.description}</p>
      </div>
    </div>
  );
};
