import {
  IconBrandLinkedin,
  IconMapPin,
  IconMail,
  IconSend,
  IconBrandTelegram,
  IconBrandX,
  IconBrandGithub,
} from "@tabler/icons-react";
import Link from "next/link";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="footer-section">
      {/* Footer Top Start */}
      <div className="footer-top gradient-bg">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-9">
              <div className="row footer-top-wrap">
                <div className="col-md-4 col-sm-6">
                  <div className="footer-nav-wrap text-white">
                    <Image
                      src="/img/logo-white.png"
                      alt="داده پردازان افق آینده صدرا"
                      width={80}
                      height={80}
                      className="mb-2"
                    />
                    <p>
                      ما وب‌سایت‌هایی خلاقانه، کاربرپسند و بهینه‌سازی‌شده برای
                      موتورهای جستجو طراحی می‌کنیم که به رشد کسب‌وکار شما کمک
                      می‌کند.
                    </p>
                    <div className="social-nav mt-4">
                      <ul className="list-unstyled social-list mb-0">
                        <li className="list-inline-item tooltip-hover">
                          <a
                            href="https://t.me/your-telegram"
                            className="rounded"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <IconBrandTelegram size={18} />
                          </a>
                          <div className="tooltip-item">فیس بوک</div>
                        </li>
                        <li className="list-inline-item tooltip-hover">
                          <a
                            href="https://www.linkedin.com/in/your-profile"
                            className="rounded"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <IconBrandLinkedin size={18} />
                          </a>
                          <div className="tooltip-item">توییتر</div>
                        </li>
                        <li className="list-inline-item tooltip-hover">
                          <a
                            href="https://x.com/your-profile"
                            className="rounded"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <IconBrandX size={18} />
                          </a>
                          <div className="tooltip-item">لینکدین</div>
                        </li>
                        <li className="list-inline-item tooltip-hover">
                          <a
                            href="https://github.com/your-profile"
                            className="rounded"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <IconBrandGithub size={18} />
                          </a>
                          <div className="tooltip-item">دریبل</div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className="footer-nav-wrap text-white">
                    <h4 className="text-white">شرکت</h4>
                    <ul className="nav flex-column">
                      <li className="nav-item">
                        <Link href="/services" className="nav-link">
                          خدمات ما
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/about-us" className="nav-link">
                          درباره ما
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/contact-us" className="nav-link">
                          ارتباط با ما
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/team" className="nav-link">
                          تیم ما
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/blog" className="nav-link">
                          اخبار
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className="footer-nav-wrap text-white">
                    <h4 className="text-white">مجاز</h4>
                    <ul className="nav flex-column">
                      <li className="nav-item">
                        <Link href="#" className="nav-link">
                          اطلاعات حقوقی
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="#" className="nav-link">
                          سیاست حفظ حریم خصوصی
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="#" className="nav-link">
                          گزارش سوءاستفاده
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="#" className="nav-link">
                          شرایط استفاده از خدمات
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div className="row footer-top-wrap mt-md-4 mt-sm-0 mt-lg-0">
                <div className="col-12">
                  <div className="footer-nav-wrap text-white">
                    <h4 className="text-white">در تماس باشید</h4>
                    <ul className="get-in-touch-list">
                      <li className="d-flex align-items-center py-2">
                        <span>
                          <IconMapPin className=" me-2" />
                        </span>
                       مشهد بلوار کامیاب یین کامیاب ۳۰ و ۳۲ 
                      </li>
                      <li className="d-flex align-items-center py-2">
                        <span>
                          <IconMail className=" me-2" />
                        </span>
                        sadradadeh@gmail.com
                      </li>
                    </ul>
                    <div className="newsletter-form mt-3">
                      <input
                        type="text"
                        className="input-newsletter"
                        placeholder="ایمیل خود را وارد کنید"
                        name="EMAIL"
                        required
                        autoComplete="off"
                      />
                      <button
                        type="submit"
                        className="disabled"
                        style={{ pointerEvents: "all", cursor: "pointer" }}
                      >
                        <IconSend />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Top End */}

      {/* Footer Copyright Start */}
      <div className="footer-bottom gray-light-bg py-2">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md-5 col-lg-5">
              <p className="copyright-text pb-0 mb-0">
                کپی رایت © 1404. کلیه حقوق محفوظ است توسط{" "}
                <Link href="#" target="_blank">
                  داده پردازان افق آینده صدرا
                </Link>
              </p>
            </div>
            <div className="col-md-7 col-lg-6 d-none d-md-block d-lg-block">
              <ul className="list-inline policy-nav text-end social-list">
                {/* <li className="list-inline-item">
                  <Link href="#">سیاست حفظ حریم خصوصی</Link>
                </li>
                <li className="list-inline-item">
                  <Link href="#">شرایط و ضوابط</Link>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Copyright End */}
    </footer>
  );
};
