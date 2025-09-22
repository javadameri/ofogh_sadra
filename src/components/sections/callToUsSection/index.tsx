"use client";

import Link from "next/link";

export const CallToUsSection = () => {
  return (
    <section className="call-to-action py-5 gray-light-bg">
      <div className="container">
        <div className="row justify-content-around align-items-center">
          <div className="col-md-7">
            <div className="subscribe-content">
              <h3 className="mb-1">مشاوره آژانس در زمینه تجارت شما</h3>
              <p>
                تجارت الکترونیکی کاملاً آزمایش شده و معماری مترقی را به سرعت
                درگیر کنید.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="action-btn text-lg-right text-sm-left">
              <Link href="#" className="btn secondary-solid-btn">
                تماس با ما
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
