import { teamMembers } from "@/constants/teamTwo";
import PageHeaderSection from "@/components/view/pageHeader";
import { AboutUsSection, TeamTwoSection } from "@/components/sections";

export const AboutUs = () => {
  return (
    <main className="main">
      {/* بخش هدر */}
      <PageHeaderSection
        title="درباره ما"
        backgroundImage="/img/header-bg-5.jpg"
        isRtl={true} // راست‌چین
      />

      {/* بخش درباره ما */}
      <AboutUsSection
        subtitle="چرا ما متمایز هستیم:"
        title="شریک شما در توسعه حضور دیجیتال"
        description="شرکت افق صدرا در سال ۲۰۱۵ در شهر مشهد تأسیس شد و هدف آن ارائه راهکارهای وب و موبایل برای مشتریان محلی بود. در طول سال‌ها، فعالیت‌های ما گسترش یافت و اکنون از مشتریان بین‌المللی نیز پشتیبانی می‌کنیم."
        features={[
          { text: "وب‌سایتی کاربرپسند", highlight: "طراحی" },
          { text: "بهینه‌سازی حرفه‌ای", highlight: "سئو" },
          { text: "توسعه وب سفارشی", highlight: "سفارشی" },
          { text: "پشتیبانی ۲۴/۷", highlight: "پشتیبانی" },
          { text: "تجربه کاربری بی‌نظیر", highlight: "UX" },
        ]}
        counters={[
          { count: "۲۵+", label: "پروژه موفق" },
          { count: "۲۰+", label: "مشتریان راضی" },
          { count: 10, label: "سال تجربه" },
        ]}
        mainImage={{
          src: "/img/about-us-img.svg",
          alt: "تیم طراحی وب",
          width: 620,
          height: 680,
        }}
        bgImage={{
          src: "/img/about-us-img-bg.svg",
          alt: "پس‌زمینه درباره ما",
          width: 540,
          height: 670,
        }}
        ctaPrimary={{ text: "همین حالا شروع کنید", link: "/contact" }}
        ctaSecondary={{ text: "اطلاعات بیشتر", link: "/about" }}
      />

      {/* بخش تیم */}
      <TeamTwoSection
        subtitle="تیم ما"
        title="با تیم حرفه‌ای ما آشنا شوید"
        description="تیم ما متشکل از متخصصین باتجربه در طراحی و توسعه وب است که با اشتیاق وب‌سایت‌های خلاقانه و کارآمد برای مشتریان ایجاد می‌کنند."
        members={teamMembers}
      />
    </main>
  );
};
