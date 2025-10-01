"use client";
import useScrollCheck from "@/hooks/useScroll";
import Link from "next/link";
import Image from "next/image";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandWhatsapp,
  IconMenu2,
} from "@tabler/icons-react";
import { useState } from "react";
import { Sidebar } from "./Sidebar";

export const Header: React.FC = () => {
  const isScrolled = useScrollCheck(2);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <header className="header" dir="rtl">
      {/* نوار بالایی */}
      <div id="header-top-bar" className="primary-bg py-2">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-md-7 col-lg-7 d-none d-md-block d-lg-block"></div>
            <div className="col-md-4 col-lg-4">
              <div className="topbar-text text-white">
                <ul className="list-inline d-flex justify-content-start mb-0 gap-3">
                  <li className="list-inline-item d-flex">
                    <a
                      href="https://www.linkedin.com/company/sadrasoft/?viewAsMember=true"
                      target="_blank"
                    >
                      <IconBrandLinkedin size={18} />
                    </a>
                  </li>
                  <li className="list-inline-item d-flex">
                    <a href="https://github.com/SadraSoftCode" target="_blank">
                      <IconBrandGithub size={18} />
                    </a>
                  </li>
                  <li className="list-inline-item d-flex">
                    <a href="https://wa.me/989036678133" target="_blank">
                      <IconBrandWhatsapp size={18} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* نوار اصلی */}
      <nav
        className={`navbar navbar-expand-lg fixed-top white-bg ${
          isScrolled ? "affix" : ""
        }`}
      >
        <div className="container d-flex justify-content-between align-items-center">
          {/* لوگو */}
          <Link className="navbar-brand d-flex" href="/">
            <Image
              width={60}
              height={60}
              src={"/img/logo-color.png"}
              alt="افق صدرا"
              className="img-fluid"
            />
          </Link>

          {/* دکمه منوی موبایل */}
          <button
            className="navbar-toggler d-lg-none"
            onClick={() => setIsSidebarOpen(true)}
            aria-label="Toggle sidebar"
          >
            <IconMenu2 color="black" size={28} />
          </button>

          {/* منوی دسکتاپ */}
          <div className="collapse navbar-collapse d-none d-lg-flex justify-content-between">
            <ul className="navbar-nav me-auto menu">
              <li>
                <Link href={"/about"}>درباره ما</Link>
              </li>
              <li>
                <Link href={"/services"}>خدمات</Link>
              </li>
              <li>
                <Link href={"/contact"}>تماس با ما</Link>
              </li>
            </ul>
            <a href={"/contact"} className="btn secondary-solid-btn check-btn">
              مشاوره رایگان
            </a>
          </div>
        </div>
      </nav>

      {/* Sidebar موبایل */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </header>
  );
};
