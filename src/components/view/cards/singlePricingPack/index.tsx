"use client";

import Image from "next/image";
import Link from "next/link";

interface PricingFeature {
  text: string;
  highlight?: string; // برای برجسته کردن بخشی از متن (اختیاری)
}

interface SinglePricingPackProps {
  image: { src: string; alt: string; width: number; height: number };
  title: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: PricingFeature[];
  cta: { text: string; link: string };
  isBillingYearly: boolean; // برای تعیین حالت قیمت‌گذاری
}

export const SinglePricingPack = ({
  image,
  title,
  monthlyPrice,
  yearlyPrice,
  features,
  cta,
  isBillingYearly,
}: SinglePricingPackProps) => {
  const formatPrice = (price: number) =>
    new Intl.NumberFormat("fa-IR", {
      style: "currency",
      currency: "IRR",
    }).format(price);

  return (
    <div className="card text-center single-pricing-pack">
      <div className="price-img pt-5">
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          className="img-fluid"
        />
      </div>
      <div className="card-header py-4 border-0 pricing-header">
        <div
          className={`price text-center mb-0 ${
            isBillingYearly ? "yearly-price" : "monthly-price"
          }`}
        >
          {isBillingYearly
            ? formatPrice(yearlyPrice)
            : formatPrice(monthlyPrice)}
        </div>
      </div>
      <div className="price-name">
        <h5 className="mb-0">{title}</h5>
      </div>
      <div className="card-body">
        <ul className="list-unstyled mb-4 pricing-feature-list">
          {features.map((feature, index) => (
            <li key={index}>
              {feature.highlight ? (
                <>
                  {feature.text.replace(feature.highlight, "")}
                  <span>{feature.highlight}</span>
                </>
              ) : (
                feature.text
              )}
            </li>
          ))}
        </ul>
        <Link href={cta.link} className="btn outline-btn mb-3" target="_blank">
          {cta.text}
        </Link>
      </div>
    </div>
  );
};
