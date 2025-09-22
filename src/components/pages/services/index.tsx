"use client";
import { ClientSliderSection, CTACircleProgressSection, PromoSection, Services2Section } from "@/components/sections";
import { PageHeaderSection } from "@/components/view";
import { clientLogos } from "@/constants/clientSlider";
import { promos } from "@/constants/promoitems";
import { service2Items } from "@/constants/serviceItems";
import Image from "next/image";

export const Services = () => {
  return (
    <main className="main">
      {/* <!--header section start--> */}
      <PageHeaderSection
        title="خدمات ما"
        backgroundImage="/img/header-bg-5.jpg"
        breadcrumbItems={[
          { label: "خانه", link: "/" },
          { label: "صفحات", link: "/pages" },
          { label: "خدمات ما", isActive: true },
        ]}
        isRtl={true}
      />
      {/* <!--header section end--> */}

      {/* <!--promo section start--> */}
      <PromoSection promos={promos} />
      {/* <!--promo section end--> */}

      {/* <!--services section start--> */}
      <Services2Section
        services={service2Items}
        subtitle={"خدمات ما"}
        title={"خدمات حرفه‌ای برای رشد کسب‌وکار شما"}
        description={
          "ما با ارائه خدماتی متنوع در زمینه طراحی و توسعه وب، به شما کمک می‌کنیم تا حضوری قدرتمند در دنیای دیجیتال داشته باشید."
        }
      />
      {/* <!--services section end--> */}

      {/* <!--call to action progressbar start--> */}
      <CTACircleProgressSection
        backgroundImage="/img/ctg-bg-2.jpg"
        stats={[
          {
            percent: 70,
            label: "خدمات ما",
            description: "نتایج کلمات کلیدی",
          },
          {
            percent: 75,
            label: "خدمات ما",
            description: "تجزیه و تحلیل ترافیک گوگل",
          },
          {
            percent: 80,
            label: "خدمات ما",
            description: "معیارهای رقابت",
          },
          {
            percent: 65,
            label: "خدمات ما",
            description: "بازاریابی سئو",
          },
        ]}
      />
      {/* <!--call to action progressbar end--> */}

      {/* <!--contact us section start--> */}
      <section className="contact-us-section ptb-100">
        <div className="container">
          <div className="row justify-content-around">
            <div className="col-md-6">
              <div className="contact-us-form gray-light-bg rounded p-5">
                <h4>برای شروع آماده هستید؟</h4>
                <form
                  action="#"
                  method="POST"
                  id="contactForm1"
                  className="contact-us-form"
                >
                  <div className="form-row">
                    <div className="col-12">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          placeholder="نام را وارد کنید"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          placeholder="ایمیل را وارد کنید"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <textarea
                          name="message"
                          id="message"
                          className="form-control"
                          rows={7}
                          cols={25}
                          placeholder="پیام"
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-sm-12 mt-3">
                      <button
                        type="submit"
                        className="btn secondary-solid-btn"
                        id="btnContactUs"
                      >
                        پیام فرستادن
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-5">
              <div className="contact-us-content">
                <h2>آیا به دنبال یک ایده عالی برای تجارت هستید؟</h2>
                <p className="lead">
                  یکپارچه ارائه خدمات الکترونیکی همه گیر و ابتکارات نسل بعدی.
                </p>
                <a href="#" className="btn outline-btn align-items-center">
                  دریافت جهات <span className="ti-arrow-right pl-2"></span>
                </a>
                <hr className="my-5" />
                <h5>دفتر مرکزی ما</h5>
                <address>تهران ونک خیابان بهار</address>
                <br />
                <span>تلفن: 021535345345 </span> <br />
                <span>
                  ایمیل:{" "}
                  <a href="mailto:email@yourdomain.com" className="link-color">
                    email@yourdomain.com
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--contact us section end--> */}

      {/* <!--client section start--> */}
      <ClientSliderSection
        backgroundImage="/img/client-bg.jpg"
        title="مشتریان ما گواه کیفیت خدمات ماست"
        description="ما افتخار می‌کنیم که با برندهای معتبر همکاری کرده‌ایم و وب‌سایت‌هایی خلاقانه و کارآمد برای آن‌ها طراحی کرده‌ایم."
        clientLogos={clientLogos}
      />
      {/* <!--client section end--></div> */}
    </main>
  );
};
