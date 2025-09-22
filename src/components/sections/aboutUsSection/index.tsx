"use client";

import { IconCaretLeft } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { CounterItem } from "./counterItem";

interface Feature {
  text: string;
  highlight: string;
}

interface Counter {
  count: number;
  label: string;
}

interface AboutUsSectionProps {
  subtitle: string;
  title: string;
  description: string;
  features: Feature[];
  counters: Counter[];
  mainImage: { src: string; alt: string; width: number; height: number };
  bgImage: { src: string; alt: string; width: number; height: number };
  ctaPrimary: { text: string; link: string };
  ctaSecondary: { text: string; link: string };
}

export const AboutUsSection = ({
  subtitle,
  title,
  description,
  features,
  counters,
  mainImage,
  bgImage,
  ctaPrimary,
  ctaSecondary,
}: AboutUsSectionProps) => {
  return (
    <section className="about-us-section py-5 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="about-us-img position-relative">
              <Image
                src={mainImage.src}
                alt={mainImage.alt}
                width={mainImage.width}
                height={mainImage.height}
                className="img-fluid about-single-img"
              />
              <Image
                src={bgImage.src}
                alt={bgImage.alt}
                width={bgImage.width}
                height={bgImage.height}
                className="about-us-bg"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-us-content-wrap">
              <strong className="text-secondary">{subtitle}</strong>
              <h3>{title}</h3>
              <span className="animate-border mb-4"></span>
              <p>{description}</p>
              <ul className="list-unstyled tech-feature-list">
                {features.map((feature, index) => (
                  <li key={index} className="py-1">
                    <span className="ti-control-forward me-2 color-secondary">
                      <IconCaretLeft />
                    </span>
                    {feature.text} <strong>{feature.highlight}</strong>
                  </li>
                ))}
              </ul>
              <div className="row mt-4">
                {counters.map((counter, index) => (
                  <div key={index} className="col-4">
                    <CounterItem count={counter.count} label={counter.label} />
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <Link
                  href={ctaPrimary.link}
                  className="btn secondary-solid-btn me-3"
                >
                  {ctaPrimary.text}
                </Link>
                <Link
                  href={ctaSecondary.link}
                  className="btn secondary-outline-btn"
                >
                  {ctaSecondary.text}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
