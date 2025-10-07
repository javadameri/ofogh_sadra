import { AboutUs, Layout } from "@/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "درباره ما | داده پردازان افق آینده صدرا",
  description:
    "با تیم حرفه‌ای و ماموریت ما برای ارائه خدمات طراحی و توسعه وب آشنا شوید.",
  openGraph: {
    title: "درباره ما | داده پردازان افق آینده صدرا",
    description:
      "با تیم حرفه‌ای و ماموریت ما برای ارائه خدمات طراحی و توسعه وب آشنا شوید.",
    images: ["/img/logo-color.png"],
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

export default function AboutUsPage() {
  return (
    <div>
      <Layout>
        <AboutUs />
      </Layout>
    </div>
  );
}
