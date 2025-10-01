"use client";
import { PageHeaderSection } from "@/components/view";
import { ContactForm } from "./ContactForm";

export const ContactUs = () => {
  return (
    <main className="main">
      {/* Header Section */}
      <PageHeaderSection
        title="تماس با ما"
        backgroundImage="/img/header-bg-5.jpg"
        isRtl={true}
      />

      {/* Contact Form Section */}
      <section className="contact-us-section ptb-100" dir="rtl">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-5">
              <div className="contact-us-content">
                <h2>به دنبال یک ایده عالی برای کسب‌وکار هستید؟</h2>
                <p>
                  لطفاً اطلاعاتی درباره ایده کسب‌وکار خود ارائه دهید تا تیم ما در چند ساعت با شما تماس بگیرد.
                </p>
                <hr className="my-5" />
                <h5>دفتر مرکزی ما</h5>
                <span>
                  ایمیل:{" "}
                  <a href="mailto:contact@sadrasoft.com" className="link-color">
                    contact@sadrasoft.com
                  </a>
                </span>
                <br />
                <span>تلفن:  ۰۹۰۳۶۶۷۸۱۳۳</span>
                <address>آدرس:  مشهد بلوار کامیاب یین کامیاب ۳۰ و ۳۲</address>
              </div>
            </div>
            <div className="col-md-6">
              <div className="contact-us-form gray-light-bg rounded p-5">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="ptb-100">
        <div className="container">
          <div className="google-map">
            <iframe
              src="https://www.google.com/maps?q=36.303889,59.620974&hl=fa&z=16&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="موقعیت دفتر مرکزی"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
};
