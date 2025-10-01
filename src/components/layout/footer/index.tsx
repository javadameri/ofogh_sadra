import {
  IconBrandLinkedin,
  IconMapPin,
  IconMail,
  IconBrandGithub,
  IconBrandWhatsapp,
  IconPhone,
} from "@tabler/icons-react";
import Link from "next/link";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="footer-section" dir="rtl">
      {/* بخش بالای فوتر */}
      <div className="footer-top gradient-bg">
        <div className="container">
          <div className="row">
            {/* اطلاعات شرکت */}
            <div className="col-sm-12 col-md-12 col-lg-7">
              <div className="row footer-top-wrap">
                <div className="col-md-4 col-sm-6">
                  <div className="footer-nav-wrap text-white">
                    <Image
                      src="/img/logo-white.png"
                      alt="افق صدرا"
                      width={100}
                      height={80}
                      className="mb-2"
                    />
                    <ul className="nav flex-column">
                      <li className="nav-item">
                        <Link href="/about" className="nav-link">
                          درباره ما
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/services" className="nav-link">
                          خدمات
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/contact" className="nav-link">
                          تماس با ما
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* اطلاعات تماس */}
            <div className="col-sm-12 col-md-6 col-lg-5">
              <div className="row footer-top-wrap mt-md-4 mt-sm-0 mt-lg-0">
                <div className="col-12">
                  <div className="footer-nav-wrap text-white">
                    <ul className="get-in-touch-list">
                      <li className="d-flex align-items-center py-2">
                        <span className="mx-1">
                          <IconMail className="me-2" />
                        </span>
                        contact@ofoghesadra.ir
                      </li>
                      <li className="d-flex align-items-center py-2">
                        <span className="mx-1">
                          <IconPhone className="me-2" />
                        </span>
                        ۰۹۰۳۶۶۷۸۱۳۳
                      </li>
                      <li className="d-flex align-items-center py-2">
                        <span className="mx-1">
                          <IconMapPin className="me-2" />
                        </span>
                        مشهد بلوار کامیاب یین کامیاب ۳۰ و ۳۲
                      </li>
                    </ul>

                    {/* شبکه‌های اجتماعی */}
                    <div className="social-nav mt-4">
                      <ul className="list-unstyled social-list mb-0">
                        <li className="list-inline-item tooltip-hover">
                          <a
                            href="https://www.linkedin.com/company/sadrasoft/"
                            className="rounded"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <IconBrandLinkedin size={18} />
                          </a>
                          <div className="tooltip-item">لینکدین</div>
                        </li>
                        <li className="list-inline-item tooltip-hover">
                          <a
                            href="https://github.com/SadraSoftCode"
                            className="rounded"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <IconBrandGithub size={18} />
                          </a>
                          <div className="tooltip-item">گیت‌هاب</div>
                        </li>
                        <li className="list-inline-item tooltip-hover">
                          <a
                            href="https://wa.me/989036678133"
                            className="rounded"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <IconBrandWhatsapp size={18} />
                          </a>
                          <div className="tooltip-item">واتساپ</div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* پایان بخش بالای فوتر */}

      {/* کپی‌رایت */}
      <div className="footer-bottom gray-light-bg py-2">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md-7 col-lg-7">
              <p className="copyright-text pb-0 mb-0 text-center text-md-start">
                © {new Date().getFullYear()} کلیه حقوق برای{" "}
                <Link href="/" target="_blank">
                  افق صدرا
                </Link>{" "}
                محفوظ است.
              </p>
            </div>
            <div className="col-md-5 col-lg-5 d-none d-md-block d-lg-block">
              <ul className="list-inline policy-nav text-end social-list">
                {/* میشه لینک قوانین و حریم خصوصی رو اینجا گذاشت */}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* پایان کپی‌رایت */}
    </footer>
  );
};
