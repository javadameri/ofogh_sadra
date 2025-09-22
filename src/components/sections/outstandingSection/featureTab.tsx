"use client";

import Image from "next/image";
import Link from "next/link";
import { IconCaretLeft } from "@tabler/icons-react";
import { ServiceSingle } from "@/components/view";

interface FeatureItem {
  text: string;
}

interface ServiceCard {
  icon: any;
  title: string;
  description: string;
  link: string;
}

interface FeatureTabProps {
  id: string;
  icon: any;
  title: string;
  description?: string[];
  features?: FeatureItem[];
  serviceCards?: ServiceCard[];
  image?: { src: string; alt: string; width: number; height: number };
  ctaPrimary?: { text: string; link: string };
  ctaSecondary?: { text: string; link: string };
  isActive?: boolean;
}

export const FeatureTab = ({
  id,
  icon: Icon,
  title,
  description,
  features,
  serviceCards,
  image,
  ctaPrimary,
  ctaSecondary,
  isActive = false,
}: FeatureTabProps) => {
  return (
    <div className={`tab-pane mt-5 ${isActive ? "active" : ""}`} id={id}>
      {serviceCards ? (
        <div className="row">
          {serviceCards.map((card, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-sm-6">
              <ServiceSingle
                icon={card.icon}
                title={card.title}
                description={card.description}
                link={card.link}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6">
            {image && (
              <div className="image-wrap">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  className="img-fluid m-auto rounded shadow-sm"
                />
              </div>
            )}
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="content-wrap">
              <h3>{title}</h3>
              {description?.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
              {features && (
                <ul className="list-unstyled tech-feature-list">
                  {features.map((feature, index) => (
                    <li key={index} className="py-1">
                      <span className="ti-control-forward me-2 color-secondary">
                        <IconCaretLeft />
                      </span>
                      {feature.text}
                    </li>
                  ))}
                </ul>
              )}
              {(ctaPrimary || ctaSecondary) && (
                <div className="action-btns mt-4">
                  {ctaPrimary && (
                    <Link
                      href={ctaPrimary.link}
                      className="btn secondary-solid-btn me-3"
                    >
                      {ctaPrimary.text}
                    </Link>
                  )}
                  {ctaSecondary && (
                    <Link
                      href={ctaSecondary.link}
                      className="btn secondary-outline-btn"
                    >
                      {ctaSecondary.text}
                    </Link>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
