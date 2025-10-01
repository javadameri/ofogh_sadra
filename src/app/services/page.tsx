import dynamic from "next/dynamic";
import { Metadata } from "next";

const Layout = dynamic(
  () => import("@/components").then((module) => module.Layout),
  { ssr: false }
);
const Services = dynamic(
  () => import("@/components").then((module) => module.Services),
  { ssr: false }
);

export const metadata: Metadata = {
  title: "خدمات ما | افق صدرا",
  description:
    "خدمات حرفه‌ای افق صدرا در طراحی وب، توسعه، سئو و راه‌حل‌های دیجیتال متناسب با نیازهای کسب‌وکار شما.",
  openGraph: {
    title: "خدمات ما | افق صدرا",
    description:
      "خدمات حرفه‌ای افق صدرا در طراحی وب، توسعه، سئو و راه‌حل‌های دیجیتال متناسب با نیازهای کسب‌وکار شما.",
    images: ["/img/logo-color.png"],
    url: "https://ofoghesadra.ir/services", // بهتره مسیر فارسی باشه
    siteName: "SadraSoft",
    locale: "fa_IR", // برای فارسی
    type: "website",
  },
};

export const revalidate = 60;

export default function ServicesPage() {
  return (
    <Layout>
      <Services />
    </Layout>
  );
}
