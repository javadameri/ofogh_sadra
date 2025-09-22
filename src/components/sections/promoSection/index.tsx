"use client";

import { SinglePromo } from "@/components/view";

interface PromoItem {
  id: string;
  icon: { src: string; alt: string; width: number; height: number };
  number: string;
  subtitle: string;
  title: string;
  description: string;
}

interface PromoSectionProps {
  promos: PromoItem[];
}

export const PromoSection = ({ promos }: PromoSectionProps) => {
  return (
    <section className="promo-section pt-100">
      <div className="container">
        <div className="row justify-content-center">
          {promos.map((promo) => (
            <div key={promo.id} className="col-md-6 col-lg-4 col-sm-6">
              <SinglePromo promo={promo} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
