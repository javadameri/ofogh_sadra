"use client";

import Image from "next/image";
import Link from "next/link";

interface PortfolioProps {
  title: string;
  subtitle: string;
  categories: string;
  image: { src: string; alt: string; width: number; height: number };
  link: string;
}

export const Portfolio = ({
  title,
  subtitle,
  categories,
  image,
  link,
}: PortfolioProps) => {
  return (
    <div className="portfolio-wrapper">
      <Link href={link} target="_blank">
        <div className="content-overlay"></div>
        <Image
          width={image.width}
          height={image.height}
          className="img-fluid"
          src={image.src}
          alt={image.alt}
        />
        <div className="content-details fadeIn-bottom text-white">
          <h5 className="text-white mb-1">{title}</h5>
          <p>{subtitle}</p>
        </div>
      </Link>
      <div className="text-center p-4">
        <h5 className="mb-1">{title}</h5>
        <span>{categories}</span>
      </div>
    </div>
  );
};
