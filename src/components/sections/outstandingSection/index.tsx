"use client";

import { useState } from "react";
import { FeatureTab } from "./featureTab";

interface FeatureItem {
  text: string;
}

interface ServiceCard {
  icon: any;
  title: string;
  description: string;
  link: string;
}

interface Tab {
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

interface OutstandingSectionProps {
  subtitle: string;
  title: string;
  description: string;
  tabs: Tab[];
}

export const OutstandingSection = ({
  subtitle,
  title,
  description,
  tabs,
}: OutstandingSectionProps) => {
  const [activeTab, setActiveTab] = useState(
    tabs.find((tab) => tab.isActive)?.id || tabs[0].id
  );

  return (
    <section className="outstanding-section ptb-100 gray-light-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-9 col-lg-8">
            <div className="section-heading text-center mb-1">
              <strong className="color-secondary">{subtitle}</strong>
              <h2>{title}</h2>
              <span className="animate-border mx-auto mb-4"></span>
              <p className="lead">{description}</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-lg-12">
            <div className="feature-tabs-wrap">
              <ul
                className="nav nav-tabs border-bottom-0 feature-tabs feature-tabs-center d-flex justify-content-center"
                role="tablist"
              >
                {tabs.map((tab, index) => (
                  <li key={index} className="nav-item">
                    <button
                      className={`nav-link text-center ${
                        activeTab === tab.id ? "active" : ""
                      }`}
                      onClick={() => setActiveTab(tab.id)}
                      type="button"
                      role="tab"
                      aria-controls={tab.id}
                      aria-selected={activeTab === tab.id}
                    >
                      <span className="icon-sm">
                        <tab.icon />
                      </span>
                      <h6 className="mb-0">{tab.title}</h6>
                    </button>
                  </li>
                ))}
              </ul>
              <div className="tab-content feature-tab-content">
                {tabs.map((tab, index) => (
                  <FeatureTab
                    key={index}
                    id={tab.id}
                    icon={tab.icon}
                    title={tab.title}
                    description={tab.description}
                    features={tab.features}
                    serviceCards={tab.serviceCards}
                    image={tab.image}
                    ctaPrimary={tab.ctaPrimary}
                    ctaSecondary={tab.ctaSecondary}
                    isActive={activeTab === tab.id}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
