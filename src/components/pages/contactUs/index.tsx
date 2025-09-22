"use client"
import { Promo3Section } from "@/components/sections";
import { PageHeaderSection } from "@/components/view";
import { contactPromo3Items } from "@/constants/promo3items";

export const ContactUs = () => {
  return (
    <main className="main">
      {/* <!--header section start--> */}
      <PageHeaderSection
        title="با ما تماس بگیرید"
        backgroundImage="/img/header-bg-5.jpg"
        breadcrumbItems={[
          { label: "خانه", link: "/" },
          { label: "صفحات", link: "/pages" },
          { label: "با ما تماس بگیرید", isActive: true },
        ]}
        isRtl={true}
      />

      {/* <!--contact us promo start--> */}
      <Promo3Section promos={contactPromo3Items} />
      {/* <!--contact us promo end--> */}

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

      {/* <!--google map block start--> */}
      <div className="google-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.83543450937!2d144.953735315922!3d-37.817323442021234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sbd!4v1571030260624!5m2!1sen!2sbd"
          height="450"
          style={{ border: "0" }}
          allowFullScreen
        ></iframe>
      </div>
      {/* <!--google map block end--></div> */}
    </main>
  );
};
