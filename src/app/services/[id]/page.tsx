import dynamic from "next/dynamic";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { serviceItems, service2Items } from "@/constants/serviceItems";

const Layout = dynamic(
  () => import("@/components").then((module) => module.Layout),
  { ssr: false }
);
const ServicesDetails = dynamic(
  () => import("@/components").then((module) => module.ServicesDetails),
  { ssr: false }
);

interface ServicesDetailsPageProps {
  params: { id: string };
}

export async function generateMetadata({
  params,
}: ServicesDetailsPageProps): Promise<Metadata> {
  // همه سرویس‌های فارسی
  const allServices = [...serviceItems, ...service2Items];
  const service = allServices.find((s) => s.id === params.id);

  if (!service) {
    return {
      title: "خدمت پیدا نشد | افق صدرا",
      description: "هیچ خدمتی با این شناسه وجود ندارد.",
    };
  }

  return {
    title: `${service.title} | افق صدرا`,
    description: service.description,
    openGraph: {
      title: `${service.title} | افق صدرا`,
      description: service.description,
      images: [service.image?.src || "/img/services-details-hero.jpg"],
      url: `https://ofoghesadra.ir/services/${service.id}`, // دامنه فارسی
      siteName: "Ofogh e Sadra",
      locale: "fa_IR", // برای فارسی
      type: "article",
    },
  };
}

export const revalidate = 60;

export default function ServicesDetailsPage({ params }: ServicesDetailsPageProps) {
  const allServices = [...serviceItems, ...service2Items];
  const service = allServices.find((s) => s.id === params.id);

  if (!service) {
    notFound();
  }

  return (
    <Layout>
      <ServicesDetails service={service} />
    </Layout>
  );
}

export async function generateStaticParams() {
  const allServices = [...serviceItems, ...service2Items];
  return allServices.map((service) => ({
    id: service.id,
  }));
}
