"use client";
import useScrollCheck from "@/hooks/useScroll";
import Link from "next/link";
import Image from "next/image";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTelegram,
  IconBrandX,
  IconHeadphones,
  IconMenu2,
  IconPhone,
} from "@tabler/icons-react";
import { useState } from "react";

export const Header: React.FC = () => {
  // فقط زمانی که اسکرول باید فعال باشد، هوک را فراخوانی کنید
  const isScrolled = useScrollCheck(2);
  const [copied, setCopied] = useState(false);
  const handleCopyPhone = () => {
    navigator.clipboard.writeText("09366133558").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // اعلان بعد از 2 ثانیه مخفی می‌شه
    });
  };
  return (
    <header className="header">
      {/* Topbar */}
      <div id="header-top-bar" className="primary-bg py-2">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-md-7 col-lg-7 d-none d-md-block d-lg-block">
              <div className="topbar-text text-white">
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <span>
                      <IconHeadphones size={18} className="me-2" />
                    </span>
                    پشتیبانی فنی{" "}
                  </li>
                  <li
                    className="list-inline-item cursor-pointer"
                    onClick={handleCopyPhone}
                  >
                    <span>
                      <IconPhone size={18} className="me-2" />
                    </span>
                    09366133558{" "}
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 col-lg-4">
              <div className="topbar-text text-white">
                <ul className="list-inline d-flex  mb-0">
                  <li className="list-inline-item d-flex">
                    <a
                      href="https://t.me/your-telegram"
                      className="rounded"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IconBrandTelegram size={18} />
                    </a>
                  </li>
                  <li className="list-inline-item d-flex">
                    <a
                      href="https://www.linkedin.com/in/your-profile"
                      className="rounded"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IconBrandLinkedin size={18} />
                    </a>
                  </li>
                  <li className="list-inline-item d-flex">
                    <a
                      href="https://x.com/your-profile"
                      className="rounded"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IconBrandX size={18} />
                    </a>
                  </li>
                  <li className="list-inline-item d-flex">
                    <a
                      href="https://github.com/your-profile"
                      className="rounded"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IconBrandGithub size={18} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav
        className={`navbar navbar-expand-lg fixed-top white-bg ${
          isScrolled ? "affix" : ""
        }`}
      >
        <div className="container">
          <a className="navbar-brand d-flex" href="/">
            <Image
              width={60}
              height={60}
              src={"/img/logo-color.png"}
              alt="داده پردازان افق آینده صدرا"
              className="img-fluid"
            />
            {/* <h1 className="d-none d-lg-block">داده پردازان افق آینده صدرا</h1> */}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="ناوبری را تغییر دهید"
          >
            <span className="ti-menu">
              <IconMenu2 />
            </span>
          </button>
          <div
            className="collapse navbar-collapse h-auto"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto menu">
              <li>
                <Link href="/about-us">خانه</Link>
              </li>
              <li>
                <Link href="/about-us">درباره ما</Link>
              </li>
              <li>
                <a href="#" className="dropdown-toggle">
                  صفحات
                </a>
                <ul className="sub-menu">
                  <li>
                    <Link href={"/team"}>تیم ما </Link>
                  </li>
                  <li>
                    <Link href={"/blog"}>وبلاگ</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href={"/services"}>خدمات</Link>
              </li>
              <li>
                <Link href={"/contact-us"}>با ما تماس بگیرید</Link>
              </li>
              <li>
                <a href="#" className="btn secondary-solid-btn check-btn">
                  بررسی رایگان
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
