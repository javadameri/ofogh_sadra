"use client";

import { SinglePricingPack } from "@/components/view";
import { useState } from "react";

interface PricingFeature {
  text: string;
  highlight?: string;
}

interface PricingPack {
  image: { src: string; alt: string; width: number; height: number };
  title: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: PricingFeature[];
  cta: { text: string; link: string };
}

interface PricingSectionProps {
  subtitle: string;
  title: string;
  description: string;
  pricingPacks: PricingPack[];
  supportCta: { title: string; chatLink: string; emailLink: string };
}

export const PricingSection = ({
  subtitle,
  title,
  description,
  pricingPacks,
  supportCta,
}: PricingSectionProps) => {
  const [isBillingYearly, setIsBillingYearly] = useState(false);

  return (
    <section className="pricing-section ptb-100 gray-light-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-9 col-lg-8">
            <div className="section-heading text-center mb-5">
              <strong className="color-secondary">{subtitle}</strong>
              <h2>{title}</h2>
              <span className="animate-border mx-auto mb-4"></span>
              <p className="lead">{description}</p>
            </div>
          </div>
        </div>
        <div className="row align-items-center justify-content-between">
          <div className="col-12">
            <div className="switch-wrap text-center mb-5">
              <label
                className="form-switch"
                aria-label="تغییر بین قیمت‌گذاری ماهانه و سالانه"
              >
                <span
                  className={`beforeinput year-switch ${
                    !isBillingYearly ? "text-success" : ""
                  }`}
                >
                  ماهانه
                </span>
                <input
                  type="checkbox"
                  id="js-contcheckbox"
                  checked={isBillingYearly}
                  onChange={() => setIsBillingYearly(!isBillingYearly)}
                />
                <span className="switch-icon gray-light-bg"></span>
                <span
                  className={`afterinput year-switch ${
                    isBillingYearly ? "text-success" : ""
                  }`}
                >
                  سالانه
                </span>
              </label>
            </div>
          </div>
          {pricingPacks.map((pack, index) => (
            <div key={index} className="col-lg-4 col-md-4 col-12">
              <SinglePricingPack
                image={pack.image}
                title={pack.title}
                monthlyPrice={pack.monthlyPrice}
                yearlyPrice={pack.yearlyPrice}
                features={pack.features}
                cta={pack.cta}
                isBillingYearly={isBillingYearly}
              />
            </div>
          ))}
          <div className="col-12">
            <div className="support-cta text-center mt-5">
              <h5 className="mb-1">
                <span className="ti-headphone-alt color-primary me-3"></span>
                {supportCta.title}
              </h5>
              <p>
                سؤال دارید؟{" "}
                <a href={supportCta.chatLink}>اکنون با ما گپ بزنید</a> یا{" "}
                <a href={supportCta.emailLink}>
                  برای ارتباط با ما ایمیل بفرستید
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
