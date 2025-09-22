"use client";

import { IconQuoteFilled } from "@tabler/icons-react";
import Image from "next/image";

interface TestimonialQuoteProps {
  author: {
    name: string;
    role: string;
    image: { src: string; alt: string; width: number; height: number };
  };
  quote: string;
}

export const TestimonialQuote = ({ author, quote }: TestimonialQuoteProps) => {
  return (
    <div className="testimonial-quote-wrap">
      <div className="media author-info mb-3">
        <div className="author-img me-3">
          <Image
            width={author.image.width}
            height={author.image.height}
            src={author.image.src}
            alt={author.image.alt}
            className="img-fluid"
          />
        </div>
        <div className="media-body text-white">
          <h5 className="mb-0 text-white">{author.name}</h5>
          <span>{author.role}</span>
        </div>
        <span className="icon-md text-white">
          <IconQuoteFilled size={40} />
        </span>
      </div>
      <div className="client-say text-white">
        <p>{quote}</p>
      </div>
    </div>
  );
};