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
      {/* بخش هدر */}
      <PageHeaderSection
        title="تیم ما"
        backgroundImage="/img/header-bg-5.jpg"
        isRtl={true} // راست‌چین
      />

      {/* بخش تیم */}
      <TeamTwoSection
        subtitle="با تیم ما آشنا شوید"
        title="تیم حرفه‌ای ما را بشناسید"
        description="تیم ما متشکل از متخصصین باتجربه در طراحی و توسعه وب است که با اشتیاق وب‌سایت‌های خلاقانه و کارآمد برای مشتریان ایجاد می‌کنند."
        members={teamMembers}
      />

      {/* بخش call to action با نمودار پیشرفت */}
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
            label: "سئو حرفه‌ای",
          },
          {
            percent: 80,
            description: "توسعه اختصاصی",
            label: "توسعه وب",
          },
          {
            percent: 95,
            description: "پشتیبانی مستمر",
            label: "پشتیبانی ۲۴/۷",
          },
        ]}
      />

      {/* بخش تماس با ما */}
      <section className="contact-us-section ptb-100">
        <div className="container">
          <div className="row justify-content-around">
            <div className="col-md-6">
              <div className="contact-us-form gray-light-bg rounded p-5">
                <h4>آماده شروع هستید؟</h4>
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
                          placeholder="نام خود را وارد کنید"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          placeholder="ایمیل خود را وارد کنید"
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
                          placeholder="پیام شما"
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-sm-12 mt-3">
                      <button
                        type="submit"
                        className="btn secondary-solid-btn"
                        id="btnContactUs"
                      >
                        ارسال پیام
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-5">
              <div className="contact-us-content">
                <h2>به دنبال یک ایده کسب‌وکار عالی هستید؟</h2>
                <p className="lead">
                  خدمات دیجیتال یکپارچه و پروژه‌های نسل بعدی.
                </p>
                <a href="#" className="btn outline-btn align-items-center">
                  مسیر دسترسی
                </a>
                <hr className="my-5" />
                <h5>دفتر مرکزی ما</h5>
                <address>تهران، ونک، خیابان بهار</address>
                <br />
                <span>تلفن: ۰۲۱۵۳۵۳۴۵۳۴۵ </span> <br />
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

      {/* بخش مشتریان */}
      <ClientSliderSection
        backgroundImage="/img/client-bg.jpg"
        title="مشتریان ما کیفیت ما را تأیید می‌کنند"
        description="ما افتخار داریم با برندهای مطرح همکاری کرده و برای آن‌ها وب‌سایت‌های خلاقانه و کارآمد ایجاد کرده‌ایم."
        clientLogos={clientLogos}
      />
    </div>
  );
};
