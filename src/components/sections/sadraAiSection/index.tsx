"use client";

import Link from "next/link";

export default function SadraAiSection() {
  return (
    <section className="services-section pt-100 gray-light-bg" dir="rtl">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="section-heading text-center mb-5">
              <h3>خدمات هوش مصنوعی</h3>
              <span className="animate-border mx-auto mb-4"></span>

              <p className="lead mb-2 text-start">
                این سرویس به سازمان‌ها و ارگان‌ها این امکان را می‌دهد که بدون
                نیاز به ارتباط با سرورهای خارجی، از
                <strong> توان هوش مصنوعی مدرن</strong> به‌صورت کاملاً{" "}
                <strong>لوکال، امن و درون‌سازمانی</strong> بهره‌مند شوند.
                <br />
                ما با پیاده‌سازی مدل‌های زبانی و تحلیلی پیشرفته در زیرساخت‌های
                داخلی شما، تجربه‌ای مشابه ChatGPT اما با امنیت و کنترل کامل
                ارائه می‌دهیم.
              </p>
              <p className="lead mb-2 text-start">
                این سرویس می‌تواند در پاسخ‌گویی هوشمند، تحلیل داده‌ها، جستجوی
                داخلی و چت درون‌سازمانی مورد استفاده قرار گیرد.
              </p>

              <div className="mt-4">
                <a
                  href="https://sadra-ai.ir/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn secondary-solid-btn btn-lg shadow-sm"
                >
                  مشاهده وب‌سایت
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
