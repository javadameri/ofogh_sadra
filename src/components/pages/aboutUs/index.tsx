import { processStepList } from "@/constants/processStepList";
import { teamMembers } from "@/constants/teamTwo";
import PageHeaderSection from "@/components/view/pageHeader";
import {
  AboutUsSection,
  ClientSliderSection,
  CTACircleProgressSection,
  PromoSection,
  TeamTwoSection,
  WorkProcessSection,
} from "@/components/sections";
import { promos } from "@/constants/promoitems";
import { clientLogos } from "@/constants/clientSlider";

export const AboutUs = () => {
  return (
    <main className="main">
      {/* <!--header section start--> */}
      <PageHeaderSection
        title="درباره ما"
        backgroundImage="/img/header-bg-5.jpg"
        breadcrumbItems={[
          { label: "خانه", link: "/" },
          { label: "صفحات", link: "/pages" },
          { label: "درباره ما", isActive: true },
        ]}
        isRtl={true}
      />

      {/* <!--promo section start--> */}
      <PromoSection promos={promos} />

      {/* <!--about us section start--> */}
      <AboutUsSection
        subtitle="درباره ما"
        title="ما شریک شما در خلق وب‌سایت‌های حرفه‌ای هستیم"
        description="تیم ما با سال‌ها تجربه در طراحی و توسعه وب، وب‌سایت‌هایی خلاقانه و کارآمد ارائه می‌دهد که به رشد کسب‌وکار شما کمک می‌کند."
        features={[
          { text: "طراحی وب‌سایت‌های", highlight: "کاربرپسند" },
          { text: "بهینه‌سازی حرفه‌ای", highlight: "سئو" },
          { text: "توسعه وب", highlight: "سفارشی" },
          { text: "پشتیبانی", highlight: "24/7" },
          { text: "تجربه کاربری", highlight: "بی‌نظیر" },
        ]}
        counters={[
          { count: 500, label: "پروژه‌های موفق" },
          { count: 1000, label: "مشتری راضی" },
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
        ctaPrimary={{ text: "اکنون شروع کنید", link: "/contact" }}
        ctaSecondary={{ text: "بیشتر بدانید", link: "/about" }}
      />

      {/* <!--work process section start--> */}
      <WorkProcessSection
        subtitle="فرآیند کار"
        title="مراحل طراحی و توسعه وب‌سایت حرفه‌ای"
        description="ما با یک فرآیند ساختاریافته و شفاف، وب‌سایت‌هایی خلاقانه و کارآمد برای شما طراحی و توسعه می‌دهیم که نیازهای کسب‌وکارتان را برآورده کند."
        processes={processStepList}
      />

      {/* <!--call to action progressbar start--> */}
      <CTACircleProgressSection
        backgroundImage="/img/ctg-bg-2.jpg"
        stats={[
          {
            percent: 90,
            description: "طراحی خلاقانه",
            label: "طراحی UI/UX",
          },
          {
            percent: 85,
            description: "بهینه‌سازی پیشرفته",
            label: "سئوی حرفه‌ای",
          },
          {
            percent: 80,
            description: "توسعه سفارشی",
            label: "توسعه وب",
          },
          {
            percent: 95,
            description: "پشتیبانی مداوم",
            label: "پشتیبانی 24/7",
          },
        ]}
      />

      {/* <!--team two section start--> */}
      <TeamTwoSection
        subtitle="تیم ما"
        title="با تیم حرفه‌ای ما آشنا شوید"
        description="تیم ما متشکل از متخصصان با تجربه در طراحی و توسعه وب است که با اشتیاق به خلق وب‌سایت‌های خلاقانه و کارآمد برای مشتریانمان می‌پردازند."
        members={teamMembers}
      />

      {/* <!--client section start--> */}
      <ClientSliderSection
        backgroundImage="/img/client-bg.jpg"
        title="مشتریان ما گواه کیفیت خدمات ماست"
        description="ما افتخار می‌کنیم که با برندهای معتبر همکاری کرده‌ایم و وب‌سایت‌هایی خلاقانه و کارآمد برای آن‌ها طراحی کرده‌ایم."
         clientLogos={clientLogos}
      />
    </main>
  );
};
