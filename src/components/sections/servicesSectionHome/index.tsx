"use client";

import Link from "next/link";

interface ServicesSectionHomeProps {
  title: string;
}

export const ServicesSectionHome = ({ title }: ServicesSectionHomeProps) => {
  return (
    <section className="services-section pt-100 gray-light-bg" dir="rtl">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="section-heading text-center mb-5">
              <h2>{title}</h2>
              <span className="animate-border mx-auto mb-4"></span>

              <p className="lead mb-2 text-start">
                ما می‌توانیم شریک مطمئن شما در مسیر تحول کسب‌وکار باشیم. در طول
                پروژه همواره در ارتباط با شما خواهیم بود تا نیازهای کسب‌وکار را
                بررسی کنیم و ایده‌ها و نمونه‌ها را با شما به اشتراک بگذاریم تا
                مطمئن شویم در مسیر درست قرار داریم.
              </p>

              <p className="lead mb-2 text-start">
                ما به روابط بلندمدت با مشتریان اعتقاد داریم و طیف گسترده‌ای از
                خدمات فناوری با استاندارد بالا ارائه می‌دهیم تا رضایت و اعتماد
                آن‌ها را جلب کنیم.
              </p>

              <p className="lead mb-2 text-start">
                اگر علاقه‌مند به برخی از خدمات ما هستید، لطفاً به بخش{" "}
                <Link href={"/services"}>خدمات</Link> مراجعه کنید.
              </p>

              <p className="lead mb-2 text-start">
                ما مفتخریم که با برندهای معتبر همکاری داشته‌ایم و برای آن‌ها وب‌سایت‌های
                خلاقانه و کارآمد طراحی کرده‌ایم.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
