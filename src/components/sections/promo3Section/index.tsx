"use client";

import { SinglePromo3 } from "@/components/view";

interface Promo3Item {
  icon: any; // به دلیل محدودیت تایپ در Tabler Icons، از any استفاده شد
  title: string;
  subtitle: string;
}

interface Promo3SectionProps {
  promos: Promo3Item[];
}
export const Promo3Section = ({ promos }: Promo3SectionProps) => {
  return (
    <section className="contact-us-promo pt-100">
      <div className="container">
        <div className="row">
          {promos.map((item, index) => (
            <div key={index} className="col-lg-3 col-md-6 col-sm-6">
              <SinglePromo3
                icon={item.icon}
                title={item.title}
                subtitle={item.subtitle}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
