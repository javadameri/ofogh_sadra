"use client";
import {
  Services2Section,
} from "@/components/sections";
import { PageHeaderSection } from "@/components/view";
import { service2Items } from "@/constants/serviceItems";

export const Services = () => {
  return (
    <main className="main">
      {/* بخش هدر */}
      <PageHeaderSection
        title="خدمات ما"
        backgroundImage="/img/header-bg-5.jpg"
        isRtl={true} // راست‌چین
      />
      {/* بخش هدر پایان */}

      {/* بخش خدمات */}
      <Services2Section
        services={service2Items}
        subtitle="خدمات ما"
        title="خدمات حرفه‌ای برای رشد کسب‌وکار شما"
        description="ما مجموعه‌ای از خدمات طراحی و توسعه وب ارائه می‌دهیم تا حضور قدرتمندی در دنیای دیجیتال داشته باشید."
      />
      {/* بخش خدمات پایان */}
    </main>
  );
};
