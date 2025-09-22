import {
  ClientSliderSection,
  CTACircleProgressSection,
  TeamTwoSection,
} from "@/components/sections";
import { PageHeaderSection } from "@/components/view";
import { clientLogos } from "@/constants/clientSlider";
import { teamMembers } from "@/constants/teamTwo";

export const Team = () => {
  return (
    <div className="main">
      {/* <!--header section start--> */}
      <PageHeaderSection
        title="تیم دوم ما"
        backgroundImage="/img/header-bg-5.jpg"
        breadcrumbItems={[
          { label: "خانه", link: "/" },
          { label: "صفحات", link: "/pages" },
          { label: "تیم دوم ما", isActive: true },
        ]}
        isRtl={true}
      />

      {/* <!--team two section start--> */}
      <TeamTwoSection
        subtitle="تیم ما"
        title="با تیم حرفه‌ای ما آشنا شوید"
        description="تیم ما متشکل از متخصصان با تجربه در طراحی و توسعه وب است که با اشتیاق به خلق وب‌سایت‌های خلاقانه و کارآمد برای مشتریانمان می‌پردازند."
        members={teamMembers}
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
                  دریافت جهات
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
      {/* <!--client section end--> */}
    </div>
  );
};
