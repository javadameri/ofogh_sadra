"use client"
import { serviceItems } from "@/constants/serviceItems";
import { processStepList } from "@/constants/processStepList";
import { outstandingTabs } from "@/constants/outstandingTabs";
import { portfolioFilters, portfolios } from "@/constants/ourPortfolios";
import { pricingPacks } from "@/constants/pricingPacks";
import { testimonials } from "@/constants/testimonials";
import { blogs } from "@/constants/ourBlogs";
import { teamMembers } from "@/constants/teamTwo";
import {
  AboutUsSection,
  CallToUsSection,
  HeroSection,
  OurBlogSection,
  OurPortfolioSection,
  OutstandingSection,
  PricingSection,
  Promo2Section,
  ServicesSection,
  TeamTwoSection,
  TestimonialSection,
  WhyChoseUsSection,
  WorkProcessSection,
} from "@/components/sections";
import { promos2 } from "@/constants/promo2items";

export const HomePage = () => {
  return (
    <main className="main">
      <HeroSection
        subtitle="طراحی و توسعه وب"
        title="کسب‌وکار خود را با وب‌سایت حرفه‌ای ارتقا دهید"
        description="ما وب‌سایت‌هایی خلاقانه، کاربرپسند و بهینه‌سازی‌شده برای موتورهای جستجو طراحی می‌کنیم که به رشد کسب‌وکار شما کمک می‌کند."
        ctaText="همین حالا شروع کنید"
        ctaLink="/contact"
        src="/img/t1-hero-img.svg"
      />
      {promos2.length > 0 ? (
        <Promo2Section promos={promos2} />
      ) : (
        <div className="container text-center py-5">
          <p className="lead">محتوای تبلیغاتی یافت نشد.</p>
        </div>
      )}
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
      {serviceItems.length > 0 ? (
        <ServicesSection
          services={serviceItems}
          subtitle="خدمات ما"
          title="خدمات حرفه‌ای برای رشد کسب‌وکار شما"
          description="ما با ارائه خدماتی متنوع در زمینه طراحی و توسعه وب، به شما کمک می‌کنیم تا حضوری قدرتمند در دنیای دیجیتال داشته باشید."
        />
      ) : (
        <div className="container text-center py-5">
          <p className="lead">خدماتی یافت نشد.</p>
        </div>
      )}
      <WhyChoseUsSection
        subtitle="چرا ما را انتخاب کنید"
        title="چرا ما بهترین انتخاب برای طراحی وب شما هستیم"
        description="ما با تخصص در طراحی و توسعه وب، راه‌حل‌هایی ارائه می‌دهیم که نه تنها زیبا هستند، بلکه عملکردی و بهینه برای موتورهای جستجو. تعهد ما به کیفیت و پشتیبانی بی‌نظیر است."
        skills={[
          { title: "تخصص در طراحی وب", percentage: 90 },
          { title: "بهینه‌سازی سئو", percentage: 85 },
          { title: "توسعه سفارشی", percentage: 80 },
          { title: "پشتیبانی مشتریان", percentage: 95 },
        ]}
        image={{
          src: "/img/why-choose-us.png",
          alt: "دلایل انتخاب ما",
          width: 580,
          height: 580,
        }}
      />
      {processStepList.length > 0 ? (
        <WorkProcessSection
          subtitle="فرآیند کار"
          title="مراحل طراحی و توسعه وب‌سایت حرفه‌ای"
          description="ما با یک فرآیند ساختاریافته و شفاف، وب‌سایت‌هایی خلاقانه و کارآمد برای شما طراحی و توسعه می‌دهیم که نیازهای کسب‌وکارتان را برآورده کند."
          processes={processStepList}
        />
      ) : (
        <div className="container text-center py-5">
          <p className="lead">فرآیندی یافت نشد.</p>
        </div>
      )}
      {outstandingTabs.length > 0 ? (
        <OutstandingSection
          subtitle="تخصص ما"
          title="خدمات تخصصی ما برای موفقیت دیجیتال شما"
          description="ما با ارائه خدمات متنوع و حرفه‌ای در زمینه طراحی و توسعه وب، به شما کمک می‌کنیم تا در دنیای دیجیتال بدرخشید."
          tabs={outstandingTabs}
        />
      ) : (
        <div className="container text-center py-5">
          <p className="lead">خدمات تخصصی یافت نشد.</p>
        </div>
      )}
      {portfolios.length > 0 ? (
        <OurPortfolioSection
          subtitle="نمونه‌کارهای ما"
          title="پروژه‌های موفق ما را کاوش کنید"
          description="ما افتخار می‌کنیم که پروژه‌های متنوعی را برای مشتریان مختلف با موفقیت به انجام رسانده‌ایم. نمونه‌کارهای ما شامل وب‌سایت‌های خلاقانه و کارآمد است."
          filters={portfolioFilters}
          portfolios={portfolios}
        />
      ) : (
        <div className="container text-center py-5">
          <p className="lead">نمونه‌کاری یافت نشد.</p>
        </div>
      )}
      {pricingPacks.length > 0 ? (
        <PricingSection
          subtitle="پلن‌های قیمت‌گذاری"
          title="بسته‌های مقرون‌به‌صرفه برای نیازهای شما"
          description="ما بسته‌های قیمت‌گذاری متنوعی ارائه می‌دهیم که برای کسب‌وکارهای کوچک تا بزرگ مناسب است. هر بسته شامل خدمات حرفه‌ای طراحی و توسعه وب است."
          pricingPacks={pricingPacks}
          supportCta={{
            title: "ما برای کمک به شما اینجا هستیم",
            chatLink: "/chat",
            emailLink: "mailto:support@example.com",
          }}
        />
      ) : (
        <div className="container text-center py-5">
          <p className="lead">پلن قیمتی یافت نشد.</p>
        </div>
      )}
      {testimonials.length > 0 ? (
        <TestimonialSection
          title="نظرات مشتریان ما"
          description="مشتریان ما از تجربه همکاری با تیم حرفه‌ای ما در طراحی و توسعه وب‌سایت‌هایشان رضایت کامل دارند. نظرات آن‌ها گواهی بر تعهد ما به کیفیت است."
          testimonials={testimonials}
          backgroundImage="/img/testimonial-bg.png"
          arrowImages={{
            top: {
              src: "/img/testimonial-arrow-top.png",
              alt: "فلش بالای اسلایدر نظرات",
              width: 92,
              height: 92,
            },
            bottom: {
              src: "/img/testimonial-arrow-bottom.png",
              alt: "فلش پایین اسلایدر نظرات",
              width: 35,
              height: 35,
            },
          }}
        />
      ) : (
        <div className="container text-center py-5">
          <p className="lead">نظری یافت نشد.</p>
        </div>
      )}
      {blogs.length > 0 ? (
        <OurBlogSection
          subtitle="وبلاگ ما"
          title="جدیدترین مقالات و نکات طراحی وب"
          description="با آخرین روندها و نکات در زمینه طراحی و توسعه وب آشنا شوید. مقالات ما به شما کمک می‌کنند تا بهترین تصمیم‌ها را برای حضور دیجیتال خود بگیرید."
          posts={blogs}
        />
      ) : (
        <div className="container text-center py-5">
          <p className="lead">پستی یافت نشد.</p>
        </div>
      )}
      {teamMembers.length > 0 ? (
        <TeamTwoSection
          subtitle="تیم ما"
          title="با تیم حرفه‌ای ما آشنا شوید"
          description="تیم ما متشکل از متخصصان با تجربه در طراحی و توسعه وب است که با اشتیاق به خلق وب‌سایت‌های خلاقانه و کارآمد برای مشتریانمان می‌پردازند."
          members={teamMembers}
        />
      ) : (
        <div className="container text-center py-5">
          <p className="lead">عضوی یافت نشد.</p>
        </div>
      )}
      <CallToUsSection />
    </main>
  );
};
