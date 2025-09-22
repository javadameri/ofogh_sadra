"use client";

import Image from "next/image";
import Link from "next/link";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  src: string;
}

export const HeroSection = ({
  title,
  subtitle,
  description,
  ctaText,
  ctaLink,
  src,
}: HeroSectionProps) => {
  return (
    <section className="py-5 gradient-bg">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-5">
            <div className="hero-slider-content text-white pt-5">
              <strong>{subtitle}</strong>
              <h1 className="text-white">{title}</h1>
              <p className="lead">{description}</p>

              <div className="mt-3">
                <Link href={ctaLink} className="btn secondary-solid-btn">
                  {ctaText}
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-7">
            <div className="pt-5 ms-3">
              <Image
                width={650}
                height={500}
                src={src}
                className="img-fluid custom-width"
                alt={title}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
