"use client";
import Link from "next/link";
import { IconX } from "@tabler/icons-react";
import styles from "./Sidebar.module.scss";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {/* بک‌دراپ */}
      <div
        className={`${styles.backdrop} ${isOpen ? styles.show : ""}`}
        onClick={onClose}
      />

      {/* خود سایدبار */}
      <aside
        className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}
        dir="rtl"
      >
        <button className={styles.closeBtn} onClick={onClose}>
          <IconX size={24} />
        </button>

        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href="/about" onClick={onClose}>
                درباره ما
              </Link>
            </li>
            <li>
              <Link href="/services" onClick={onClose}>
                خدمات
              </Link>
            </li>
            {/* <li>
              <Link href="/blog" onClick={onClose}>
                بلاگ
              </Link>
            </li> */}
            <li>
              <Link href="/contact" onClick={onClose}>
                تماس با ما
              </Link>
            </li>
          </ul>
        </nav>

        <div className={styles.cta}>
          <a
            href={"/contact"}
            className="btn secondary-solid-btn check-btn"
            onClick={onClose}
          >
            مشاوره رایگان
          </a>
        </div>
      </aside>
    </>
  );
};
