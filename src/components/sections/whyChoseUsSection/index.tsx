"use client";

import Image from "next/image";
import { ProgressItem } from "./progressItem";
interface ProgressSkill {
  title: string;
  percentage: number;
}

interface WhyChoseUsSectionProps {
  subtitle: string;
  title: string;
  description: string;
  skills: ProgressSkill[];
  image: { src: string; alt: string; width: number; height: number };
}

export const WhyChoseUsSection = ({
  subtitle,
  title,
  description,
  skills,
  image,
}: WhyChoseUsSectionProps) => {
  return (
    <section className="why-choose-us ptb-100">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-md-6 col-lg-5">
            <div className="why-choose-us-wrap">
              <strong className="color-secondary">{subtitle}</strong>
              <h3>{title}</h3>
              <span className="animate-border mb-4"></span>
              <p>{description}</p>
              <div className="skill-content-wrap">
                {skills.map((skill, index) => (
                  <ProgressItem
                    key={index}
                    title={skill.title}
                    percentage={skill.percentage}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6">
            <div className="image-wrap">
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};