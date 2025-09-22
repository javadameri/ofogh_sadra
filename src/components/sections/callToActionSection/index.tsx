"use client";

import Image from "next/image";

export const CallToActionSection = () => {
  return (
    <section
      className="call-to-action ptb-70"
      style={{
        background: "url('img/cta-bg.jpg') no-repeat center center / cover",
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-9">
            <div className="section-heading text-center text-white mb-5">
              <h2 className="text-white">عملکرد سایت خود را بررسی کنید</h2>
              <p className="lead">
                در سطح جهانی سرمایه انسانی واحد متقاطع را اختراع می کند در حالی
                که کاتالیزورهای مجازی برای تغییر. قاطعانه روشهای دقیق
                توانمندسازی را به جای پیشرفتهای مشتری محور ، شبکه کنید.
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8">
            <div className="analysis-form-wrap text-center">
              <div className="row">
                <div className="col-lg-4 col-md-12 p-0">
                  <div className="form-group analysis-form-group">
                    <input
                      type="url"
                      name="url"
                      size={40}
                      className="form-control"
                      placeholder="آدرس وب سایت را تایپ کنید"
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 p-0">
                  <div className="form-group analysis-form-group analysis-form-border">
                    <input
                      type="email"
                      name="email"
                      size={40}
                      className="form-control"
                      placeholder="ایمیل شما"
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 p-0">
                  <div className="form-group">
                    <input
                      type="submit"
                      value="اکنون بررسی کنید"
                      className="btn btn-primary"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cta-image d-none d-lg-block d-md-block">
        <Image
          src={"/img/cta-1-man.svg"}
          width={200}
          height={200}
          className="img-left"
          alt="cta"
        />
        <Image
          src={"/img/cta-1-mike.svg"}
          width={200}
          height={200}
          className="img-right"
          alt="cta"
        />
      </div>
    </section>
  );
};
