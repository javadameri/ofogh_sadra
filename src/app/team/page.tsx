import { Layout, Team } from "@/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "تیم ما | داده پردازان افق آینده صدرا",
  description:
    "با اعضای حرفه‌ای تیم ما آشنا شوید که در زمینه طراحی، توسعه، و سئو تخصص دارند.",
  openGraph: {
    title: "تیم ما | داده پردازان افق آینده صدرا",
    description:
      "با اعضای حرفه‌ای تیم ما آشنا شوید که در زمینه طراحی، توسعه، و سئو تخصص دارند.",
    images: ["/img/team-hero.jpg"],
  },
};

export const revalidate = 60;

export default function TeamPage() {
  return (
    <div>
      <Layout>
        <Team />
      </Layout>
    </div>
  );
}
