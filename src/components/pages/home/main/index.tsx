"use client";
import { clientLogos } from "@/constants/clientSlider";

import {
  ClientSliderSection,
  HeroSection,
  ServicesSectionHome,
} from "@/components/sections";
import SadraAiSection from "@/components/sections/sadraAiSection";

export const HomePage = () => {
  return (
    <main className="main" dir="rtl">
      <HeroSection
        subtitle="طراحی و توسعه وب"
        title="کسب‌وکار خود را با یک وب‌سایت حرفه‌ای متحول کنید"
        description="ما وب‌سایت‌هایی خلاقانه، کاربرپسند و بهینه‌سازی‌شده برای موتورهای جستجو طراحی می‌کنیم که به رشد کسب‌وکار شما کمک می‌کنند."
        ctaText="شروع کنید"
        ctaLink="/contact"
        src="/img/t1-hero-img.svg"
      />

      <ServicesSectionHome title={"همراه ما در مسیر رشد باشید"} />
      <SadraAiSection/>

      {/* <!--client section start--> */}
      <ClientSliderSection
        backgroundImage="/img/client-bg.jpg"
        title="مشتریان ما گویای کیفیت ما هستند"
        description="ما مفتخریم که با برندهای معتبر همکاری کرده‌ایم و برای آن‌ها وب‌سایت‌های خلاقانه و کارآمد طراحی کرده‌ایم."
        clientLogos={clientLogos}
      />
      {/* <!--client section end--> */}
    </main>
  );
};
