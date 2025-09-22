"use client";

import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  link?: string;
  isActive?: boolean;
}

interface PageHeaderSectionProps {
  title: string;
  backgroundImage: string;
  breadcrumbItems: BreadcrumbItem[];
  isRtl?: boolean;
}

export const PageHeaderSection: React.FC<PageHeaderSectionProps> = ({
  title,
  backgroundImage,
  breadcrumbItems,
  isRtl = true,
}) => {
  return (
    <section
      className={`hero-section ptb-100 gradient-overlay ${
        isRtl ? "rtl" : "ltr"
      }`}
      style={{
        background: `url('${backgroundImage}') no-repeat center center / cover`,
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-7">
            <div className="page-header-content text-white text-center pt-sm-5 pt-md-5 pt-lg-0">
              <h1 className="text-white mb-0 position-relative">{title}</h1>
              <nav className="custom-breadcrumb" aria-label="مسیر ناوبری">
                <ol className="breadcrumb d-inline-block bg-transparent py-0">
                  {breadcrumbItems.map((item, index) => (
                    <li
                      key={index}
                      className={`list-inline-item breadcrumb-item ${
                        item.isActive ? "active" : ""
                      }`}
                      {...(item.isActive ? { "aria-current": "page" } : {})}
                    >
                      {item.link && !item.isActive ? (
                        <Link href={item.link}>{item.label}</Link>
                      ) : (
                        <span>{item.label}</span>
                      )}
                    </li>
                  ))}
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHeaderSection;
