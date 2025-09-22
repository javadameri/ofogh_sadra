"use client";

import { Portfolio } from "@/components/view";
import { useState } from "react";

interface PortfolioItem {
  id: string;
  title: string;
  subtitle: string;
  categories: string;
  filterCategories: string[]; // برای فیلتر کردن (مثل ['web-design', 'ecommerce'])
  image: { src: string; alt: string; width: number; height: number };
  link: string;
}

interface Filter {
  label: string;
  value: string;
}

interface OurPortfolioSectionProps {
  subtitle: string;
  title: string;
  description: string;
  filters: Filter[];
  portfolios: PortfolioItem[];
}

export const OurPortfolioSection = ({
  subtitle,
  title,
  description,
  filters,
  portfolios,
}: OurPortfolioSectionProps) => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredPortfolios =
    activeFilter === "all"
      ? portfolios
      : portfolios.filter((portfolio) =>
          portfolio.filterCategories.includes(activeFilter)
        );

  return (
    <section className="our-portfolio-section ptb-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-heading text-center mb-4">
              <strong className="color-secondary">{subtitle}</strong>
              <h2>{title}</h2>
              <span className="animate-border mx-auto mb-4"></span>
              <p className="lead">{description}</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="text-center pb-2">
              {filters.map((filter, index) => (
                <button
                  key={index}
                  type="button"
                  className={`filter-btn ${
                    activeFilter === filter.value ? "active" : ""
                  }`}
                  onClick={() => setActiveFilter(filter.value)}
                  aria-pressed={activeFilter === filter.value}
                >
                  {filter.label}
                </button>
              ))}
            </div>
            <div className="portfolio-container" id="PortfolioContainer">
              {filteredPortfolios.map((portfolio) => (
                <div
                  key={portfolio.id}
                  className={`mix portfolio-item ${portfolio.filterCategories.join(
                    " "
                  )}`}
                  data-ref="portfolio-target"
                >
                  <Portfolio
                    title={portfolio.title}
                    subtitle={portfolio.subtitle}
                    categories={portfolio.categories}
                    image={portfolio.image}
                    link={portfolio.link}
                  />
                </div>
              ))}
              <div className="gap"></div>
              <div className="gap"></div>
              <div className="gap"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
