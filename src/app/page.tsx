import { Metadata } from "next";
import { HomePage, Layout } from "@/components";

export const metadata: Metadata = {
  title: "طراحی و توسعه وب حرفه‌ای | داده پردازان افق آینده صدرا",
  description:
    "ما وب‌سایت‌هایی خلاقانه، کاربرپسند و بهینه‌سازی‌شده برای موتورهای جستجو طراحی می‌کنیم که به رشد کسب‌وکار شما کمک می‌کند.",
  openGraph: {
    title: "طراحی و توسعه وب حرفه‌ای | داده پردازان افق آینده صدرا",
    description:
      "ما وب‌سایت‌هایی خلاقانه، کاربرپسند و بهینه‌سازی‌شده برای موتورهای جستجو طراحی می‌کنیم که به رشد کسب‌وکار شما کمک می‌کند.",
    images: ["/img/t1-hero-img.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export const revalidate = 60;

export default function Home() {
  return (
    <Layout>
      <HomePage />
    </Layout>
  );
}
