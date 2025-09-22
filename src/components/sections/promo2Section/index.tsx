"use client";

import { SinglePromo2 } from "@/components/view";

interface Promo2Item {
  icon: any; // به دلیل محدودیت تایپ در Tabler Icons، از any استفاده شد
  title: string;
  description: string;
  link: string;
}

interface Promo2SectionProps {
  promos: Promo2Item[];
}
export const Promo2Section = ({ promos }: Promo2SectionProps) => {
  return (
    <section className="promo-section py-5">
      <div className="container">
        <div className="row">
          {promos.map((item, index) => (
            <div key={index} className="col-md-4 mb-4">
              <SinglePromo2
                icon={item.icon}
                title={item.title}
                description={item.description}
                link={item.link}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
